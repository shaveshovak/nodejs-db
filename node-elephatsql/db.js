import pg from 'pg';

const { Pool }  = pg;

export const pool = new Pool({
    user: 'ikcarwau',
    host: 'queenie.db.elephantsql.com',
    database: 'ikcarwau',
    password: 'DLHOs10OU8dWAW-1baIraebtpoLPdaBO',
    port: 5432
});