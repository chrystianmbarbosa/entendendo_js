/*Faça um algoritmo que o usuário escreva o nome e o 
preço de três produtos e assim que terminar de 
escrever o ultimo produto, mostre o nome e o 
valor do produto mais barato.*/

let nomeProduto1 = prompt("Informe o Nome do Produto 1");
let valorProduto1 = parseFloat(
    prompt("Informe o valor do Produto 1:")
);
let nomeProduto2 = prompt("Informe o Nome do Produto 2");
let valorProduto2 = parseFloat(
    prompt("Informe o valor do Produto 2:")
);
let nomeProduto3 = prompt("Informe o Nome do Produto 3");
let valorProduto3 = parseFloat(
    prompt("Informe o valor do Produto 3:")
);

if (valorProduto1 <= valorProduto2) {
    if (valorProduto1 <= valorProduto3) {
        let info =
            `O Produto ${nomeProduto1} de valor R$ ${valorProduto1.toFixed(2)} é mais barato!`;
        alert(info);
    }
}

if (valorProduto2 <= valorProduto1) {
    if (valorProduto2 <= valorProduto3) {
        let info =
            `O Produto ${nomeProduto2} de valor R$ ${valorProduto2.toFixed(2)} é mais barato!`;
        alert(info);
    }
}
if (valorProduto3 <= valorProduto1) {
    if (valorProduto3 <= valorProduto2) {
        let info =
            `O Produto ${nomeProduto3} de valor R$ ${valorProduto3.toFixed(2)} é mais barato!`;
        alert(info);
    }
}