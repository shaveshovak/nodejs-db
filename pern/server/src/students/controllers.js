import { pool } from "../../db.js";
import { getStudentsQuery } from "./queries.js";

export const getStudents = (req, res) => {
    // res.send('Student api route')
    pool.query(getStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};