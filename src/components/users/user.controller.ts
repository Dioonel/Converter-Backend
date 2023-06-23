import { Router } from 'express';

import { UserService } from './user.service.js';

const router = Router();
const service = new UserService();

router.get('/', async (req, res) => {
    try{
        const users = await service.getUsers();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: true });
    }
});

export default router;