import { MediaObject } from 'typeDefs/modals/mediaObjects';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { Request, Response } from 'express';

export default function (req: Request, res: Response) {
  const { pdfToTranspile } = req.body as { pdfToTranspile: MediaObject };

  if (!pdfToTranspile || !pdfToTranspile.id) {
    return res.status(400).send('No file was provided');
  }

  // to simulate process taking some time
  setTimeout(() => {
    const file = fs.readFile(pdfToTranspile.path, async (err, data) => {
      try {
        if (err) {
          res.status(500).send(err);
        }

        const parseResult = await pdfParse(data);
        res.send({ text: parseResult.text.trim() });
      } catch (err) {
        res.status(500).send(err);
      }
    });
  }, 3000);
}
