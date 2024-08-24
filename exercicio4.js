let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));

if ((num1 >= num2) && (num1 >= num3)) {
    alert(`O numero ${num1} é maior de todos!`);
}
else if ((num2 >= num1) && (num2 >= num3)) {
    alert(`O numero ${num2} é maior de todos!`);
}
else if ((num3 >= num1) && (num3 >= num2)) {
    alert(`O numero ${num3} é maior de todos!`);
}

