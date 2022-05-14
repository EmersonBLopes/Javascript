let hora_inicio, hora_fim, quantidade_horas;

hora_inicio = parseInt(prompt("Digite a hora do início do jogo:"));
hora_fim = parseInt(prompt("Digite a hora do fim do jogo:"));

if(hora_inicio >= hora_fim){
    quantidade_horas = hora_fim + 24 - hora_inicio;
}
else{
    quantidade_horas = hora_fim - hora_inicio;
}
alert("A duração do jogo foi de "+quantidade_horas+" horas");
