// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("formPedido");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById("nome").value;
        const precoLanche = Number(document.getElementById("lanche").value);
        const quantidade = Number(document.getElementById("quantidade").value);
        
        const campoBebida = document.getElementById("bebida").value;
        const precoBebida = campoBebida ? Number(campoBebida) : 0;

        // Realiza os cálculos
        const total = (precoLanche * quantidade) + precoBebida;
        let desconto = 0;

        if (total >= 50) {
            desconto = total * 0.10;
        }

        const totalA_Pagar = total - desconto;
        const resultado = document.getElementById("resultado");
        
        // Exibe o resultado na tela
        resultado.innerHTML = `
            <h2>Pedido realizado com sucesso!</h2>
            <p><strong>Nome do cliente:</strong> ${nome}</p>
            <p><strong>Quantidade de lanches:</strong> ${quantidade}</p>
            <p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>
            <h3>Total a pagar: R$ ${totalA_Pagar.toFixed(2)}</h3>
        `;
    });

});
