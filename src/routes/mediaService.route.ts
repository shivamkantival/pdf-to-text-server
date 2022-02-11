import { Router } from 'express';
import fileUpload from 'express-fileupload';
import fileUploadController from 'controllers/mediaService/fileUpload.controller';

const router = Router();

router.post('/upload', fileUpload(), fileUploadController);

export default router;
