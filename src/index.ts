import express from 'express';

import { router } from './router.js';
import { logError, boomErrorHandler, errorHandler } from './middlewares/error.handlers.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

router(app);                                                     // Router is one of the last things to be called, only before error handling

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});