let nome_produto, quantidade = 0,
    preco = 0,
    total = 0;

nome_produto = prompt("Digite o nome do produto:");
quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
preco = parseFloat(prompt("Digite o preço unitário do produto:"));

total = quantidade * preco;

if (quantidade <= 5) {
    total = total - total * 0.02;
} 
else {
    if (quantidade > 5 & quantidade <= 10) {
        total = total - total * 0.03;
    } 
    else {
        total = total - total * 0.05;
    }
}

alert("O total a pagar é:"+total);