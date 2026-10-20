// Importa o Express para o nosso projeto
const express = require('express');

// Cria a aplicação do Express
const app = express();

// Define a porta em que o servidor vai utilizar
const porta = 3000;

app.use("/Aluno", alunoRota);

// Cria uma rota para a pagina inicial
app.get('/', (req, res) => {
    //
    
    res.send('Olá, mundo! Bem-vindo ao meu servidor Express.');
});         