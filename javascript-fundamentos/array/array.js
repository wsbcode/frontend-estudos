// APRENDENDO SOBRE (Array)
// Um Array é como uma gaveta com divisórias, onde cada espaço tem um número (índice).

// 1. Array de números: Criamos uma lista de valores numéricos simples.
// Índices: [0] é 10, [1] é 20, [2] é 30...
let numeros = [10, 20, 30, 40, 50];

// 2. Array de nomes: Lista de Strings (textos).
// Lembre-se: no JS, a contagem sempre começa no ZERO.
let nomes = ["William", "Rosângela", "Leticia", "Dionísio", "Rosilda"];

// 3. Array multidimensional (Matriz): Aqui temos um array dentro de outro!
// O item na posição [4] não é uma fruta, é uma "sub-lista" com mais 4 frutas.
let frutas = ["maca", "melão", "Manga", "Uva", ["Acerola", "Morango", "Laranja", "Limão"]];

// 4. Acessando um valor específico: Pede o valor na posição 1 do array 'numeros'.
// Resultado: 20 (porque 10 é o 0).
console.log(numeros[1]);

// 5. Acessando nomes: Pede quem está na posição 3.
// Resultado: "Dionísio" (0:William, 1:Rosângela, 2:Leticia, 3:Dionísio).
console.log(nomes[3]);

// 6. Imprime a lista completa de números.
console.log(numeros);

// 7. Imprime a lista completa de nomes.
console.log(nomes);

// 8. Imprime a estrutura completa de frutas, incluindo a sub-lista interna.
console.log(frutas);

// 9. ACESSO DUPLO: Entra na posição [4] de 'frutas' (a sub-lista)
// e depois pega a posição [2] de dentro dela.
// Resultado: "Laranja" (0:Acerola, 1:Morango, 2:Laranja).
console.log(frutas[4][2]);

console.log(numeros[1]);
console.log(nomes[3]);
console.log(numeros);
console.log(nomes);
console.log(frutas);
console.log(frutas[4][2]);
