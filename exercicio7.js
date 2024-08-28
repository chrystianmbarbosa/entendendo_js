/*Faça um algoritmo em que valida se 
pode entrar na montanha russa ou não, 
os critérios são:
Ter 1,70 de altura.
Ter mínimo de 1,60 de altura e ser maior de 18 anos.*/

let altura = parseFloat(
    prompt("Informe sua Altura")
);

if (altura >= 1.70) {
    alert("Você está liberado!");
} else if (altura < 1.60) {
    alert("Você está impedido!");
} else {
    let idade = parseInt(
        prompt("Informe sua Idade")
    );
    if (idade >= 18) {
        alert("Você está liberado!");
    } else {
        alert("Você está impedido!");
    }
}





