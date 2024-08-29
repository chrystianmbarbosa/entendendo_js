/*Faça um algoritmo que faz uma conversão de temperaturas onde . 
Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9*/

let infoMenu =
    ` Escolha uma uma conversão a fazer:
    1- De Celsius para Fahrenheit
    2- De Fahrenheit para Celsius
`;
let celsius = 0, fahrenheit = 0;
let opcao = prompt(infoMenu);

switch (opcao) {
    case "1":
        celsius = parseFloat(
            prompt("Informe quantos graus celsius a converter!"));
        fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}ºC representa ${fahrenheit.toFixed(2)}ºF!`);
        break;
    case "2":
        fahrenheit = parseFloat(
            prompt("Informe quantos graus fahrenheit a converter!"));
        celsius = (fahrenheit - 32) * 5 / 9;
        alert(`${fahrenheit}ºF representa ${celsius.toFixed(2)}ºC!`);
        break;
    default:
        alert("Opção Inválida!");
        break;
}

