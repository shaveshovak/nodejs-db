import express from "express";
import { getCountries, getCountryById, updateCountry, deleteCountry, createCountry } from "./controllers.js";

const router = express.Router(); 

router.get('/', getCountries);
router.post('/', createCountry);
router.get('/:id', getCountryById);
router.delete('/:id', deleteCountry);
router.put('/:id', updateCountry);

export default router;