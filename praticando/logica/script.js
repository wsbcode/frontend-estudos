// Seleciona o elemento do HTML que vai EXIBIR o valor do contador na tela
let exibir = document.getElementById("exibir");

// Seleciona o botão responsável por ADICIONAR ao contador
let adicionar = document.getElementById("add");

// Seleciona o botão responsável por SUBTRAIR do contador
let subtrair = document.getElementById("sub");

// Cria a variável contador.
// Ela guarda o valor atual e começa em 0.
let contador = 0;

// Função responsável por ATUALIZAR o contador
// Ela recebe um valor como parâmetro (positivo ou negativo)
function atualizarContador(valor) {
   // Verifica se o valor recebido é positivo
   if (valor > 0) {
      // Se for positivo, incrementa o contador (+1)
      contador++;
   } else {
      // Se for negativo, decrementa o contador (-1)
      contador--;
   }

   // Atualiza o conteúdo do elemento HTML
   // Mostrando o valor atual do contador na tela
   exibir.textContent = contador;
}

// Adiciona um evento de clique no botão "adicionar"
// Quando clicar, chama a função passando 1 (valor positivo)
adicionar.addEventListener("click", () => atualizarContador(1));

// Adiciona um evento de clique no botão "subtrair"
// Quando clicar, chama a função passando -1 (valor negativo)
subtrair.addEventListener("click", () => atualizarContador(-1));
