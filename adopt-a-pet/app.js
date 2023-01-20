import express from 'express';
import { pets } from './data.js';

const app = express();
const PORT = 8083;

app.listen(PORT, () => {
    console.log('Server is running!');
});

app.get('/animals', (req, res) => {
    let listOfPets = "";
    let petTypes = Object.keys(pets);

    petTypes.forEach((type) => {
        listOfPets += `
            <li> <a href="/animals/${type}">${type}</a></li>
        `
    })


    // res.send('<h1>Adopt a Pet!</h1>');
    res.send(
        `
            <h1>Adopt a Pet!</h1>
            <p>Browse through the links below to find your new furry friend:</p>
            <ul>
                ${listOfPets}
            </ul>
        `
    );
});

app.get('/animals/:pet_type', (req, res) => {
    const { pet_type } = req.params;
    const targetPets = pets[pet_type];

    // res.send(targetPets);

    let html = ""; 
    
    if(!targetPets) {
        return res
                .status(404)
                .send(`Sorry the ${pet_type} was not found`);
    } 

    targetPets.forEach((type, index) => {
        html += `
            <li><a href="/animals/${pet_type}/${index}">${type.name}</a></li>
        `
    })

    res.send(
        `
            <h1>Adopt a Pet!</h1>
            <p>Browse through the links below to find your new furry friend:</p>
            <ul>
                ${html}
            </ul>
        `
    );
});

app.get('/animals/:pet_type/:pet_id', (req, res) => {
    const { pet_type, pet_id } = req.params;

    const pet = pets[pet_type][pet_id]; // information of one element

    if(!pet) {
        return res
                .status(404)
                .send(`There is the ${pet_id}th was not found`);
    } 

    res.send(
        `
            <h1>${pet.name}</h1>
            <ul>
                <li>Age: ${pet.age}</li>
                <li>Breed:  ${pet.breed}</li>
            </ul>
            <p>${pet.description}</p>
            <img src=${pet.url} alt=${pet.breed} />
        `
    );

})