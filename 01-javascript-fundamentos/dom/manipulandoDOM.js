// APRENDENDO SOBRE (DOM = Document Objet Model)
//
// Pegando o INPUT la no HTML e armazenando ele na Variável
let pegandoValorReal = document.querySelector("input");

// Pegando a TAG H1 la no HTML e armazenando ele na Variável , para que ela recebe e exiba o resultado
let recebendoResultado = document.querySelector("#exibir");

// Função que vai pega os elementos html e executar
function converter() {
   // Pega o Valor que foi digitado no INPUT e guarda
   let valorDigitado = pegandoValorReal.value;

   // Armazena o resultado do Valor digitado e faz a conversão
   let resultado = valorDigitado / 5.37;

   // Pega o elemento H1 e joga nele o resultado  da função
   recebendoResultado.innerHTML = `O valor ${
      pegandoValorReal.value
   } R$ , convertido é ${resultado.toFixed(2)} $USD`;
}
