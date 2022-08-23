"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var paramsValidation = express_1.default.Router();
paramsValidation.get('/', function (req, res, next) {
    var width = req.query.width;
    var height = req.query.height;
    var imageName = req.query.imageName;
    var w = parseInt(width);
    var h = parseInt(height);
    var path = "./images/".concat(imageName, ".jpg");
    //Input Validations
    if (height === "" || width === "" || imageName === "") {
        return res.status(400).send("ERROR: All fields are required (Width, Height and imageName)");
    }
    if (!req.query.height || !req.query.width || !req.query.imageName) {
        return res.status(400).send("ERROR: All fields are required (Width, Height and imageName) in query");
    }
    if (w <= 0 || isNaN(w) || h <= 0 || isNaN(h)) {
        return res.status(400).send("ERROR: Please enter a valid number for width and height");
    }
    try {
        if (!fs_1.default.existsSync(path)) {
            return res.status(400).send("ERROR: Image file doesn't exist");
        }
    }
    catch (err) {
        console.error(err);
    }
    next();
});
exports.default = paramsValidation;
