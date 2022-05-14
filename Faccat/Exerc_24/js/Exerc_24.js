let salario_fixo, valor_vendas;

salario_fixo = parseFloat(prompt("Digite o valor do salário:"));
valor_vendas = parseFloat(prompt("Digite o valor total das vendas do vendedor:"));

salario_fixo = salario_fixo + valor_vendas * 0.03;
if (valor_vendas > 1500) {
    salario_fixo = salario_fixo + (valor_vendas - 1500) * 0.05;
}
alert("O salario total é:" + salario_fixo);