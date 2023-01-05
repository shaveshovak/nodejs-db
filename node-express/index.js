import express  from 'express'; 
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import cardsRoutes from './routes/cards.js';

// const express =  require('express');

const app = express();
const PORT = 4000; 

app.use(bodyParser.json());

app.listen(PORT, () => { 
    console.log(`Server is running on: https://localhost:${PORT}`); 
})

app.get("/", (req, res) => {
    console.log('TEST');
    res.send('Hello from page');
}); 

app.use('/users', usersRoutes);

app.use('/cards', cardsRoutes);
