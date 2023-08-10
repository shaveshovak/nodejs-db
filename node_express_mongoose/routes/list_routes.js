import express from 'express';
import User from '../modules/list_module.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            first_name: req.body.first_name,
            last_name: req.body.last_name
        });

        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch(err) {
        res.json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                first_name: req.body.first_name,
                last_name: req.body.last_name
            },
            { new: true } // This option returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: 'Could not update user.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Could not delete user.' });
    }
});

router.put('/update-all', async (req, res) => {
    try {
        await User.updateMany(
            { first_name: 'John' }, // Filter for entries with the name "John"
            { $set: { first_name: 'Bob' } } // Update field
        );
        
        res.status(200).json({ message: 'All matching items updated successfully.' });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: 'Could not update items.' });
    }
});

export default router;