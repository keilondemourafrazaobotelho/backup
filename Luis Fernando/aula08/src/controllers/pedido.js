
const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "../../dados/pedidos.json");
const arquivoClientes = path.join(__dirname, "../../dados/clientes.json");

function lerPedidos() {
    return JSON.parse(fs.readFileSync(arquivo, "utf8"));
}

function salvarPedidos(pedidos) {
    fs.writeFileSync(arquivo, JSON.stringify(pedidos, null, 2));
}

function clienteExiste(clienteId) {
    const clientes = JSON.parse(
        fs.readFileSync(arquivoClientes, "utf8")
    );

    return clientes.some((cliente) => cliente.id === clienteId);
}

// CREATE
const criar = (req, res) => {
    const pedidos = lerPedidos();
    const cliente_id = Number(req.body.cliente_id);
    const { data } = req.body;

    if (!Number.isInteger(cliente_id) || !data) {
        return res.status(400).json({
            mensagem: "Informe cliente_id e data"
        });
    }

    if (!clienteExiste(cliente_id)) {
        return res.status(400).json({
            mensagem: "Cliente não encontrado"
        });
    }

    const novoId = pedidos.length
        ? Math.max(...pedidos.map((pedido) => pedido.id)) + 1
        : 1;

    const novoPedido = {
        id: novoId,
        cliente_id,
        data
    };

    pedidos.push(novoPedido);
    salvarPedidos(pedidos);

    res.status(201).json(novoPedido);
};

// READ
const listar = (req, res) => {
    res.json(lerPedidos());
};

// UPDATE
const alterar = (req, res) => {
    const pedidos = lerPedidos();
    const id = Number(req.params.id);

    const indice = pedidos.findIndex((pedido) => pedido.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        });
    }

    const { cliente_id, data } = req.body;

    if (cliente_id !== undefined) {
        const novoClienteId = Number(cliente_id);

        if (!Number.isInteger(novoClienteId) ||
            !clienteExiste(novoClienteId)) {
            return res.status(400).json({
                mensagem: "Cliente inválido ou não encontrado"
            });
        }

        pedidos[indice].cliente_id = novoClienteId;
    }

    if (data !== undefined) {
        if (typeof data !== "string" || !data.trim()) {
            return res.status(400).json({
                mensagem: "A data deve ser um texto válido"
            });
        }

        pedidos[indice].data = data;
    }

    salvarPedidos(pedidos);

    res.json({
        mensagem: "Pedido atualizado com sucesso",
        pedido: pedidos[indice]
    });
};

// DELETE
const excluir = (req, res) => {
    const pedidos = lerPedidos();
    const id = Number(req.params.id);

    const indice = pedidos.findIndex((pedido) => pedido.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        });
    }

    const itens = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, "../../dados/itens.json"),
            "utf8"
        )
    );

    if (itens.some((item) => item.pedido_id === id)) {
        return res.status(409).json({
            mensagem: "Exclua os itens deste pedido antes de excluí-lo"
        });
    }

    const removido = pedidos.splice(indice, 1)[0];
    salvarPedidos(pedidos);

    res.json({
        mensagem: "Pedido excluído com sucesso",
        pedido: removido
    });
};

module.exports = {
    criar,
    listar,
    alterar,
    excluir
};
