const express = require("express");
const times = require("../dados.json");

const mostrarTimes= (req, res) => {
    calcularPontucao();
    res.send(times)
}

const novoTime = (req, res) => {
    if(req.body){
        res.send("Time cadastrado com sucesso!")
        times.push(req.body)
    } else {
        res.send("Erro ao cadastrar time")
    }
}

const calcularPontucao = (req, res) => {
    times.forEach(t => {
        t.pontuacao = (t.vitorias * 3) + t.empates
    })
}

const app = express();
app.use(express.urlencoded({ extended: true}))
const porta = 3000;

app.get("/", mostrarTimes);
app.post("/", novoTime)
app.post("/pontuacao", calcularPontucao)

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`)
    console.log(`Cliente: http://127.0.0.1:5500/cliente/index.html`)
});