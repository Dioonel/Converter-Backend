import { Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { ConvertService } from './convert.service.js';

const router = Router();
const service = new ConvertService();

router.get('/:name', async (req, res) => {
    try{
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const imagePath = join(__dirname, '../../imgs', req.params.name);
        const response = await service.convertImage(imagePath);
        res.type('png');
        res.send(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;