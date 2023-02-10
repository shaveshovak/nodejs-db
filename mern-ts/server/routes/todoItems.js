const router = require('express').Router();
const todoItemsModel = require('../models/todoItems');

router.post('/api/items', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        });

        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
    } catch(err) {
        res.json(err);
    }
});

router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err);
    }
});

router.patch('/api/items/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateContent = req.body;
        const options = { new: true };

        const updateItem = await todoItemsModel.findByIdAndUpdate(
            id, updateContent, options
        );
        res.send(updateItem);
    } catch(err) {
        res.json(err);
    }
});

router.delete('/api/items/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json('Item deleted');
    } catch(err) {
        res.json(err);
    }
})

module.exports = router;