const express = require("express")

const allTodos = [{ nome: "aaaa", status: false }];
const router = express.Router();


router.post("/create", (request, response) => {
    const { name } = request.body;
    allTodos.push({ name, status: false });
    return response.status(201).json(allTodos);
})

router.get("/read", (request, response) => {
    return response.status(200).json(allTodos);
})

module.exports = router;