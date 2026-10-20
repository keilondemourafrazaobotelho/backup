const express = require("express");

const app = express();

const alunoRota = require("./alunoRota");
const professorRota = require("./professorRota");

app.use(express.json());

app.use("/", alunoRota);
app.use("/", professorRota);

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});