import express, { Router,Request,Response, NextFunction } from 'express';
import fs from 'fs';

const paramsValidation : Router= express.Router();

paramsValidation.get('/', (req:Request, res:Response,next:NextFunction)  => {
    const width : string = req.query.width as string;
    const height : string = req.query.height as string;
    const imageName :string = req.query.imageName as string;
    const w : number = parseInt(width);
    const h : number= parseInt(height);
    const path : string = `./images/${imageName}.jpg`;

    //Input Validations
    if(height==="" || width==="" || imageName===""){
        return res.status(400).send("ERROR: All fields are required (Width, Height and imageName)");
    }
    if(!req.query.height || !req.query.width || !req.query.imageName){
        return res.status(400).send("ERROR: All fields are required (Width, Height and imageName) in query");
    }
    if(w<=0 || isNaN(w) || h<=0 || isNaN(h)){
        return res.status(400).send("ERROR: Please enter a valid number for width and height");
    }
       
    try {
        if (!fs.existsSync(path)) {
            return res.status(400).send("ERROR: Image file doesn't exist");
        }
    } catch(err) {
      console.error(err)
    }
    next();
   });

export default paramsValidation;