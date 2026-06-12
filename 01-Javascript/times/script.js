// Função com setTimeout

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
