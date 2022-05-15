let count = 1, total_graos = 0, anterior = 1 ;

do{
    if(count==1){
        total_graos = anterior;
    }else{
        anterior = anterior * 2;
        total_graos = total_graos + anterior;
    }
    count++
}while(count<=64);
alert("O total de grãos possíveis é:"+total_graos);