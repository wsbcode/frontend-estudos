// Seleciona o input pelo id
const input = document.querySelector("#input");

// Seleciona o botão pelo id
const button = document.querySelector("#button");

// Seleciona o elemento onde será exibido o resultado
const exibir = document.querySelector("#exibir");

// Quando o botão for clicado, chama a função regredir
button.addEventListener("click", regredir);

function regredir() {
   // Pega o valor digitado e remove espaços do começo e fim
   const valorInput = input.value.trim();

   // Se o campo estiver vazio
   if (!valorInput) {
      exibir.textContent = "Preencha os campos";
      return; // Para a execução da função
   }

   // Converte o valor digitado para número
   const numero = Number(valorInput);

   // Verifica se NÃO é número
   // ⚠ ERRO AQUI: você está verificando valorInput (string)
   // O correto seria verificar a variável numero
   if (isNaN(valorInput)) {
      exibir.textContent = "Digite apenas números";
   }

   // Variável que vai armazenar o resultado da contagem
   let resultado = "";

   // Loop que começa no número digitado e vai até 0
   for (let inicio = numero; inicio >= 0; inicio--) {
      // Vai acumulando os números na variável resultado
      resultado += inicio;
   }

   // Mostra o resultado na tela
   exibir.innerHTML = resultado;
}
