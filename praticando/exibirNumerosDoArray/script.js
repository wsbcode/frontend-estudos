// Seleciona o botão pelo id "button"
const button = document.querySelector("#button");

// Seleciona o elemento onde os números serão exibidos
const exibir = document.querySelector("#exibir");

// Cria um array com vários números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Adiciona um evento de clique no botão
// Quando clicar, executa a função "mostrar"
button.addEventListener("click", mostrar);

function mostrar() {
   // Variável acumuladora do tipo string
   // Ela vai armazenar todos os números em formato de texto
   let mostrarArray = "";

   // Laço que percorre o array do índice 0 até o último índice
   // numeros.length representa o tamanho total do array
   for (let i = 0; i < numeros.length; i++) {
      // numeros[i] pega o valor da posição atual
      // "+ """ força a conversão para string
      // O valor é concatenado na variável mostrarArray
      mostrarArray += numeros[i] + "";
   }

   // Depois que o laço termina,
   // exibimos o resultado acumulado na tela
   exibir.textContent = mostrarArray;
}
