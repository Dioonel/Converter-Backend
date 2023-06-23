import { Application } from 'express';

import userRouter from './components/users/user.controller.js';
import testRouter from './components/test/test.controller.js';

export const router = (app: Application) => {
    app.use('/users', userRouter);
    app.use('/test', testRouter);
};