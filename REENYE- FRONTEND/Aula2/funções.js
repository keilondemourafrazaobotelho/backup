function imprime(texto) {


}

imprime("Bem-vindo ao JavaScript!");

function soma(n1, n2) {
    let resultado = n1 + n2;
    console.log("Soma = " + resultado);
}

soma(5,10);

function mult(n1, n2) {
    let resultado = n1 * n2;
    return resultado;
}


console.log(mult(5,5));

let resmult = mult(5,10);

imprime(resmult);

function calculaIRPF(salario) {
   let novoSalario = salario - (salario * 0.1);
   return novoSalario;
}
    
function calculaINSS(salario) {
   let novoSalario = salario - (salario * 0.05);
   return novoSalario;
}

function calculaPS(salario, consultas){
    let descConsulta = consultas * 10;
    let descPS = salario * 0.02;
    let novoSalario = salario - descConsulta - descPS;
    return novoSalario;
}

let salario = 2500;

salario = calculaIRPF(salario);
salario = calculaINSS(salario);
salario = calculaPS(salario, 3);

console.log("Salário com Descontos: " + salario);

const teste = (parametro1, parametro2, parametro3) => {
    console.log ("TESTE");
};

teste();
