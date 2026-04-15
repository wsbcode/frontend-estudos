// Seleciona o campo de input pelo id "input"
const input = document.querySelector("#input");
// Seleciona o botão pelo id "button"
const button = document.querySelector("#button");
// Seleciona o elemento onde o resultado será exibido
const exibir = document.querySelector("#exibir");

// Adiciona um evento de clique no botão
// Quando o botão for clicado, executa a função "somar"
button.addEventListener("click", somar);

function somar() {
   // Pega o valor digitado no input
   // trim() remove espaços no começo e no final
   const valorInput = input.value.trim();

   // Verifica se o campo está vazio
   // Se estiver vazio, mostra alerta e encerra a função
   if (!valorInput) {
      alert("Digite um número");
      return; // interrompe a execução
   }

   // Converte o valor (string) para número
   const numero = Number(valorInput);

   // Verifica se o valor convertido NÃO é um número válido
   if (isNaN(numero)) {
      alert("Apenas números");
      return; // interrompe a execução
   }

   // Variável acumuladora que vai armazenar a soma
   let resultado = 0;

   // Laço que começa em 0 e vai até o número digitado
   // "let i" existe apenas dentro do for (escopo local)
   for (let i = 0; i <= numero; i++) {
      // Soma o valor atual de i ao resultado
      // É a forma reduzida de: resultado = resultado + i
      resultado += i;
   }

   // Exibe o resultado final no elemento da página
   exibir.textContent = resultado;
}
