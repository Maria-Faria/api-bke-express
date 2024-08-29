import express from 'express';
import deleteProduct from '../controllers/products/deleteProduct.js';
import editNameProduct from '../controllers/products/editNameProduct.js';
import editProduct from '../controllers/products/editProduct.js';
import insertProduct from '../controllers/products/insertProduct.js';
import productById from '../controllers/products/productById.js';
import productList from '../controllers/products/productList.js'

const router = express.Router();

router.post('/', insertProduct);
router.get('/list', productList);
router.get('/:id', productById);
router.put('/:id', editProduct);
router.patch('/:id', editNameProduct);
router.delete('/:id', deleteProduct);

export default router;