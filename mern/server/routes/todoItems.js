const router = require('express').Router();
const todosItemsModel = require('../models/todoItems');

// POST
router.post('/api/todos', async (req, res) => {
    try {
        const newItem = new todosItemsModel({
            item: req.body.item
        });

        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
    } catch (err) {
        res.json(err);
    }
});

// GET 
router.get('/api/todos', async (req, res) => {
    try {
        const todoAllItems = await todosItemsModel.find({});
        res.status(200).json(todoAllItems);
    } catch (err) {
        res.json(err);
    }
});

// UPDATE put, patch
router.patch('/api/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateContent = req.body;
        const options = { new: true }

        const updateItem = await todosItemsModel.findByIdAndUpdate(
            id, updateContent, options
        );

        res.send(updateItem);
    } catch (err) {
        res.json(err);
    }
});

// DELETE
router.delete('/api/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletetItem = await todosItemsModel.findByIdAndDelete(id);

        res.status(200).send(deletetItem);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;