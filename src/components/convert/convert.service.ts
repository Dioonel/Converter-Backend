import sharp from "sharp";
import fs from "fs/promises";

export class ConvertService {
    async convertImage(imagePath: string) {
        try {
            await fs.access(imagePath);
            const data = await sharp(imagePath).toFormat('png').toBuffer();
            return data;
        } catch (err) {
            console.log('Error converting image');
            throw err;
        }
    }
}