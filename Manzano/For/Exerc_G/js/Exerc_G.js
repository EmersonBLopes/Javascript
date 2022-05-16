const base = 3;
let count1,count2;
    resultado=1;

for (count1 = 0; count1 <= 15; count1++) {
    switch (count1) {

        case  0:
            alert(base + " ^ " + count1 + " = 1");
            break;

        case 1:
            alert(base + " ^ " + count1 + " = "+base);
            break;

        default:
            for(count2=1;count2<=count1;count2++){
                resultado = resultado * base;
            }
            alert(base + " ^ " + count1 + " = "+resultado);
            resultado = 1;
            break;
    }
}