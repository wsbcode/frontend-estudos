// Seleciona os elementos do HTML
const input = document.querySelector("#input"); // campo onde o usuário digita o número
const button = document.querySelector("#button"); // botão que vai executar a verificação
const exibir = document.querySelector("#exibir"); // elemento onde será exibido o resultado

// Array com os números que serão verificados
const itensArray = [10, 20, 30, 40, 50, 60];

// Quando o botão for clicado, executa a função verificar
button.addEventListener("click", verificar);

function verificar() {
   // Pega o valor digitado no input e remove espaços antes/depois
   const valorInput = input.value.trim();

   // Converte o valor digitado (que vem como string) para número
   const numero = Number(valorInput);

   // Verifica se o valor digitado NÃO é um número
   if (isNaN(numero)) {
      exibir.textContent = "Digite apenas números"; // mostra mensagem de erro
      return; // interrompe a função para não continuar a execução
   }

   // Procura no array um item que seja igual ao número digitado
   // find retorna o valor encontrado ou undefined se não encontrar
   let resultado = itensArray.find((item) => numero === item);

   // Verifica se encontrou algum valor
   if (resultado !== undefined) {
      // Se encontrou, mostra mensagem dizendo que o número existe
      exibir.textContent = `O número ${numero} existe no array`;
   } else {
      // Se não encontrou, mostra mensagem informando
      exibir.textContent = "Número não encontrado";
   }
}
