import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './src/students/routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use 3000 as the default port if PORT is not defined in .env

app.use(express.json());

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} port`)
});

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.use('/api/students', studentRoutes); 
