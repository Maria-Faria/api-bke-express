import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Rota GET no /product"
    });
});

router.post('/', (req, res) => {
    res.json({
        message: "Rota POST no /product"
    });
});

router.put('/', (req, res) => {
    res.json({
        message: "Rota PUT no /product"
    });
});

router.patch('/', (req, res) => {
    res.json({
        message: "Rota PATCH no /product"
    });
});

router.delete('/', (req, res) => {
    res.json({
        message: "Rota DELETE no /product"
    });
});

export default router;