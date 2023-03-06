const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const todoItemsRoute = require('./routes/todoItems');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8084;

mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Database is connected')
    })
    .catch(err => console.log(err));

app.use('/', todoItemsRoute);

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});