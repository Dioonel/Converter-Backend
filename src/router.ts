import { Application } from 'express';

import convertRouter from './components/convert/convert.controller.js';

export const router = (app: Application) => {
    app.use('/convert', convertRouter);
};