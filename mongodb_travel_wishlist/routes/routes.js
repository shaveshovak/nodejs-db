import express from 'express';
import { validationResult } from 'express-validator';
import { Country } from '../modules/modules.js';

const router = express.Router();

router.get('/countries', async (req, res) => {
    try {
        let countries;
        if (req.query.sort === 'true') {
            countries = await Country.find().sort({ name: 1 });
        } else {
            countries = await Country.find();
        }
        res.json(countries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new country
router.post('/countries', async (req, res) => {
    // Data validation using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check for duplicate country
    const { alpha2Code, alpha3Code } = req.body;
    const existingCountry = await Country.findOne({
        $or: [
            { alpha2Code: alpha2Code.toUpperCase() },
            { alpha3Code: alpha3Code.toUpperCase() }
        ]
    });
    if (existingCountry) {
        return res.status(400).json({ message: "Country already exists" });
    }

    // Create new country object
    const country = new Country({
        name: req.body.name,
        alpha2Code: alpha2Code.toUpperCase(),
        alpha3Code: alpha3Code.toUpperCase(),
        visited: false // Default to not visited
    });
    try {
        const newCountry = await country.save();
        res.status(201).json(newCountry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET country by code
// router.get('/countries/:code', async (req, res) => {
//     const code = req.params.code;
//     try {
//         // Find country by alpha2Code or alpha3Code
//         const country = await Country.find({
//             $or: [
//                 { alpha2Code: code.toUpperCase() },
//                 { alpha3Code: code.toUpperCase() }
//             ]
//         });
//         if (!country) {
//             return res.status(404).json({ message: "Country not found" });
//         }
//         res.json(country);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

export default router;