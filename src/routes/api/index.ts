import express , {Response, Request} from 'express';
import paramsValidation from '../../middlewares/paramsValidaiton';
import resizeImage from '../../controllers/resizeImage';
const routes = express.Router();

routes.get('/', (req:Request , res:Response) :void => {
    res.send('main api route');
   });

//Middlewares
routes.use('/resize', paramsValidation, resizeImage);

export default routes;