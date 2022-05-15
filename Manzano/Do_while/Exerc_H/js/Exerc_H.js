let nome_comodo, largura,comprimento,area=0,area_total=0,resposta;

do{
    nome_comodo = prompt("Digite o nome do cômodo:");
    largura = parseFloat(prompt("Digite a largura do cômodo:"));
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"));
    area = largura * comprimento;
    area_total = area_total + area;
    alert("Área:"+area);
    resposta = prompt("Deseja continuar?");
}while(resposta !== "nao")

alert("A área total da residência é:"+area_total);



