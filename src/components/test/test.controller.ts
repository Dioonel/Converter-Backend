import { Router } from 'express';

import { TestService } from './test.service.js';

const router = Router();
const service = new TestService();

router.get('/', async (req, res) => {
    try{
        const response = await service.get();
        res.json(response);
    } catch (err) {
        res.status(400).json({ error: true });
    }
});

router.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const response = await service.post(req.body);
        res.json(response);
    } catch (err) {
        res.status(400).json({ error: true });
    }
});

export default router;