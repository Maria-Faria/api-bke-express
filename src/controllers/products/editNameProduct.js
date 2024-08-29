import { updateProduct } from "../../models/productModel.js";

const editNameProduct = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const product = {id: +id, name};

    const result = await updateProduct(product);

    if(!result) {
        return res.status(500).json({error: "Erro ao editar o nome do produto"});
    }

    return res.json({success: "Nome do produto editado com sucesso!", product: result});
};

export default editNameProduct;