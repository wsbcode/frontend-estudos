// Seleciona o elemento de entrada (input) do HTML
const input = document.querySelector("#input");

// Seleciona o botão do HTML
const button = document.querySelector("#button");

// Seleciona o elemento onde o resultado será exibido
const result = document.querySelector("#exibir");

// Função que conta quantas vogais existem em uma palavra
function contarVogais(palavra) {
   // Usa regex para encontrar todas as vogais (com e sem acentos)
   // /[...]/gi significa: [caracteres] = conteúdo a buscar, g = global (todos), i = case-insensitive
   const correspondencias = palavra.match(/[aeiouáéíóúàâêôãõü]/gi);

   // Se encontrou vogais, retorna a quantidade; se não, retorna 0
   return correspondencias ? correspondencias.length : 0;
}

// Adiciona um evento de clique ao botão
button.addEventListener("click", () => {
   // Obtém o valor digitado no input e remove espaços em branco das pontas
   const palavra = input.value.trim();

   // Testa se a palavra contém pelo menos uma letra (valida se é realmente uma palavra)
   const temLetras = /[a-zA-Záéíóúàâêôãõçü]/i.test(palavra);

   // Validação 1: Se o campo está vazio
   if (!palavra) {
      result.textContent = "Preencha o campo com uma palavra.";
      return; // Interrompe a execução
   }

   // Validação 2: Se não contém letras válidas
   if (!temLetras) {
      result.textContent = "Digite uma palavra válida para contar as vogais.";
      return; // Interrompe a execução
   }

   // Chama a função para contar as vogais
   const quantidade = contarVogais(palavra);

   // Exibe o resultado com plural correto (vogal ou vogais)
   result.textContent = `A palavra tem ${quantidade} vogal${quantidade !== 1 ? "is" : ""}.`;
});
