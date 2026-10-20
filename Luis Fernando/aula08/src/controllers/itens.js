
const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "../../dados/itens.json");
const arquivoPedidos = path.join(__dirname, "../../dados/pedidos.json");
const arquivoProdutos = path.join(__dirname, "../../dados/produtos.json");

function lerJSON(caminho) {
    return JSON.parse(fs.readFileSync(caminho, "utf8"));
}

function salvarItens(itens) {
    fs.writeFileSync(arquivo, JSON.stringify(itens, null, 2));
}

function calcularSubtotal(item) {
    return item.preco * item.quantidade;
}

// CREATE
const criar = (req, res) => {
    const itens = lerJSON(arquivo);
    const pedido_id = Number(req.body.pedido_id);
    const produto_id = Number(req.body.produto_id);
    const preco = Number(req.body.preco);
    const quantidade = Number(req.body.quantidade);

    if (
        !Number.isInteger(pedido_id) ||
        !Number.isInteger(produto_id) ||
        req.body.preco === undefined ||
        !Number.isFinite(preco) ||
        preco < 0 ||
        !Number.isInteger(quantidade) ||
        quantidade <= 0
    ) {
        return res.status(400).json({
            mensagem: "Informe pedido_id, produto_id, preço e quantidade válidos"
        });
    }

    const pedidos = lerJSON(arquivoPedidos);
    const produtos = lerJSON(arquivoProdutos);

    if (!pedidos.some((pedido) => pedido.id === pedido_id)) {
        return res.status(400).json({
            mensagem: "Pedido não encontrado"
        });
    }

    if (!produtos.some((produto) => produto.id === produto_id)) {
        return res.status(400).json({
            mensagem: "Produto não encontrado"
        });
    }

    const novoId = itens.length
        ? Math.max(...itens.map((item) => item.id)) + 1
        : 1;

    const novoItem = {
        id: novoId,
        pedido_id,
        produto_id,
        preco,
        quantidade
    };

    itens.push(novoItem);
    salvarItens(itens);

    res.status(201).json({
        ...novoItem,
        subtotal: calcularSubtotal(novoItem)
    });
};

// READ
const listar = (req, res) => {
    const itens = lerJSON(arquivo);

    const itensComSubtotal = itens.map((item) => ({
        ...item,
        subtotal: calcularSubtotal(item)
    }));

    res.json(itensComSubtotal);
};

// UPDATE
const alterar = (req, res) => {
    const itens = lerJSON(arquivo);
    const id = Number(req.params.id);

    const indice = itens.findIndex((item) => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        });
    }

    const item = itens[indice];

    if (req.body.pedido_id !== undefined) {
        const pedido_id = Number(req.body.pedido_id);
        const pedidos = lerJSON(arquivoPedidos);

        if (!pedidos.some((pedido) => pedido.id === pedido_id)) {
            return res.status(400).json({
                mensagem: "Pedido não encontrado"
            });
        }

        item.pedido_id = pedido_id;
    }

    if (req.body.produto_id !== undefined) {
        const produto_id = Number(req.body.produto_id);
        const produtos = lerJSON(arquivoProdutos);

        if (!produtos.some((produto) => produto.id === produto_id)) {
            return res.status(400).json({
                mensagem: "Produto não encontrado"
            });
        }

        item.produto_id = produto_id;
    }

    if (req.body.preco !== undefined) {
        const preco = Number(req.body.preco);

        if (!Number.isFinite(preco) || preco < 0) {
            return res.status(400).json({
                mensagem: "Informe um preço válido"
            });
        }

        item.preco = preco;
    }

    if (req.body.quantidade !== undefined) {
        const quantidade = Number(req.body.quantidade);

        if (!Number.isInteger(quantidade) || quantidade <= 0) {
            return res.status(400).json({
                mensagem: "A quantidade deve ser um inteiro maior que zero"
            });
        }

        item.quantidade = quantidade;
    }

    salvarItens(itens);

    res.json({
        mensagem: "Item atualizado com sucesso",
        item: {
            ...item,
            subtotal: calcularSubtotal(item)
        }
    });
};

// DELETE
const excluir = (req, res) => {
    const itens = lerJSON(arquivo);
    const id = Number(req.params.id);

    const indice = itens.findIndex((item) => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        });
    }

    const removido = itens.splice(indice, 1)[0];
    salvarItens(itens);

    res.json({
        mensagem: "Item excluído com sucesso",
        item: {
            ...removido,
            subtotal: calcularSubtotal(removido)
        }
    });
};

module.exports = {
    criar,
    listar,
    alterar,
    excluir
};
