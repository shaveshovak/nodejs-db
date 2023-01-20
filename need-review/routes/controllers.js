import { pets } from './data.js';

export const getAnimals = (req, res) => {
    let listOfPets = "";
    let petTypes = Object.keys(pets);

    petTypes.forEach((type) => {
        listOfPets+= `<li><a href="/animals/${type}">${type}</li>`;
    })

    res.send(`
        <h1> Adopt a pet! </h1>
        <p>Browse through the links below to find your new furry friend:</p>
        <ul>
            ${listOfPets}
        </ul>
    `);
};

export const getAnimalsByType = (req,res) => {
    const { pet_type } = req.params;
    const targetPets = pets[pet_type];

    let html = '';

    if(!targetPets) {
        return res.status(404).send("Sorry no animal matching to your request!");
    } 

    targetPets.forEach((pet, index) => {
        html += `<li><a href="/animals/${pet_type}/${index}">${pet.name}</li>`;
    });
    res.send(`
        <h1> List of ${pet_type} </h1>
        <ul>
            ${html}
        </ul>
    `);
};

export const getAnimalByTypeAndId = (req, res) => {
    const { pet_type, pet_id } = req.params;
    const pet = pets[pet_type][pet_id];

    res.send(
        `
            <h1> The ${pet.name} from type ${pet.type} </h1>
            <ul>
                <li>Age: ${pet.age}</li>
                <li>Breed: ${pet.breed}</li>
                <li>Description: ${pet.description}</li>
            </ul>
            <img src=${pet.url} alt=${pet.breed} />
        `
    )
};