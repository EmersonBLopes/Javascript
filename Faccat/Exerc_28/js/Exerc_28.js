let valor1, valor2, valor3;

valor1 = parseInt(prompt("Digite o primeiro valor:"));
valor2 = parseInt(prompt("Digite o segundo valor:"));
valor3 = parseInt(prompt("Digite o terceiro valor:"));

if(valor1 > valor2 & valor1 > valor3){
    alert(valor1);
}
else{
    if(valor2 > valor1 & valor2 > valor3){
        alert(valor2);
    }
    else{
        alert(valor3);
    }
}