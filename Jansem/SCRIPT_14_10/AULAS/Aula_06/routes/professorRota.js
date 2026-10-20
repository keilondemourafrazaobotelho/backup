const express = require("express");
const router = express.Router();

const professorController = require("../controller/professorController");

router.get("/professores", professorController.listarProfessores);

module.exports = router;