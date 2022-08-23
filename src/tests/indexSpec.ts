import supertest from "supertest";
import app from '../index';
import { resizeImg } from "../controllers/resizeImage";
const request = supertest(app);

describe('Test endpoint responses', ():void => {

    it('gets the main api endpoint', async () : Promise<void> => {
        const response : supertest.Response = await request.get('/');
        expect(response.status).toBe(200);
    })

    it('gets the resize api endpoint', async () : Promise<void>=> {
        const response : supertest.Response= await request.get('/resize/?width=400&height=600&imageName=fjord');
        expect(response.status).toBe(200);
    })

    it('should test the image resizing function', async () : Promise<void>=> {
        const imageName : string= 'fjord';
        const resize : boolean= await resizeImg(imageName, 300, 600);
        expect(resize).toBe(true);
    })

});