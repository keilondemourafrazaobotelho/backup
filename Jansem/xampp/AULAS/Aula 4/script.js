function somar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function subtrair() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function multiplicar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(2);
}

function dividir() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    if (numero2 === 0) {
        document.getElementById("resultado").textContent = "Não é possível dividir por zero";
        return;
    }

    const resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
       "Resultado: " + resultado.toFixed(2);
}
