const professores = [
    { id: 1, nome: "Luis" },
    { id: 2, nome: "Reenye" },
    { id: 3, nome: "Jansen" },
    { id: 4, nome: "Wellington" },
    { id: 5, nome: "Robson" }
];

function listarProfessores(req, res) {
    res.json(professores);
}

module.exports = {
    listarProfessores
};