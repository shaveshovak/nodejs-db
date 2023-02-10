const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors')
const todoItemsRoute = require('./routes/todoItems');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8081;

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.log(err));

app.use('/', todoItemsRoute);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));