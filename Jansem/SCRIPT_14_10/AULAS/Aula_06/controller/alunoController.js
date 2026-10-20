const alunos = [
    { id: 1, nome: "Maria" },
    { id: 2, nome: "Carlos" }

];

function listarAlunos(req, res) {
    res.json(alunos);
}

module.exports = {
    listarAlunos
};