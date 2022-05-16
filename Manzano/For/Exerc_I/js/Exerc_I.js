let anterior=1,atual=1,proximo=anterior+atual,count;

alert(anterior);
for(count=2;count<=15;count++){
    alert(atual);
    anterior = atual;
    atual = proximo;
    proximo=anterior + atual;
}