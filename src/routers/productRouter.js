import express from 'express';
import deleteProduct from '../controllers/products/deleteProduct.js';
import editNameProduct from '../controllers/products/editNameProduct.js';
import editProduct from '../controllers/products/editProduct.js';
import insertProduct from '../controllers/products/insertProduct.js';
import productById from '../controllers/products/productById.js';
import productList from '../controllers/products/productList.js'

const router = express.Router();

router.get('/', productById);
router.get('/list', productList);
router.post('/', insertProduct);
router.put('/', editProduct);
router.patch('/', editNameProduct);
router.delete('/', deleteProduct);

export default router;