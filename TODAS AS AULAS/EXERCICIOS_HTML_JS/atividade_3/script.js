function calcularCompra() {
    
    const preco = parseFloat(document.getElementById("preco").value) || 0;
    const quantidade = parseInt(document.getElementById("quantidade").value) || 0;
    const formaPagamento = document.getElementById("pagamento").value;

 if (preco <= 0 || quantidade <= 0) return alert("Insira valores válidos.");

    const subtotal = preco * quantidade; 
    const descontos = { dinheiro: 0.10, pix: 0.05, cartao: 0.00 };
    
    const desconto = subtotal * descontos[formaPagamento];
    const total = subtotal - desconto;

    document.getElementById("resSubtotal").textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById("resDesconto").textContent = `R$ ${desconto.toFixed(2)}`;
    document.getElementById("resTotal").textContent = `R$ ${total.toFixed(2)}`;
    
    document.getElementById("resultado").style.display = "block"; 
}
