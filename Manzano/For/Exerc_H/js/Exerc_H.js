let base,expoente,count,resultado=1;

base = parseInt(prompt("Digite o valor da base:"));
expoente = parseInt(prompt("Digite o valor do expoente:"));

for(count = 1; count <= expoente; count++){
        resultado =  resultado * base;
}

alert(base+" ^ "+expoente+" = "+resultado);