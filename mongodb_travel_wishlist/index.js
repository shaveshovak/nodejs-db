import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routes from './routes/routes.js';

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3006;

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to the Mongo DB server')
});

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Serving is running on port ${PORT}`);
})