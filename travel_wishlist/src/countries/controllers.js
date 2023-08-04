import { pool } from "../../db.js";
import { getCountriesQuery, getCountryQueryById, createCountryQuery, updateCountryQuery, deleteCountryQuery } from "./queries.js";

export const getCountries = (req, res) => {
    pool.query(getCountriesQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const getCountryById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(getCountryQueryById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const createCountry = (req, res) => {
    const {  name, alpha2code, alpha3code } = req.body;
    // add country to db 

    pool.query(`SELECT * FROM countries WHERE alpha2code='${alpha2code}'`, (error, result) => {
        if (error) {
          throw error;
        }
    
        if (result.rows.length > 0) {
          res.status(400).send({ error: 'Alpha2 code already exists' });
        } else {
            pool.query(createCountryQuery, [name, alpha2Code, alpha3Code], (error, results) => {
                if(error) throw error;
        
                res.status(201).send('Country was successfully created');
        
            })
        }
      });
};

export const deleteCountry = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(deleteCountryQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Country was successfully removed');
    });
};

export const updateCountry = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, alpha2Code, alpha3Code } = req.body; 

    pool.query(updateCountryQuery, [name, alpha2Code, alpha3Code, id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Country was successfully updated');
    });
}