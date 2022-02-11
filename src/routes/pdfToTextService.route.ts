import express, { Router } from 'express';
import parsePdfController from 'controllers/pdfToTextService/parsePdf.controller';

const router = Router();

router.use(express.json());

router.use('/parse-pdf', parsePdfController);

export default router;
