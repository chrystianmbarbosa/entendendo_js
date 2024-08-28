/*Faça um algoritmo que pergunte em que turno o usuário estuda. 
Peça para digitar M- matutino, V- Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
conforme o caso digitado.*/

let infoMenu = 
` Escolha um turno abaixo:
  M= Matutino
  V= Vespertino
  N= Noturno
`;
let opcao = prompt(infoMenu);
opcao = opcao.toUpperCase();

switch (opcao) {
    case "M":
        alert("Olá, Bom dia!");
        break;
    case "V":
        alert("Olá, Boa Tarde!");
        break;
    case "N":
        alert("Olá, Boa Noite!");
        break;
    default:
        alert("Opção Inválida!");
        break;
}
