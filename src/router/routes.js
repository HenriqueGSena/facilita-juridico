const express = require("express")
const client = require("../database")

const router = express.Router();


router.post("/create", async (request, response) => {
    try {
        await client.connect();
        const { nome, email, telefone } = request.body;
        const result = await client.query('INSERT INTO contatos (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *', [nome, email, telefone]);
        await client.end();
        return response.status(201).json(result.rows);
    } catch (error) {
        console.error('Erro ao inserir no banco de dados:', error);
        return response.status(500).json({ error: 'Erro ao inserir no banco de dados' });
    }
});

router.get("/list", async (request, response) => {
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM contatos');
        await client.end();
        return response.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao ler do banco de dados:', error);
        return response.status(500).json({ error: 'Erro ao ler do banco de dados', details: error.message });
    }
});

router.get("/filter", async (request, response) => {
    try {
        await client.connect();
        const { nome } = request.body;
        const result = await client.query('SELECT * FROM contatos WHERE nome = $1', [nome]);
        await client.end();
        return response.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao filtrar do banco de dados:', error);
        return response.status(500).json({ error: 'Erro ao filtrar do banco de dados' });
    }
});

module.exports = router;