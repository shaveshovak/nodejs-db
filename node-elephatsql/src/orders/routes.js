import express from "express";
import { body } from 'express-validator';
import { getData, createData, getDataById, deleteDataById, updateData, getDataSubdata } from "../../shared/controllers.js";
import { getQueriesQuery, createOrderQuery, getOrderQueryById, deleteOrderQueryById, updateOrderQueryById } from "./queries.js";

const router = express.Router(); 

router.get('/', (req, res) => {
    getData(req, res, getQueriesQuery);
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getOrderQueryById);
});

router.post('/', (req, res) => {
    const data = {
        price: req.body.price,
        date: req.body.date,
        user_id: req.body.user_id
    };
    createData(req, res, createOrderQuery, data);
}); 

router.delete('/:id', (req, res) => {
    deleteDataById(req, res, deleteOrderQueryById);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Add your validation checks here using express-validator
    // For example, you can validate that 'price' and 'date' are not empty strings
    body('price').notEmpty().withMessage('Price must not be empty').run(req);
    body('date').notEmpty().withMessage('Date must not be empty').run(req);

    const data = {
        price: req.body.price,
        date: req.body.date,
        user_id: req.body.user_id
    };
    updateData(req, res, updateOrderQueryById, data, id);
});

export default router;