import express from "express";
import cors from 'cors';
import studentRoutes from './src/students/routes.js';

const app = express();
const PORT = 5300;

// middleware 
app.use(cors());
app.use(express.json());  // req.body

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} port`)
});

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.use('/api/students', studentRoutes); 
