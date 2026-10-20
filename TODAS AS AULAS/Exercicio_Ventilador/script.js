const ventilador = document.getElementById("ventilador");
const botaoLigar = document.getElementById("botao");
const statusVentilador = document.getElementById("status");

const btn1 = document.getElementById("botao1");
const btn2 = document.getElementById("botao2");
const btn3 = document.getElementById("botao3");

let ligado = false;
let velocidade = 1;

function limparVelocidades() {
    ventilador.classList.remove("vel1", "vel2", "vel3"); 
    btn1.classList.remove("ativo");
    btn2.classList.remove("ativo");
    btn3.classList.remove("ativo");
}

function atualizarVentilador() {
    limparVelocidades();

    if (ligado) {
        ventilador.classList.add(`vel${velocidade}`); 
        statusVentilador.textContent = `Status: Ligado (Velocidade ${velocidade})`;
        botaoLigar.textContent = "Desligar";
        botaoLigar.style.backgroundColor = "#ff4d4d";
        botaoLigar.style.color = "white";
       
        document.getElementById(`botao${velocidade}`).classList.add("ativo");
    } else {
        statusVentilador.textContent = "Status: Desligado";
        botaoLigar.textContent = "Ligar";
        botaoLigar.style.backgroundColor = "#2d3436";
        botaoLigar.style.color = "white";
    }
}

botaoLigar.addEventListener("click", () => {
    ligado = !ligado;
    atualizarVentilador();
});

btn1.addEventListener("click", () => {
    velocidade = 1;
    ligado = true;
    atualizarVentilador();
});

btn2.addEventListener("click", () => {
    velocidade = 2;
    ligado = true;
    atualizarVentilador();
});

btn3.addEventListener("click", () => {
    velocidade = 3;
    ligado = true;
    atualizarVentilador();
});
