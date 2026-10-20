
const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "../../dados/produtos.json");

function lerProdutos() {
    return JSON.parse(fs.readFileSync(arquivo, "utf8"));
}

function salvarProdutos(produtos) {
    fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));
}

// CREATE
const criar = (req, res) => {
    const produtos = lerProdutos();
    const { nome } = req.body;
    const preco = Number(req.body.preco);

    if (typeof nome !== "string" || !nome.trim() ||
        req.body.preco === undefined ||
        !Number.isFinite(preco) || preco < 0) {
        return res.status(400).json({
            mensagem: "Informe um nome e um preço válido"
        });
    }

    const novoId = produtos.length
        ? Math.max(...produtos.map((produto) => produto.id)) + 1
        : 1;

    const novoProduto = {
        id: novoId,
        nome: nome.trim(),
        preco
    };

    produtos.push(novoProduto);
    salvarProdutos(produtos);

    res.status(201).json(novoProduto);
};

// READ
const listar = (req, res) => {
    res.json(lerProdutos());
};

// UPDATE
const alterar = (req, res) => {
    const produtos = lerProdutos();
    const id = Number(req.params.id);

    const indice = produtos.findIndex((produto) => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const { nome } = req.body;

    if (nome !== undefined) {
        if (typeof nome !== "string" || !nome.trim()) {
            return res.status(400).json({
                mensagem: "Informe um nome válido"
            });
        }

        produtos[indice].nome = nome.trim();
    }

    if (req.body.preco !== undefined) {
        const preco = Number(req.body.preco);

        if (!Number.isFinite(preco) || preco < 0) {
            return res.status(400).json({
                mensagem: "Informe um preço válido"
            });
        }

        produtos[indice].preco = preco;
    }

    salvarProdutos(produtos);

    res.json({
        mensagem: "Produto atualizado com sucesso",
        produto: produtos[indice]
    });
};

// DELETE
const excluir = (req, res) => {
    const produtos = lerProdutos();
    const id = Number(req.params.id);

    const indice = produtos.findIndex((produto) => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const itens = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, "../../dados/itens.json"),
            "utf8"
        )
    );

    if (itens.some((item) => item.produto_id === id)) {
        return res.status(409).json({
            mensagem: "Este produto está vinculado a itens de pedidos"
        });
    }

    const removido = produtos.splice(indice, 1)[0];
    salvarProdutos(produtos);

    res.json({
        mensagem: "Produto excluído com sucesso",
        produto: removido
    });
};

module.exports = {
    criar,
    listar,
    alterar,
    excluir
};
