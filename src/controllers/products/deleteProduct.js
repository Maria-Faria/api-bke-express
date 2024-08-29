import { removeProduct } from "../../models/productModel.js";

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const product = await removeProduct(+id);

    if(!product) {
        return res.status(404).json({error: "Erro ao remover o produto"});
    }

    return res.json({success: "Produto removido com sucesso!", product});
};

export default deleteProduct;