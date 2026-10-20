const express = require("express");
const pacientes = require("../dados.json");

const mostrarPacientes = (req, res) => {
    calcularIMC();
    res.send(pacientes)
}

const calcularIMC = (req, res) => {
    pacientes.forEach( p => {
        p.imc = p.peso/(p.altura * p.altura) 
    })
}

const novoPaciente = (req, res) => {
    if(req.body) {
        res.send("Paciente Cadastrado com Sucesso!!");
        pacientes.push(req.body);
    } else {
        res.send("Erro ao cadastrar o paciente");
    }
}

const app = express()
app.use(express.urlencoded({extended : true}))
const porta = 3000

app.get("/", mostrarPacientes)
app.post("/", novoPaciente)
app.post("/imc", calcularIMC)

app.listen(porta, () => { 
    console.log(`Servidor: http://localhost:${porta}`) 
    console.log(`Cliente: http://127.0.0.1:5500/cliente`)
})