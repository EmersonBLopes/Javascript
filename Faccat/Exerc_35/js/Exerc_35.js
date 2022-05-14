let tipo_combustivel, litros_vendidos, total = 0;

tipo_combustivel = prompt("Digite o tipo de combustivel:");
litros_vendidos = parseFloat(prompt("Digite a quantidade de litros vendidos:"));


if (tipo_combustivel == "A" & litros_vendidos <= 20) {
    total = litros_vendidos * (2.90 - 2.90 * 0.03);
} else {
    if (tipo_combustivel == "A" & litros_vendidos > 20) {
        total = litros_vendidos * (2.90 - 2.90 * 0.05);
    }
}

if (tipo_combustivel == "G" & litros_vendidos <= 20){
    total = litros_vendidos * (3.30 - 3.30 * 0.04);
} else {
    if (tipo_combustivel == "G" & litros_vendidos > 20) {
        total = litros_vendidos * (3.30 - 3.30 * 0.06);
    }
}
total = total.toFixed(2);
alert("O total a ser pago é:" + total);