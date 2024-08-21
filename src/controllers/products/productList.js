//import { getAll } from "../../models/productModel.js";

const productList = async (req, res) => {
    //const products = await getAll();
    const products = [];
    res.json(products);
};

export default productList;