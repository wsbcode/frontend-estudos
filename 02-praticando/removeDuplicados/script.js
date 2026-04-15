// Seleciona o botão pelo ID "button" e armazena na constante button
const button = document.querySelector("#button");

// Seleciona o elemento onde o resultado será exibido (provavelmente um div, p, span, etc) pelo ID "exibir"
const exibir = document.querySelector("#exibir");

// Cria um array com vários números, incluindo valores duplicados (7, 4, 6 aparecem mais de uma vez)
const itensArray = [1, 2, 3, 4, 5, 6, 7, 7, 4, 6, 4, 5];

// Adiciona um "ouvinte de evento" ao botão. Quando o botão for clicado, executa a função filtrar
button.addEventListener("click", filtrar);

// Declara a função chamada filtrar que será executada quando o botão for clicado
function filtrar() {
   // Cria um array vazio chamado resultado (mas ele será sobrescrito na próxima linha)
   let resultado = [];

   // AQUI ACONTECE A MÁGICA DA REMOÇÃO DE DUPLICATAS:
   resultado = itensArray.filter((item, index) => itensArray.indexOf(item) === index);
   // Explicação detalhada do filtro:
   // - O método filter() percorre CADA item do array itensArray
   // - Para cada item, ele recebe o 'item' atual e o 'index' (posição) dele
   // - itensArray.indexOf(item) encontra a PRIMEIRA ocorrência daquele item no array
   // - Se o índice atual (index) for IGUAL ao índice da primeira ocorrência, mantém o item
   // - Se for DIFERENTE (ou seja, é uma repetição), remove o item
   //
   // Exemplo prático com o número 7 que aparece duas vezes:
   // - Primeiro 7 (índice 6): indexOf retorna 6, index é 6 → 6 === 6 → MANTÉM
   // - Segundo 7 (índice 7): indexOf retorna 6 (primeira ocorrência), index é 7 → 6 === 7? NÃO → REMOVE

   // Coloca o array resultado (sem duplicatas) como conteúdo de texto do elemento exibir
   exibir.textContent = resultado;
}
