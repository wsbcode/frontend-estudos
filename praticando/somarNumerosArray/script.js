// Seleciona o botão no HTML usando o id #button
const button = document.querySelector("#button");

// Seleciona o elemento onde o resultado será exibido
const exibir = document.querySelector("#exibir");

// Adiciona um evento de clique no botão
// Quando o botão for clicado, a função mostrarSoma será executada
button.addEventListener("click", mostrarSoma);

// Cria um array contendo alguns números
// Esses números serão somados depois
let arrayNumeros = [2, 4, 6, 8, 10];

// Função responsável por calcular a soma dos números do array
function mostrarSoma() {
   // Variável acumuladora que vai guardar a soma total
   // Começa em 0 porque ainda não somamos nenhum número
   let soma = 0;

   // Laço de repetição que percorre todo o array
   // i começa em 0 (primeira posição do array)
   // continua enquanto i for menor que o tamanho do array
   // i++ faz o índice aumentar de 1 em 1
   for (let i = 0; i < arrayNumeros.length; i++) {
      // Pega o número atual do array usando o índice [i]
      // e soma na variável soma
      // += significa: soma = soma + valor
      soma += arrayNumeros[i];
   }

   // Depois que o loop termina, mostramos o resultado na tela
   // textContent altera o texto do elemento HTML
   exibir.textContent = soma;
}
