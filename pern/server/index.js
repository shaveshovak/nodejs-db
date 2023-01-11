import express from "express";
import studentRoutes from './src/students/routes.js';

const app = express();
const PORT = 5300;

app.use(express.json()); 

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} port`)
});

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.use('/api/students', studentRoutes); 
