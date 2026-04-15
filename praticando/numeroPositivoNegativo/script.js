// Seleciona o campo de input pelo id "input"
const input = document.querySelector("#input");

// Seleciona o botão pelo id "button"
const button = document.querySelector("#button");

// Seleciona o elemento onde o resultado será exibido
const exibir = document.querySelector("#exibir");

// Adiciona um evento de clique no botão
// Quando o botão for clicado, executa a função "verificar"
button.addEventListener("click", verificar);

function verificar() {
   // Pega o valor digitado no input
   // trim() remove espaços no início e no final
   const valorInput = input.value.trim();

   // Verifica se o campo está vazio
   // Se estiver vazio, mostra mensagem e encerra a função
   if (!valorInput) {
      exibir.textContent = "Digite um numero";
      return; // interrompe a execução
   }

   // Converte o valor (que é string) para número
   let numero = Number(valorInput);

   // Verifica se o valor convertido não é um número válido
   if (isNaN(numero)) {
      exibir.textContent = "Apenas números";
      return; // interrompe a execução
   }

   // Verifica se o número é maior que 0
   if (numero > 0) {
      // Se for maior que 0, é positivo
      exibir.textContent = `O número ${numero} é POSITIVO`;
   } else if (numero < 0) {
      // Se for menor que 0, é negativo
      exibir.textContent = `O número ${numero} é NEGATIVO`;
   } else {
      // Se não for maior nem menor que 0, então é zero
      exibir.textContent = `O número é ZERO`;
   }
}
