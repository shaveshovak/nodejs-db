import pg from 'pg';

const { Pool }  = pg;

export const pool = new Pool({
    user: 'your_user_name',
    host: 'your_hostname',
    database: 'your_db',
    password: 'your_password',
    port: 5432
});