import { Router } from 'express';
import multer from "multer";

import { ConvertService } from './convert.service.js';
import { joiValidator } from './../../middlewares/joi.validator.js';
import { ValidInputFormats, ValidOutputFormats, outputFormats } from './formats.js';

const router = Router();
const service = new ConvertService();
const upload = multer({ dest: 'uploads/' });

router.post('/',
    upload.single('image'),
    joiValidator(ValidOutputFormats, 'body'),
    async (req, res) => {
        try{
            const imagePath = req.file.path;
            const response = await service.convertImage(imagePath, req.body.outputFormat as outputFormats);
            res.type(req.body.outputFormat);
            res.send(response);
            await service.emptyDirectory();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
});

export default router;