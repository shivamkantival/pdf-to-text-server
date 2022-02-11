import express from 'express';
import mediaServiceRoute from './routes/mediaService.route';
import pdfToTextServiceRoute from './routes/pdfToTextService.route';

const app = express();

app.use('/media-service', mediaServiceRoute);
app.use('/pdf-2-txt-service', pdfToTextServiceRoute);
const port = 3001;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
