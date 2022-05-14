let valor1, valor2, valor3, X = 0;

valor1 = parseInt(prompt("Digite o primeiro valor:"));
valor2 = parseInt(prompt("Digite o segundo valor:"));
valor3 = parseInt(prompt("Digite o terceiro valor:"));

if (valor1 > valor2 & valor1 > valor3) {
    X = valor1;
    valor1 = valor3;
    valor3 = X;
} else {
    if (valor2 > valor1 & valor2 > valor3) {
        X = valor2;
        valor2 = valor3;
        valor3 = X;
    }
}
if (valor1 > valor2) {
    X = valor1;
    valor1 = valor2;
    valor2 = X
} else {
    if (valor1 > valor3) {
        X = valor1;
        valor1 = valor3;
        valor3 = X;
    }
}



alert(valor1);
alert(valor2);
alert(valor3);