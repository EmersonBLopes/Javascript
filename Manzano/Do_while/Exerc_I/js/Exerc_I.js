let valor, menor_valor, maior_valor;

valor = parseInt(prompt("Digite um valor:"));
menor_valor = valor;
maior_valor = valor;
do{
    valor = parseInt(prompt("Digite um valor:"));
    if(valor>maior_valor){
        maior_valor = valor;
    }
    else{
        if(valor<menor_valor){
            menor_valor = valor;
        }
    }
}while(valor>=0);
alert("Maior valor: "+maior_valor);
alert("Menor valor: "+menor_valor);