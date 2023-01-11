import { v4 as uuidv4 } from 'uuid';

let cards = []; 

export const getCards = (req, res ) => {
    console.log(cards);
    res.send(cards);
};

export const createCard = (req, res) => {
    console.log('Post request is done');

    const newCard = req.body; // the information that you are sending to the database
    const cardId = uuidv4();

    const cardWithId = { id: cardId, ...newCard };

    cards.push(cardWithId);

    res.send('The new card was addede successfully');
};

export const getCard = (req, res ) => {

    const { id } = req.params;
    const foundCard = cards.find(card => card.id === id);

    // console.log(req.params); 
    // console.log(foundcard); 

    res.send(foundCard);
};

export const deleteCard = (req, res ) => {

    const { id } = req.params;
    
    cards = cards.filter((item) => item.id !== id);

    console.log(cards);

    res.send(`The card with ID ${id} was removed`);
};

export const updateCard = () => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    const card = cards.find((card) => card.id === id);

    if(name) card.name = name;
    if(age) card.age = age;
    if(email) card.email = email;

    res.send(`The card with ID ${id} was updated`);
}