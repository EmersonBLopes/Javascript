let idade, meses, dias;

 idade = parseInt(prompt("Digite sua idade:"));
 meses = parseInt(prompt("Digite os meses:"));
 dias = parseInt(prompt("Digite os dias:"));

 idade = idade * 365;
 meses = meses * 30;
 dias = dias + idade + meses;

 alert("Você viveu : "+dias+" dias");
