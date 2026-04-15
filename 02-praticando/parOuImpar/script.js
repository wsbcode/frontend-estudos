// Pega o elemento input (campo de texto) do HTML
// O seletor "input" pega o PRIMEIRO input que encontrar na página
let numero = document.querySelector("input");

// Pega o elemento button (botão) do HTML
// O seletor "button" pega o PRIMEIRO botão que encontrar
let button = document.querySelector("button");

// Pega o elemento que tem o ID "exibir" (provavelmente uma div ou parágrafo)
// O # significa que estamos procurando por um ID
let exibir = document.querySelector("#exibir");

// Adiciona um "ouvinte de evento" ao botão
// Quando o botão for clicado ("click"), executa a função verificar
button.addEventListener("click", verificar);

// Declara a função que será executada quando o botão for clicado
function verificar() {
   // PRIMEIRO IF: Verifica se o campo NÃO ESTÁ vazio
   // O "!" significa "não" ou "negação"
   // Ou seja: "se NÃO for verdade que numero.value está vazio"
   if (!numero.value == "") {
      // SEGUNDO IF: Verifica se o número é PAR
      // O operador % calcula o RESTO da divisão
      // Se o resto da divisão por 2 for 0, o número é PAR
      if (numero.value % 2 == 0) {
         // Se for par, mostra esta mensagem no elemento exibir
         // O ${numero.value} insere o valor digitado dentro da string
         exibir.innerHTML = `O numero ${numero.value} é PAR`;
      } else {
         // Se NÃO for par (ou seja, se for ímpar), mostra esta mensagem
         exibir.innerHTML = `O numero ${numero.value} é IMPAR`;
      }

      // Limpa o campo de input (apaga o número digitado)
      numero.value = "";
   } else {
      // Se o PRIMEIRO IF for falso (ou seja, se o campo ESTIVER vazio)
      // Mostra mensagem pedindo para digitar um número válido
      exibir.innerHTML = "Digite um numero valido";
   }

   // Esta linha está duplicada! Você já limpou o campo dentro do IF
   // Ela vai apagar o campo novamente (não atrapalha, mas é repetida)
   numero.value = "";
}
