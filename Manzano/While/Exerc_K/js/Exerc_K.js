let nome_comodo, largura,comprimento,area=0,area_total=0,resposta;

while(resposta !== "nao"){
    nome_comodo = prompt("Digite o nome do comodô:");
    largura = parseFloat(prompt("Digite a largura do comodô:"));
    comprimento = parseFloat(prompt("Digite o comprimento do comodô:"));
    area = largura * comprimento;
    area_total = area_total + area;
    alert("Comodô:"+nome_comodo);
    alert("Largura:"+largura);
    alert("Comprimento:"+comprimento);
    alert("Área:"+area);
    resposta = prompt("Deseja continuar?");
}

alert("A área total da residência é:"+area_total);



