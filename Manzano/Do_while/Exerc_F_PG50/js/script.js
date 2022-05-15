let valor=0,somatorio=0,media=0,count=0;


console.log(somatorio)
    do{
        valor = parseInt(prompt("Digite um valor:"));
        if(valor >= 0){
            somatorio = somatorio + valor;
            count++
        }
    }while(valor>=0);

alert("Total de valores lidos:"+count);
alert("O total do somatório é: "+somatorio);
media = somatorio / count;
if(count==0){
    alert("Erro, divisão por zero");
}else{
    alert("A média é:"+media);
}


