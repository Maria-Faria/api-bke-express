import { updateProduct } from "../../models/productModel.js";

const editProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    product.id = +id;

    const result = await updateProduct(product);

    if(!result) {
        return res.status(500).json({error: "Erro ao editar o produto"});
    }

    return res.json({success: "Produto editado com sucesso!", product: result});
};

export default editProduct;