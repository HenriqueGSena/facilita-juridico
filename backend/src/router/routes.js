const express = require("express");
const client = require("../database");

const router = express.Router();


router.post("/createContact", async (request, response) => {
    try {
        await client.connect();
        const { nome, email, telefone } = request.body;
        const result = await client.query('INSERT INTO contatos (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *', [nome, email, telefone]);
        return response.status(201).json(result.rows);
    } catch (error) {
        console.error('Erro ao inserir no banco de dados:', error);
        return response.status(500).json({ error: 'Erro ao inserir no banco de dados' });
    }
});

router.get("/listAllContact", async (request, response) => {
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM contatos');
        return response.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao ler do banco de dados:', error);
        return response.status(500).json({ error: 'Erro ao ler do banco de dados', details: error.message });
    }
});

module.exports = router;