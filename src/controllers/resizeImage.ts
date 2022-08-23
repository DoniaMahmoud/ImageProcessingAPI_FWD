import express, { Router,Request,Response } from 'express';
import sharp from 'sharp';
import fs from"fs"
import path from 'path';

const resizeImage : Router = express.Router();

export async function resizeImg(imageName : string ,w: number,h:number) : Promise<boolean > {
         await sharp(`./images/${imageName}.jpg`)
        .resize(w, h)
        .toFile(`./images/thumbnails/${w}W_${h}H_${imageName}.jpg`)
          return true;
              // .then(() => {
        //     const newLocal = true;
        //     return newLocal;
        //   });
}

resizeImage.get('/',  async (req:Request, res:Response) : Promise<void> => {
    const width : string = req.query.width as string;
    const height : string = req.query.height as string;
    const imageName :string = req.query.imageName as string;
    const w : number = parseInt(width);
    const h : number= parseInt(height);
    const resizedAbsolutePath : string =`${path.resolve('./')}/images/thumbnails/${w}W_${h}H_${imageName}.jpg`
    const thumbDirectory : string = `${path.resolve('./')}/images/thumbnails`;

    try {
        if (!fs.existsSync(thumbDirectory)){
            fs.mkdirSync(thumbDirectory);
        }
        if (fs.existsSync(resizedAbsolutePath)) {
            return res.sendFile(resizedAbsolutePath);
        }
        else{
            try {
               await resizeImg(imageName,w,h)
                res.sendFile(resizedAbsolutePath);
              } catch (error) {
                console.log(error);
                res.send(error);
              }
        }
    } catch(err) {
      console.error(err)
    } 
    
   });

export default resizeImage;