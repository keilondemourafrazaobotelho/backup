function fazerLogin() { 
    let usuario = document.getElementById("usuario").value; 
    let senha = document.getElementById("senha").value; 

    if (usuario === "admin" && senha === "1234") { 
        document.getElementById("login").textContent = "Login feito com sucesso"; 
    } else { 
        document.getElementById("login").textContent = "usuário ou senha inválidos"; 
    } 


document.getElementById("login").innerText


}





