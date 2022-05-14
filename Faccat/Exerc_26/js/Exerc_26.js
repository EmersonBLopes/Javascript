let qtd_estoque, qtd_maxima, qtd_minima, qtd_media;

qtd_estoque = parseFloat(prompt("Digite a quantidade em estoque:"));
qtd_minima = parseFloat(prompt("Digite a miníma quantidade em estoque:"));
qtd_maxima = parseFloat(prompt("Digite a quantidade máxima em estoque:"));

qtd_media = (qtd_maxima + qtd_minima) /2;

if(qtd_estoque >= qtd_media){
    alert("Não efetuar compra");
}
else{
    alert("Efetuar compra");
}
