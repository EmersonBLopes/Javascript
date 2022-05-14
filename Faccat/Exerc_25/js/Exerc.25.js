let numero_conta, saldo, debito, credito, saldo_atual;

numero_conta = prompt("Digite o número da conta:");
saldo = parseFloat(prompt("Digite o saldo em conta:"));
debito = parseFloat(prompt("Digite o debito em conta:"));
credito = parseFloat(prompt("Digite o crédito em conta:"));

saldo_atual = saldo - debito + credito;

if(saldo_atual >= 0){
    alert("Saldo positivo");
}
else{
    alert("Saldo negativo");
}