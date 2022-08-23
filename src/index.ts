import express from 'express';
import routes from './routes/api/index';

const app = express();
const port : number = 3000;

app.use('/',routes)

 app.listen(port, () : void=> {
  console.log(`server started at http://localhost:${port}`)
 });

export default app;