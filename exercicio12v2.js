/*Faça um algoritmo que leia um número inteiro menor que 1000 
e imprima a quantidade de centenas, dezenas e unidades do mesmo. 
Observando os termos no plural a colocação do "e", da vírgula entre outros.
Exemplo: 326:  3 centenas, 2 dezenas e 6 unidades.*/

let numero = parseInt(prompt("Informe um número entre 1 e 999"));

if (numero < 1 || numero >= 1000 || isNaN(numero)) {
    alert("Operação Inválida!");

} else {

    let centenas = parseInt(numero / 100);
    let dezenas = parseInt((numero % 100) / 10);
    let unidades = numero % 10;

    let txtResultado = "";

    if ((centenas > 1) && (dezenas > 1) && (unidades > 1)) {
        txtResultado = `${centenas} centenas, ${dezenas} dezenas e ${unidades} unidades.`
    }
    else if ((centenas > 1) && (dezenas > 1) && (unidades == 1)) {
        txtResultado = `${centenas} centenas, ${dezenas} dezenas e 1 unidade.`
    }
    else if ((centenas > 1) && (dezenas == 1) && (unidades > 1)) {
        txtResultado = `${centenas} centenas, 1 dezena e ${unidades} unidades.`
    }
    else if ((centenas > 1) && (dezenas == 1) && (unidades == 1)) {
        txtResultado = `${centenas} centenas, 1 dezena e 1 unidade.`
    }
    else if ((centenas == 1) && (dezenas > 1) && (unidades > 1)) {
        txtResultado = `1 centena, ${dezenas} dezenas e ${unidades} unidades.`
    }
    else if ((centenas == 1) && (dezenas > 1) && (unidades == 1)) {
        txtResultado = `1 centena, ${dezenas} dezenas e 1 unidade.`
    }
    else if ((centenas == 1) && (dezenas == 1) && (unidades > 1)) {
        txtResultado = `1 centena, 1 dezena e ${unidades} unidades.`
    }
    else if ((centenas == 1) && (dezenas == 1) && (unidades == 1)) {
        txtResultado = `1 centena, 1 dezena e 1 unidade.`
    }
    else if ((centenas == 0) && (dezenas > 1) && (unidades > 1)) {
        txtResultado = `${dezenas} dezenas e ${unidades} unidades.`
    }
    else if ((centenas == 0) && (dezenas > 1) && (unidades == 1)) {
        txtResultado = `${dezenas} dezenas e 1 unidade.`
    }
    else if ((centenas == 0) && (dezenas == 1) && (unidades > 1)) {
        txtResultado = `1 dezena e ${unidades} unidades.`
    }
    else if ((centenas == 0) && (dezenas == 1) && (unidades == 1)) {
        txtResultado = `1 dezena e 1 unidade.`
    }
    else if ((centenas > 1) && (dezenas == 0) && (unidades > 1)) {
        txtResultado = `${centenas} centenas e ${unidades} unidades.`
    }
    else if ((centenas > 1) && (dezenas == 0) && (unidades == 1)) {
        txtResultado = `${centenas} centenas e 1 unidade.`
    }
    else if ((centenas == 1) && (dezenas == 0) && (unidades > 1)) {
        txtResultado = `1 centena e ${unidades} unidades.`
    }
    else if ((centenas == 1) && (dezenas == 0) && (unidades == 1)) {
        txtResultado = `1 centena e 1 unidade.`
    }
    else if ((centenas > 1) && (dezenas > 1) && (unidades == 0)) {
        txtResultado = `${centenas} centenas e ${dezenas} dezenas.`
    }
    else if ((centenas > 1) && (dezenas == 1) && (unidades == 0)) {
        txtResultado = `${centenas} centenas e 1 dezena.`
    }
    else if ((centenas == 1) && (dezenas > 1) && (unidades == 0)) {
        txtResultado = `1 centena e ${dezenas} dezenas.`
    }
    else if ((centenas == 1) && (dezenas == 1) && (unidades == 0)) {
        txtResultado = `1 centena e 1 dezena.`
    }
    else if ((centenas > 1) && (dezenas == 0) && (unidades == 0)) {
        txtResultado = `${centenas} centenas.`
    }
    else if ((centenas == 0) && (dezenas > 1) && (unidades == 0)) {
        txtResultado = `${dezenas} dezenas.`
    }
    else if ((centenas == 0) && (dezenas == 0) && (unidades > 1)) {
        txtResultado = `${unidades} unidades.`
    }
    else if ((centenas == 1) && (dezenas == 0) && (unidades == 0)) {
        txtResultado = `1 centena.`
    }
    else if ((centenas == 0) && (dezenas == 1) && (unidades == 0)) {
        txtResultado = `1 dezena.`
    }
    else if ((centenas == 0) && (dezenas == 0) && (unidades == 1)) {
        txtResultado = `1 unidade.`
    }
    alert(txtResultado);

}




