// seleciona o botão no HTML usando o id #button
const button = document.querySelector("#button");

// seleciona o elemento onde os números pares serão exibidos
const exibir = document.querySelector("#exibir");

// cria um array com números de 0 até 9
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// adiciona um evento de clique no botão
// quando o botão for clicado, a função mostrarPares será executada
button.addEventListener("click", mostrarPares);

// função responsável por encontrar e mostrar os números pares
function mostrarPares() {
   // variável que vai armazenar o resultado final em formato de texto
   let resultado = "";

   // loop que percorre todo o array numeros
   // começa no índice 0 e vai até o último índice do array
   for (let i = 0; i < numeros.length; i++) {
      // verifica se o número atual do array é par
      // % significa "resto da divisão"
      // se o resto da divisão por 2 for 0, o número é par
      if (numeros[i] % 2 === 0) {
         // adiciona o número par encontrado na variável resultado
         // também adiciona um espaço para separar os números
         resultado += numeros[i] + " ";
      }
   }

   // exibe o resultado dentro do elemento HTML selecionado
   exibir.textContent = resultado;
}
