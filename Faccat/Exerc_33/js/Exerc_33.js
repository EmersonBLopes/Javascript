let valor = new Array();

valor[1] = parseInt(prompt("Digite o primeiro valor:"));
valor[2] = parseInt(prompt("Digite o segundo valor:"));

if(valor[1] == valor[2]){
    alert("Numeros iguais");
}else{
    if(valor[1] > valor[2]){
        alert("O primeiro é maior");
    }
    else{
        alert("O segundo é maior");
    }
}