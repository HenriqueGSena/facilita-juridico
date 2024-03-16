const express = require("express");
const app = express();
const db = require('./database');
var cors = require('cors'); 
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/listAllContact', db.getAllContatos);
app.post('/createContact', db.createContatos);

app.listen(PORT, () => {
    console.log(`Exencutando projeto na porta ${PORT}`);
});