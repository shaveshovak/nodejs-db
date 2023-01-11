import pg from 'pg';
// const Pool = require('pg').Pool;
const { Pool}  = pg;

export const pool = new Pool({
    user: 'khatuna',
    host: 'localhost',
    database: 'students',
    password: '',
    port: 5432
});