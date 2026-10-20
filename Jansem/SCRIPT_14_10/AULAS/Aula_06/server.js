const express = require("express");

const app = express();

const alunoRota = require("./routes/alunoRota");
const professorRota = require("./routes/professorRota");

app.use(express.json());

app.use("/", alunoRota);
app.use("/", professorRota);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});