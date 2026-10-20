const express = require("express");
const router = express.Router();

const alunoController = require("./controller/alunoController");

router.get("/alunos", alunoController.listarAlunos);

module.exports = router;