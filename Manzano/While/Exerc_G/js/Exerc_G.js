anterior=1, atual=1, proximo=0,count=2;

alert(anterior);
while(count<=15){
    alert(atual);
    proximo = anterior + atual;
    anterior = atual ;
    atual = proximo;
    count++
}
