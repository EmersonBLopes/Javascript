let codigo_usuario, senha;

codigo_usuario = prompt("Digite o código de usuario:");

if(codigo_usuario == "1234"){
    senha = prompt("Digite a senha:");
    if(senha == "9999"){
        alert("Acesso permitido");
    }
    else{
        alert("senha incorreta");
    }
}
else{
    alert("Usuário Inválido");
}