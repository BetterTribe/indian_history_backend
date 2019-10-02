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
    const id = request.params.id;

    pool.query('SELECT * FROM member where id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
}

const getParties = (request, response) => {
    pool.query('SELECT * FROM party ORDER BY name ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPartyById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM party where id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
}

const getStates = (request, response) => {
    pool.query('SELECT * FROM state ORDER BY name ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStateById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM state where id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
}


const getcountry = (request, response) => {
    pool.query('SELECT * FROM country ORDER BY name ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

pool.on('connect', () => {
    console.log('connected to the Database');
});