let dividendo, divisor=new Array(), quocient=0;

dividendo = parseInt(prompt("Digite o valor à dividir:"));
divisor[1] = parseInt(prompt("Digite o divisor:"));
divisor[2] = 0
do{
divisor[2] = divisor[2] + divisor[1];
if(divisor[2]<dividendo){
    quocient++
}
}while(divisor[2]<dividendo);
alert(dividendo+" / "+divisor[1]+" = "+quocient);
