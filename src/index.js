const express = require("express");
const routesModel = require("./router/routes");

const app = express();

app.use(express.json());
app.use(routesModel);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Exencutando projeto na porta ${PORT}`);
});