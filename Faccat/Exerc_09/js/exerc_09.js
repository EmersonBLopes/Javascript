let salario,reajuste,novo_salario;

salario = parseFloat(prompt("Digite o salário do funcionário:"));
reajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

novo_salario = salario + (salario*(reajuste/100));

alert("O novo salário do funcionario é: "+novo_salario);