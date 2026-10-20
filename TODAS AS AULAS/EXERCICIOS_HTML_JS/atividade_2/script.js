function analisarNumeros() {
    let numeros = []
    numeros.push(Number(document.getElementById("n1").value))
    numeros.push(Number(document.getElementById("n2").value))
    numeros.push(Number(document.getElementById("n3").value))
    numeros.push(Number(document.getElementById("n4").value))
    numeros.push(Number(document.getElementById("n5").value))

    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    let pares = 0  
    let impares = 0

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i]
        soma = soma + numero;
        
        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }

        
        if (numero % 2 === 0) {
            pares = pares + 1
        } else {
            impares = impares + 1
        }
    } 


    document.getElementById("resultado").innerHTML = 
        "Maior: " + maior + "<br>" +
        "Menor: " + menor + "<br>" +
        "Soma: " + soma + "<br>" +
        "Pares: " + pares + "<br>" +
        "Ímpares: " + impares;
}
