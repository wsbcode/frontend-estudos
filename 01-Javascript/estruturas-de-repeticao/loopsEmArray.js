// LOOPS EM ARRAY

// =================================================
// 1. loop simples em um array  ( forma tradicional)
// =================================================

// Criamos um Array (lista) contendo 4 textos (strings) de cores
let cores = ["azul", "amarelo", "verde", "preto"];

// O 'for' vai rodar repetidamente para ler a nossa lista.
// 1º: let i = 0; -> Começa o 'i' valendo 0, porque as listas no JavaScript sempre começam na posição 0.
// 2º: i < cores.length; -> 'cores.length' diz o tamanho da lista (que é 4). O laço roda enquanto 'i' for menor que 4.
// 3º: i++ -> Soma +1 ao 'i' a cada rodada.
for (let i = 0; i < cores.length; i++) {
   // cores[i] pega a cor que está na posição atual do número 'i'.
   // Na rodada 0 pega cores[0] ("azul"), na rodada 1 pega cores[1] ("amarelo")...
   console.log(cores[i]);
}

console.log("-------------------");
// =========================================================================
// 1. loop simples em um array com ` for(of) ` de forma mais usada em arrays
// =========================================================================

// Criamos um Array (lista) com 4 nomes (strings)
let nomes = ["William", "Sousa", "Barbosa", "Devenidos"];

// O 'for...of' é a forma mais moderna e limpa de ler listas no JavaScript.
// Lemos assim: "Para cada 'nome' DE dentro da lista 'nomes'..."
// Ele cria a variável 'nome' automaticamente e, a cada volta,
// coloca o texto direto dentro dela, sem você precisar se preocupar com números de posição [i].
for (let nome of nomes) {
   // Exibe o nome atual diretamente no terminal
   console.log(nome);
}
