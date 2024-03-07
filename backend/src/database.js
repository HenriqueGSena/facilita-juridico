const { Client } = require('pg');

const client = new Client({
    user: 'user',
    host: 'localhost',
    database: 'postgres',
    password: 'user123',
    port: '5432'
});

module.exports = client;