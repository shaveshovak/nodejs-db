const mongoose = require('mongoose');

// todo Schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
    // description: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: Date,
    //     required: true
    // }
})

module.exports = mongoose.model('todo', TodoItemSchema);