let hora_mes, salario_hora, salario, hora_extra;

salario_hora = parseFloat(prompt("Digite o salario/h do funcionário:"));
hora_mes = parseFloat(prompt("Digite a quantidade de horas trabalhadas em um mês:"));

salario = parseFloat(salario_hora * hora_mes);

if(hora_mes > 160){
    salario = salario + (hora_mes - 160) * (salario_hora + salario_hora * 0.5);
}

alert("O salário do funcionário é : "+salario.toFixed(2)); 