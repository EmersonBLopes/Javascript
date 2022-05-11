let custo_fabrica,distribuidor,impostos,valor_final;

custo_fabrica = parseFloat(prompt("Digite o custo de fabricação:"));
distribuidor = parseFloat(prompt("Digite a porcentagem do distribuidor:"));
impostos = parseFloat(prompt("Digite a porcentagem de impostos:"));

valor_final = custo_fabrica + distribuidor/100*custo_fabrica + impostos/100*custo_fabrica;

alert("O valor final do carro é: "+valor_final);
