let base=0,expoente=0,resultado=1,count=1;

base = prompt("Digite o valor da base:");
expoente = prompt("Digite o valor do expoente:");

while(count <= expoente){
    resultado = resultado * base;
    count++
}
alert(base+" ^ "+expoente+" = "+resultado);