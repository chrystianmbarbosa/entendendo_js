/*Desenvolva um gerador de tabuada, capaz de gerar 
através de qualquer número inteiro, solicitando 
ao usuário o número e mostrando na tela conforme 
o exemplo abaixo:
Tabuada de 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
Ao final, pergunte ao usuário se ele deseja 
realizar uma outra geração ou sair.*/
let continuar = "S";
do {
    let num = parseInt(prompt("Informe sua tabuada!"));
    let stringTab = "";
    for (let i = 1; i <= 10; i++) {
        stringTab += `${num} X ${i} = ${num * i} \n`;
    }
    alert(stringTab);
    continuar = prompt("Você deseja gerar outra Tabuada? S=Sim e N=Não")

} while (continuar == "S");


