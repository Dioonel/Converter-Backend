import sharp from "sharp";
import fs from "fs/promises";
import fsExtra from "fs-extra"
import { outputFormats } from "./formats.js";

export class ConvertService {
    async convertImage(imagePath: string, type: outputFormats) {
        try {
            await fs.access(imagePath);
            const data = await sharp(imagePath).toFormat(type).toBuffer();
            return data;
        } catch (err) {
            console.log('Error converting image');
            throw err;
        }
    }

    async emptyDirectory() {
        try {
            await fsExtra.emptyDir('uploads');
            console.log('Uploads directory emptied successfully.');
        } catch (error) {
            console.error('Error emptying uploads directory:', error);
        }
    }
}
