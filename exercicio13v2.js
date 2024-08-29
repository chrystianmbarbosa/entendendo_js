/*Faça um algoritmo que leia um nome de usuário e a sua senha. 
A senha não pode ser igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações. */
let usuario, senha = "";

usuario = prompt("Informe o nome do usuário:");
senha = prompt("Informe a sua senha:");

while (usuario == senha) {
    alert("O usuário não pode ser igual a senha!");

    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");
}

alert("Cadastrado com sucesso!")




