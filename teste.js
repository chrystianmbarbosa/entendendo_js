let texto = "Olá, mundo!";
alert(texto.length); // Saída: 11
alert(texto.toUpperCase()); // Saída: "OLÁ, MUNDO!"
alert(texto.toLowerCase()); // Saída: "olá, mundo!"
alert(texto.charAt(5)); // Saída: "m"
alert(texto.indexOf("m")); // Saída: 4
alert(texto.lastIndexOf("o")); // Saída: 10
alert(texto.slice(4, 9)); // Saída: "mundo"
alert(texto.substring(4, 9)); // Saída: "mundo"

alert(texto.replace("mundo", "JavaScript")); 
// Saída: "Olá, JavaScript!"

let palavras = texto.split(" ");
alert(palavras); // Saída: ["Olá,", "mundo!"]

let texto2 = "   Olá, mundo!   ";
alert(texto2.trim()); // Saída: "Olá, mundo!"
