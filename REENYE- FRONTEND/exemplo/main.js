const dados = require("./dados.json");

const busca = dados.find((d) => d.id === 2);

const alteracao = {
    telefone: "9999-9999",
    senha: "novasenha123"
};

const chaves = Object.keys(alteracao);


chaves.forEach((chave) => {
    busca[chave] = alteracao[chave];
   
});

const alterar = (req, res) => {
    const id = req.params.id;

    const info = req.body;
    
    const busca = dados.find((dado) => dado.id === id);

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
     });

     res.send("Atualizado com Sucesso").end();
};
