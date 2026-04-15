// Seleciona o elemento HTML que possui o id "button"
// Normalmente é um botão que o usuário vai clicar
const button = document.querySelector("#button");

// Seleciona o elemento HTML que possui o id "exibir"
// Esse elemento será usado para mostrar o resultado na tela
const exibir = document.querySelector("#exibir");

// Cria um array (lista) de números
const numerosArray = [2, 4, 6, 8, 10, 15, 20, 25, 30];

// Adiciona um "ouvinte de evento" no botão
// Quando o botão for clicado, a função "filtrar" será executada
button.addEventListener("click", filtrar);

// Função responsável por filtrar os números do array
function filtrar() {
   // O método filter percorre todo o array
   // Ele retorna apenas os itens que atendem à condição definida
   // Neste caso: números maiores ou iguais a 10
   let filtrando = numerosArray.filter((item) => item >= 10);

   // Mostra o resultado dentro do elemento HTML "exibir"
   // textContent altera o texto exibido na página
   exibir.textContent = filtrando;
}
