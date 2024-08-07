import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Rota GET no /user"
    });
});

router.post('/', (req, res) => {
    res.json({
        message: "Rota POST no /user"
    });
});

router.put('/', (req, res) => {
    res.json({
        message: "Rota PUT no /user"
    });
});

router.patch('/', (req, res) => {
    res.json({
        message: "Rota PATCH no /user"
    });
});

router.delete('/', (req, res) => {
    res.json({
        message: "Rota DELETE no /user"
    });
});

export default router;