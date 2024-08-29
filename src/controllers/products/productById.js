import { getProductById } from "../../models/productModel.js";

const productById = async (req, res) => {
    const { id } = req.params;

    const product = await getProductById(+id);

    if(!product) {
        return res.status(404).json({error: "Produto não encontrado"});
    }

    return res.json({success: "Produto encontrado com sucesso!", product});
};

export default productById;