let A, B, C;

A = parseFloat(prompt("Digite o lado A do triângulo:"));
B = parseFloat(prompt("Digite o lado B do triângulo:"));
C = parseFloat(prompt("Digite o lado C do triângulo:"));

if(A < B+C & B < A+C & C < A+B){
    alert("Forma um triângulo.");
}else{
    alert("Não forma um triângulo.");
}