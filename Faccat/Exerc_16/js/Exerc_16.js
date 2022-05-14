maca = 0;
valor_total = 0;

macas = prompt("Digite o número de maçãs compradas:");

if(macas < 12){
    parseFloat(valor_total = macas * 1.30);
}
else{
    parseFloat(valor_total = macas * 1.00);
}
valor_total = valor_total.toFixed(2);
alert("O valor da compra é: "+valor_total);