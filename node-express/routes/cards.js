import express  from 'express'; 
import { deleteCard, getCard, getCards, createCard, updateCard } from '../controllers/cards.js';

const router = express.Router(); 

// get all Cards 
router.get('/', getCards);

// post request 
router.post('/', createCard);

// get specific element using ID 
router.get('/:id', getCard);

// delete specific element using ID 
router.delete('/:id', deleteCard);

// update specific element using ID 
router.patch(':/id', updateCard);

export default router;