import pg from 'pg';

const { Pool }  = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: '12345',
    port: 5432
});