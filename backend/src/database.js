const { request, response } = require('express');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'postgres',
    password: 'user123',
    port: '5432'
});

const getAllContatos = (request, response) => {
    pool.query('SELECT * FROM contatos', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const createContatos = (request, response) => {
    const { nome, email, telefone } = request.body;

    pool.query('INSERT INTO contatos (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *', [nome, email, telefone], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Contato adicionado com ID: ${results.rows[0].id}`);
    });
};

module.exports = { getAllContatos, createContatos }