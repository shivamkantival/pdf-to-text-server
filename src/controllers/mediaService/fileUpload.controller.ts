import { UploadedFile } from 'express-fileupload';
import { v4 as uuid } from 'uuid';
import path from 'path';
import fs from 'fs';
import {
  MediaObject,
  PLATFORM_MEDIA_TYPES,
} from 'typeDefs/modals/mediaObjects';
import { Response, Request } from 'express';

export default function (req: Request, res: Response) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No file was uploaded');
  }

  const fileInstance = req.files.file as UploadedFile;
  const uniqueId = uuid();

  // this ideally should be S3 or similar block storage
  const fileDirectory = path.resolve(process.cwd(), 'temp/uploadedFiles');
  const filePath = `${fileDirectory}/${uniqueId}-${fileInstance.name}`;
  if (!fs.existsSync(fileDirectory)) {
    fs.mkdirSync(fileDirectory, { recursive: true });
  }

  fileInstance.mv(filePath, function (err) {
    if (err) return res.status(500).send(err);

    res.send({
      id: uniqueId,
      path: filePath,
      type: PLATFORM_MEDIA_TYPES.PDF,
    } as MediaObject);
  });
}
