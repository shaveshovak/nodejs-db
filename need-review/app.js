import express from 'express';

const app = express();
const PORT = 8082;

app.listen(PORT, () => {
    console.log('Server is running')
})

