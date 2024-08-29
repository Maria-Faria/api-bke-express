import { create } from "../../models/productModel.js";

const insertProduct = async (req, res) => {
    const product = req.body;

    const result = await create(product);

    if(!result) {
        return res.status(500).json({
            error: "Erro ao cadastrar o produto"
        });
    }

    return res.json({success: "Produto cadastrado com sucesso!", product: result});
};

export default insertProduct;