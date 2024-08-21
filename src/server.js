import express from 'express';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import user from "./testeExport.js";
import { sum, address } from './testeExport.js';

const app = express();
const port = 3000;

app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.send('Hello, world');
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${user.name}`);
    console.log(address);
    console.log(sum(2, 30));
});