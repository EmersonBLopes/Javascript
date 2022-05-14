let morangos, macas, valor = 0;

//macas e morangos = quantidade em kg

morangos = parseFloat(prompt("Digite a quantidade em kg de morangos comprados:"));
macas = parseFloat(prompt("Digite a quantidade em kg de maças comprados:"));

if (morangos <= 5) {
    valor = valor + morangos * 2.50;
}
else{
    valor = valor + morangos * 2.20;
}

if (macas <= 5) {
    valor = valor + macas * 1.80;
}
else{
    valor = valor + macas * 1.50;
}

if(macas + morangos > 8 | valor > 25){
    valor = valor - (valor * 0.10)
}

alert("Valor a pagar: R$"+valor)