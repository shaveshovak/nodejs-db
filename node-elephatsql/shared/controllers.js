import { pool } from "../db.js";

export const getData = (req, res, dataQuery) => {
    pool.query(dataQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const getDataById = (req, res, dataQueryById) => {
    const id = parseInt(req.params.id);

    pool.query(dataQueryById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const createData = (req, res, createQuery, data) => {
    const { ...dataValues } = data;

    pool.query(createQuery, Object.values(dataValues), (error, results) => {
        if(error) throw error;

        res.status(201).send('Data was successfully created');
    })
};

export const deleteDataById = (req, res, deleteQuery) => {
    const id = parseInt(req.params.id);

    pool.query(deleteQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Data was successfully removed');
    });
};

export const updateData = (req, res, updateDataQuery, data, id) => {
    const { ...dataValues } = data;

    pool.query(updateDataQuery, [...Object.values(dataValues), id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Data was successfully updated');
    });
};

export const getDataSubdata = (userId, callback, getData) => {
    pool.query(getData, [userId], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results.rows);
        }
    });
};

export const checkDataSubdata = (userId, callback, checkDataSubdataQuery) => {
    pool.query(checkDataSubdataQuery, [userId], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            const orderCount = parseInt(results.rows[0].count);
            callback(null, orderCount);
        }
    });
};