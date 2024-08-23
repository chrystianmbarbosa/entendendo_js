/*Solicite ao usuário um número de 1 a 7 e 
exiba em texto o dia da semana 
representado conforme abaixo. 
Domingo
Segunda-feira
Terça-feira
Quarta-feira 
Quinta-feira
Sexta-feira
Sábado*/

let dia_escolhido = 
parseInt(prompt("Informe o numero do dia da Semana a exibir:"));

if (dia_escolhido === 1) {
    alert("Escolheu Domingo");
} else if (dia_escolhido === 2) {
    alert("Escolheu Segunda");
} else if (dia_escolhido === 3) {
    alert("Escolheu Terça");
} else if (dia_escolhido === 4) {
    alert("Escolheu Quarta");
} else if (dia_escolhido === 5) {
    alert("Escolheu Quinta");
} else if (dia_escolhido === 6) {
    alert("Escolheu Sexta");
} else if (dia_escolhido === 7) {
    alert("Escolheu Sábado");
} else {
    alert("Dia Inválido");
}
