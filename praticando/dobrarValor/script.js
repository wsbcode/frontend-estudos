// Seleciona os elementos do HTML
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let exibir = document.querySelector("#exibir");

// Adiciona um evento de clique no botão
// Quando clicar, executa a função dobrar
button.addEventListener("click", dobrar);

function dobrar() {
   // Pega o valor digitado e remove espaços do começo e do fim
   let valorInput = input.value.trim();

   // Validação 1: verifica se o campo está vazio
   if (valorInput === "") {
      alert("Preencha os campos");
      return; // interrompe a execução da função
   }

   // Converte a string para número
   let numero = Number(valorInput);

   // Validação 2: verifica se não é um número válido
   if (isNaN(numero)) {
      exibir.innerHTML = `Digite apenas números`;
      return; // interrompe a execução
   }

   // Calcula o dobro do número
   let resultado = `${numero * 2}`;

   // Exibe o resultado na tela
   exibir.innerHTML = ` <h1 style="color: blue;">${resultado}</h1>`;
}
