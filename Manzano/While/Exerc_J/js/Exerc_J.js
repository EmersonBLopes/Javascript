let count=51, soma=50, media=0;

while(count<=70){
    if(count % 2 == 0){
        alert(soma+" + "+count+" = "+(soma+count));
        soma = soma + count;
        media = media + 1;
    }
    count++
}
media = soma / media;
alert("A media aritmética é:"+media);