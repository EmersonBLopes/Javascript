let nota1, nota2, media;

nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));

media = (nota1 + nota2)/2;

media = media.toFixed(1);

if(media >= 6){
    alert("Aluno aprovado, média: " +media);
}
else{
    alert("Aluno reprovado, média: " +media);
}
