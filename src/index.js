const express = require("express");
const routesModel = require("./router/routes");

const app = express();

app.use(express.json());
app.use(routesModel);

const PORT = 3000;

app.get("/cont", (req, res) => {
    return res.json("up");
})

app.listen(PORT, () => {
    console.log(`Exencutando projeto na porta ${PORT}`);
});