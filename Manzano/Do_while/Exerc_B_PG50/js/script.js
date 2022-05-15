let somatorio = 0, I = 1;

do{
    if(I % 2 == 0){
        somatorio = somatorio + I;
    }
    console.log(somatorio)
    I++
}while(I<=500)

alert(somatorio);