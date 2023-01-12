import { pool } from "../../db.js";
import { getStudentsQuery, getStudentQueryById, checkEmailExists, createStudentQuery, updateStudentQuery, deleteStudentQuery } from "./queries.js";

export const getStudents = (req, res) => {
    pool.query(getStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(getStudentQueryById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

export const createStudent = (req, res) => {
    const {  name, age, email, dob } = req.body;
    // check if email exist
    pool.query(checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.send('Email is already existed');
        }
    });

    // add student to db 
    pool.query(createStudentQuery, [name, age, email, dob], (error, results) => {
        if(error) throw error;

        res.status(201).send('Student was successfully created');

    })
};

export const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(deleteStudentQuery, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Student was successfully removed');
    });
};

export const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body; 

    pool.query(updateStudentQuery, [name, id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Student was successfully updated');
    });
}