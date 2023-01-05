import express  from 'express'; 

const router = express.Router();

let cards = [
    {
        name: "John 1",
        age: 30,
        email: "john@gmail.com"
    },
    {
        name: "Jane 2",
        age: 43,
        email: "jane@gmail.com"
    }
];

router.get('/', (req, res ) => {
    console.log(cards);

    res.send(cards);
});

// post request 
router.post('/', (req, res) => {
    console.log('Post request is done');

    const newCard = req.body; // the information that you are sending to the database
    const cardId = uuidv4();

    const cardWithId = { id: cardId, ...newCard };

    cards.push(cardWithId);

    res.send('The new user was addede successfully');
});

// get user with specific id 
router.get('/:id', (req, res ) => {

    const { id } = req.params;
    const foundCards = cards.find(card => card.id === id);

    // console.log(req.params);
    // res.send(req.params);

    console.log(foundCards);
    res.send(foundCards);
});

// delete user with specific id 
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // John - 12345
    // Jane - 3451

    cards = cards.filter((card) => card.id !== id );
    console.log(cards);

    res.send(`The user with Id: ${id} was removed`);
});

export default router;