// Pega o elemento do input pelo id "input"
let input = document.querySelector("#input");

// Pega o botão pelo id "button"
let button = document.querySelector("#button");

// Pega o elemento onde o resultado será exibido
let exibir = document.querySelector("#exibir");

// Adiciona um evento de clique no botão
// Quando o botão for clicado, executa a função verificar
button.addEventListener("click", verificar);

function verificar() {
   // Pega o valor que foi digitado no input
   let valorInput = input.value;

   // Verifica se o campo está vazio
   if (valorInput === "") {
      // Se estiver vazio, mostra um alerta
      alert("Preencha os campos");

      // Encerra a função para não continuar executando
      return;
   } else {
      // Se não estiver vazio, mostra o texto digitado
      // e a quantidade de caracteres usando .length
      exibir.innerHTML = `${valorInput} possui ${valorInput.length} caracteres`;
   }
}
