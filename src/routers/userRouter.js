import express from 'express';
import userList from '../controllers/user/userList.js';
import userById from '../controllers/user/userById.js';
import insertUser from '../controllers/user/insertUser.js';
import editUser from '../controllers/user/editUser.js';
import editNameUser from '../controllers/user/editNameUser.js';
import deleteUser from '../controllers/user/deleteUser.js';

const router = express.Router();

router.post('/', insertUser);
router.get('/list', userList);
router.get('/:id', userById);
router.put('/:id', editUser);
router.patch('/:id', editNameUser);
router.delete('/:id', deleteUser);

export default router;