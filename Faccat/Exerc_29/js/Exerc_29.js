let valor1, valor2, valor3,soma;

valor1 = parseInt(prompt("Digite o primeiro valor:"));
valor2 = parseInt(prompt("Digite o segundo valor:"));
valor3 = parseInt(prompt("Digite o terceiro valor:"));

if(valor1 > valor2 & valor1 > valor3){
    if(valor2>valor3){
        soma = valor1 + valor2;
    }
    else{
        soma = valor1 + valor3;
    }
}
else{
    soma = valor2 + valor3;
}
alert("A soma dos 2 maiores é: "+soma);