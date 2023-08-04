import express from 'express';
import dotenv from 'dotenv';
import { mountRoutes } from './mount_routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json()); // extend equest with body of post request

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} port`)
});

mountRoutes(app);