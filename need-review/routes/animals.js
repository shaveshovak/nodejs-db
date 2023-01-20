import express from 'express';
import { getAnimals, getAnimalsByType, getAnimalByTypeAndId } from './controllers.js';

app.get('/', getAnimals);

app.get('/animals/:pet_type', getAnimalsByType);

app.get('/animals/:pet_type/:pet_id', getAnimalByTypeAndId);