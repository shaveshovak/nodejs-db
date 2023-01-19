import express from 'express';
import StudentsRouter from './routes/students.js';

const PORT = 8082;
const app = express();

app.listen(PORT, function(req, res)  {
    console.log('Hello World');
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/students', StudentsRouter);