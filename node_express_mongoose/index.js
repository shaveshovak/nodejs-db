import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import listRoutes from './routes/list_routes.js';

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

app.use('/api/items', listRoutes);

app.listen(PORT, () => {
    console.log(`Serving is running on port ${PORT}`);
})