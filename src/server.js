import express from 'express';

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import authRouter from './routers/authRouter.js';

import { PORT, HOST, ENVIRONMENT } from './config.js';
import notFound from './controllers/notFound.js';
import logger from './middlewares/logger.js';
import welcome from './controllers/welcome.js';
import cors from 'cors';

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.get('/', welcome);

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/auth', authRouter);
app.use('*', notFound);

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT }`);
});