let homem = new Array(),
mulher = new Array(),
soma,produto;

homem[1] = parseInt(prompt("Digite a idade do primeiro homem:"));
homem[2] = parseInt(prompt("Digite a idade do segundo homem:"));
mulher[1] = parseInt(prompt("Digite a idade da primeira mulher:"));
mulher[2] = parseInt(prompt("Digite a idade da segunda mulher:"));

if(homem[1] > homem[2] & mulher[1] < mulher[2]){
    soma = homem[1] + mulher[1];
    produto = homem[2] * mulher[2];
}
else{
    if(homem[1] > homem[2] & mulher[2] < mulher[1]){
        soma = homem[1] + mulher[2];
        produto = homem[2] * mulher[1];
    }
    else{
        if(homem[2] > homem[1] & mulher[1] < mulher[2]){
            soma = homem[2] + mulher[1];
            produto = homem[1] * mulher[2];
        }
        else{
            if(homem[2] > homem[1] & mulher[2] < mulher[1]){
                soma = homem[2] + mulher[2];
                produto = homem[1] * mulher[1];
            }
        }
    }
}

alert("A soma é: "+soma);
alert("O produto é: "+produto);