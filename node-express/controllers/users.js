import { v4 as uuidv4 } from 'uuid';

let users = []; 

export const getUsers = (req, res ) => {
    console.log(users);
    res.send(users);
};

export const createUser = (req, res) => {
    console.log('Post request is done');

    const newUser = req.body; // the information that you are sending to the database
    const userId = uuidv4();

    const userWithId = { id: userId, ...newUser };

    users.push(userWithId);

    res.send('The new user was addede successfully');
};

export const getUser = (req, res ) => {

    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    // console.log(req.params); 
    // console.log(foundUser); 

    res.send(foundUser);
};

export const deleteUser = (req, res ) => {

    const { id } = req.params;
    
    users = users.filter((item) => item.id !== id);

    console.log(users);

    res.send(`The user with ID ${id} was removed`);
};

export const updateUser = () => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    const user = users.find((user) => user.id === id);

    if(name) user.name = name;
    if(age) user.age = age;
    if(email) user.email = email;

    res.send(`The user with ID ${id} was updated`);
}