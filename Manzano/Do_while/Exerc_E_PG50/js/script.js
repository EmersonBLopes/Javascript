let count1 = 1,
    count2 = 2,
    fatorial = 1,
    valor, resultado_final = 0;

do {
    valor = parseInt(prompt(count1+"-Digite um valor:"));
    do {
        switch (valor) {
            case 0:
                fatorial = 1;
                break
            case 1:
                fatorial = 1;
                break
            default:
                fatorial = fatorial * count2;
                break
        }
        count2++;
    } while (count2 <= valor);
    resultado_final = resultado_final + fatorial;
    fatorial = 1;
    count2 = 2;
    count1++
} while (count1 <= 15);
alert("O resultado eh:"+resultado_final);
