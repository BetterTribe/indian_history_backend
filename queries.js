const pg = require('pg');
require('dotenv').config();

const config = {
    user: process.env.USER,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: process.env.PASSWORD,
    max: process.env.MAX,
    idleTimeoutMillis: process.env.IDLE_TIME,
};

const pool = new pg.Pool(config);

const getMembers = (request, response) => {
    pool.query('SELECT * FROM member ORDER BY name ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getMemberById = (request, response) => {
    
}


pool.on('connect', () => {
    console.log('connected to the Database');
});