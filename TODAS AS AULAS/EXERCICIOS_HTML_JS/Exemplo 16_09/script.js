function CalcularResultado(){
  
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)

    let media = (nota1 + nota2 + nota3) / 3

    let situacao;

    if(media >= 7){
        situacao = "Aprovado"
    } else if (media >= 5){
        situacao = "Recuperação"
    } else {
        situacao = "Reprovado"
    }     

    document.getElementById("resultado").textContent = 
        " |  Aluno: " + nome + 
        " |  Idade: " + idade + 
        " |  Media: " + media.toFixed(2) + 
        " |  Situação: " + situacao 

    }
