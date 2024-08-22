/*Faça um algoritmo para a leitura de duas notas parciais de um aluno. 
O algoritmo deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que cinco;
A mensagem “Recuperação", se a média estiver entre cinco e sete.*/

//ENTRADA DE DADOS
let nome = prompt("Informe seu nome");
let n1 = parseFloat(prompt("Informe a Nota 1: "));
let n2 = parseFloat(prompt("Informe a Nota 2: "));
let n3 = parseFloat(prompt("Informe a Nota 3: "));
const quantidadeNotas = 3;

//PROCESSAR
let media = (n1 + n2 + n3) / quantidadeNotas;
let mensagem = "";
//COMAPARAR
if (media >= 7) {
    mensagem = "O Aluno está Aprovado!";
}
else if (media >= 5) {
    mensagem = "O Aluno está Recuperação!";

} else {
    mensagem = "O Aluno está Reprovado!";
}

//alert(nome + ', ' + mensagem);
alert(`${nome}, ${mensagem}`);









