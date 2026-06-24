//Resumo em uma frase
//setTimeout é um alarme que toca uma vez depois de um tempo, e setInterval é um alarme que fica tocando repetidamente a cada tempo que você

// setTimeout: agendando ações no futuro

function showWarning(text) {
   let avisoElement = document.querySelector(".aviso"); // Seleciona a div no HTML e armazena na variável
   avisoElement.innerText = text; // Adiciona o texto que será recebido dentro da div selecionada
   avisoElement.style.display = "block"; // Muda o display da div que está 'none' para 'block'

   // Função que faz o texto que foi exibido após o clique desaparecer depois de 3 segundos (3000 milissegundos)
   setTimeout(() => {
      avisoElement.style.display = "none";
      avisoElement.innerText = "";
   }, 3000);
}

// Selecionando o botão e já aplicando o evento diretamente, manda o texto direto para a função showWarning
document.querySelector("button").addEventListener("click", () => {
   let mensagem = "AVISO! Seu computador está sendo invadido";
   showWarning(mensagem);
});

// setInterval, clearTimeout e clearInterval
let botao = document.querySelector("#btn2");

botao.addEventListener("click", () => {
   let numero = 5; // Começa do 5

   botao.setAttribute("disabled", "disabled"); // Desabilita o botão

   // Função que será usada tanto na hora quanto no intervalo
   function timerCallback() {
      console.log("1"); // Mostra no console a cada execução

      if (numero >= 1) {
         // Se ainda tem número pra mostrar
         numero--; // Diminui: 5→4, 4→3, 3→2, 2→1, 1→0
         botao.innerText = `Reenviar código em ${numero}`; // Atualiza o texto
      } else {
         // Quando numero chega em 0
         clearInterval(timer); // Para o intervalo
         botao.innerText = "Click here"; // Volta o texto original
         botao.removeAttribute("disabled"); // Reativa o botão
      }
   }

   timerCallback(); // ← Chama UMA VEZ agora (mostra 4 imediatamente)
   let timer = setInterval(timerCallback, 1000); // Depois chama a cada 1s
});
