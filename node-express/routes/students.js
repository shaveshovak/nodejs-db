import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Get the elements from student router');
    res.send('Get the element')
});

export default router;