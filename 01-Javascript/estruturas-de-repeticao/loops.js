//  LAÇOS DE REPETIÇÕES
//
// ==========================================
// 1. Exemplo simples do for
// ==========================================

// Criamos uma variável que define até onde o nosso contador vai contar (neste caso, até 10)
let contador = 10;

// O 'for' é uma estrutura de repetição que precisa de 3 passos para funcionar:
// 1º passo: let i = 0; -> Cria uma variável de controle chamada 'i' que começa valendo 0.
// 2º passo: i <= contador; -> É a condição. O laço vai continuar rodando ENQUANTO 'i' for menor ou igual a 10.
// 3º passo: i++ -> É o aumento. Toda vez que o laço terminar de rodar, soma +1 ao valor de 'i'.
for (let i = 0; i <= contador; i++) {
   // Exibe no terminal o valor atual da variável 'i' a cada rodada
   console.log(i);
}

// ==========================================
// 1. Exemplo simples do while
// ==========================================

// Criamos a vida atual do personagem (ele começa com 70 de vida)
let vidaDoPersonagem = 70;

// O 'while' significa 'enquanto'.
// Ele vai testar a condição: enquanto a vida for menor que 100, ele continua rodando.
while (vidaDoPersonagem < 100) {
   // Mostra na tela a quantidade de vida atual
   console.log(`Vida atual: ${vidaDoPersonagem}% - Curando...`);

   // A cada rodada do laço, somamos +10 na vida do personagem
   // Isso é IMPORTANTE para a vida subir e o laço ter um fim!
   vidaDoPersonagem += 10;
} // Quando chega aqui, o JavaScript volta lá em cima e testa a vida de novo.

// Quando a vida chega a 100, a condição (vidaDoPersonagem < 100) vira Falsa.
// O laço para de rodar e o código continua aqui embaixo:
console.log("Vida completa! Pronto para a batalha.");
