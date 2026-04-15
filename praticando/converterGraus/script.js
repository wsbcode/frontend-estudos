// Seleciona o input onde o usuário digita o valor
let input = document.querySelector("#input");

// Seleciona o elemento onde o resultado será exibido
let exibir = document.querySelector("#exibir");

// Seleciona o botão que vai disparar a conversão
let button = document.querySelector("#button");

// Adiciona um evento de clique no botão
// Quando clicar, executa a função converter
button.addEventListener("click", converter);

// Função responsável por validar e converter os valores
function converter() {
   // Verifica se o campo está vazio
   if (input.value == "") {
      exibir.innerHTML = "Digite um valor valido";
   } else {
      // Pega o valor digitado pelo usuário
      let valorInput = input.value;

      // Converte o valor (que é string) para número
      let celsius = Number(valorInput);

      // Verifica se o valor convertido não é um número válido
      if (isNaN(celsius)) {
         exibir.innerHTML = "Digite apenas números";
      } else {
         // Faz o cálculo da conversão de Celsius para Fahrenheit
         let resultado = (celsius * 9) / 5 + 32;

         // Mostra o resultado na tela usando template string
         exibir.innerHTML = `${celsius}°C equivalem a ${resultado}°F`;
      }
   }

   // Limpa o campo após executar a função
   input.value = "";
}
