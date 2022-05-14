let ano_atual, ano_nascimento;

ano_nascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
ano_atual = parseInt(prompt("Digite o ano atual:"));

if(ano_atual - ano_nascimento >= 16){
    alert("Você pode votar.");
}
else{
    alert("Você não pode votar.");
}