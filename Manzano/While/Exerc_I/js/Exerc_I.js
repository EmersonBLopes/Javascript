let valor = new Array(), media=0,somatorio=0,count=0;

while(count<=9){
    valor[count] = parseInt(prompt("Digite o valor "+count+":"));
    somatorio = somatorio + valor[count];
    count++
}
media = somatorio / 10;
alert("O total do somatório é: "+somatorio);
alert("A média aritmética é: "+media);