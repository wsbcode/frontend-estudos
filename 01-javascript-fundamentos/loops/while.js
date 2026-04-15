// LAÇO DE REPETIÇÃO COM (While)
//

let number = 0; // 1. O ponto de partida (Começamos do zero)

while (number <= 10) {
   // 2. A "fronteira" (Só pare quando passar de 10)
   console.log(`Contagem em: ${number}`); // 3. A ação (Mostra o número atual)
   number++; // 4. O passo (Soma +1 para não ficar parado no zero para sempre)
}

let names = ["William", "Leticia", "Marcia", "Junior", "Marcela"]; // Começa com 5 nomes

while (names.length < 10) {
   // 1. "Enquanto a lista tiver menos de 10 nomes..."
   let adicionandoArray = names.push("Rosângela"); // 2. Adiciona a Rosângela no final

   console.log(adicionandoArray); // 3. CUIDADO: O .push() retorna o novo TAMANHO da lista (6, 7, 8...)
   console.log(names); // 4. Mostra a lista crescendo a cada volta
}
