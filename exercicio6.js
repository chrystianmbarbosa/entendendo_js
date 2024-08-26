let nome = prompt("Informe seu Nome:");
let qtdeHoras = parseFloat(
    prompt("Informe quantidade horas trabalhadas")
);
let valorHoraTrabalhada = parseFloat(
    prompt("Informe o Valor da sua Hora: ")
);

let valorTotal = valorHoraTrabalhada * qtdeHoras;
let mensagem = `${nome}, recebeu R$ ${valorTotal.toFixed(2)} no mês`;

alert(mensagem);
