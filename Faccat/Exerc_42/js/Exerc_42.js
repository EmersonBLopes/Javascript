let codigo, ano_nascimento, ano_ingresso,aposentadoria,tempo_servico;

codigo = prompt("Digite o código do funcinário:");
ano_nascimento = parseInt(prompt("Digite o ano de nascimento:"));
ano_ingresso =  parseInt(prompt("Digite o ano que ingressou na empresa:"));

ano_nascimento = 2022 - ano_nascimento;
tempo_servico = 2022 - ano_ingresso

if(ano_nascimento >= 65){
    aposentadoria = "Requerer aposentadoria";
}
else{
    if(ano_ingresso >= 30){
        aposentadoria = "Requerer aposentadoria";
    }
    else{
        if(ano_nascimento >=60 & tempo_servico >= 25){
            aposentadoria = "Requerer aposentadoria";
        }
        else{
            aposentadoria = "Não requerer aposentadoria";
        }
    }

}
alert("Idade do colaborador: "+ano_nascimento);
alert("Ingressou na empresa em: "+ano_ingresso);
alert(aposentadoria);

