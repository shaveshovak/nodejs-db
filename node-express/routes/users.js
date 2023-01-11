import express  from 'express'; 
import { deleteUser, getUser, getUsers, createUser, updateUser } from '../controllers/users.js';

const router = express.Router(); 

// get all users 
router.get('/', getUsers);

// post request 
router.post('/', createUser);

// get specific element using ID 
router.get('/:id', getUser);

// delete specific element using ID 
router.delete('/:id', deleteUser);

// update specific element using ID 
router.patch(':/id', updateUser);

export default router;