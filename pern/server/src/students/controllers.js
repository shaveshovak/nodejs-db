import { pool } from "../../db.js";
import { getStudentsQuery, getStudentQueryById, createStudentQuery, updateStudentQuery, deleteStudentQuery } from "./queries.js";

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
    const {  name, lastName, age, email } = req.body;
    // add student to db 
    pool.query(createStudentQuery, [name, lastName, age, email], (error, results) => {
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
    const { name, age, email, lastname} = req.body; 

    pool.query(updateStudentQuery, [name, age, email, lastname, id], (error, results) => {
        if(error) throw error;
        res.status(200).send('Student was successfully updated');
    });
}