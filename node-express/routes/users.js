import express  from 'express'; 
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        name: "John",
        age: 30,
        email: "john@gmail.com"
    },
    {
        name: "Jane",
        age: 43,
        email: "jane@gmail.com"
    }
]; // mocked data 

// get all users 
router.get('/', (req, res ) => {
    console.log(users);

    res.send(users);
});

// post request 
router.post('/', (req, res) => {
    console.log('Post request is done');

    const newUser = req.body; // the information that you are sending to the database
    const userId = uuidv4();

    const userWithId = { id: userId, ...newUser };

    users.push(userWithId);

    res.send('The new user was addede successfully');
});

// get user with specific id 
router.get('/:id', (req, res ) => {

    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    // console.log(req.params);
    // res.send(req.params);

    console.log(foundUser);
    res.send(foundUser);
});

// delete user with specific id 
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // John - 12345
    // Jane - 3451

    users = users.filter((user) => user.id !== id );
    console.log(users);

    res.send(`The user with Id: ${id} was removed`);
});

export default router;