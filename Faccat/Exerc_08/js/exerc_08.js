let eleitores,brancos,nulos,validos;

validos = parseInt(prompt("Digite o total de votos válidos:"));
brancos = parseInt(prompt("Digite o total de votos brancos:"));
nulos = parseInt(prompt("Digite o total de votos nulos:"));

eleitores = validos + brancos + nulos;

validos = (validos * 100) / eleitores;
brancos = (brancos * 100) / eleitores;
nulos = (nulos * 100) / eleitores;

alert("Numero de eleitores: "+eleitores)
alert("Válidos:"+validos+"%");
alert("Brancos:"+brancos+"%");
alert("Nulos:"+nulos+"%");
