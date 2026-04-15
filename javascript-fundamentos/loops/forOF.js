// LAÇO DE REPETIÇÃO COM ( for...of )MAIS UTILIZADO PARA PERCORRER ARRAYS.

let frutas = ["maçã", "Uva", "Melancia", "Melão", "Manga"];

// Ele lê-se: "Para cada 'i' (item) DENTRO de frutas"
for (i of frutas) {
   console.log(i); // O 'i' já é o nome da fruta direto: "maçã", "Uva"...
}

let times = ["Palmeiras", "Vitoria", "Real Madri", "Barcelona", "Vasco"];

// Aqui usamos a propriedade .length (comprimento) do array
// O loop roda enquanto 'i' for menor que o total de itens (5)
for (i = 0; i < times.length; i++) {
   console.log(times[i]); // Precisamos usar o índice [i] para "abrir a gaveta"
}
