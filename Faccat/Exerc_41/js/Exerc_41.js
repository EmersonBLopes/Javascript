let N1 = 0,
    N2 = 0,
    N3 = 0,
    media_exercicios = 0,
    media_aproveitamento = 0;

N1 = parseFloat(prompt("Digite a primeira nota:"));
N2 = parseFloat(prompt("Digite a segunda nota:"));
N3 = parseFloat(prompt("Digite a terceira nota:"));
media_exercicios = parseFloat(prompt("Digite a media dos exercícios:"));

media_aproveitamento = (N1 + N2 * 2 + N3 * 3 + media_exercicios) / 7;

if (media_aproveitamento >= 9.0) {
    alert("Conceito A");
} else {
    if (media_aproveitamento >= 7.5 & media_aproveitamento < 9.0) {
        alert("Conceito B");
    } else {
        if (media_aproveitamento >= 6.0 & media_aproveitamento < 7.5) {
            alert("Conceito C");
        } else {
            alert("Conceito D");
        }
    }
}