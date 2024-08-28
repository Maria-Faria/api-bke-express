import express from 'express';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import user from "./testeExport.js";
import { sum, address } from './testeExport.js';
import { PORT, HOST, ENVIRONMENT } from './config.js';

const app = express();

app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.json({message: "Bem vindo à API!"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT }`);
});