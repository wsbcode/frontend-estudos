// APRENDENDO SOBRE EVENTOS E MANIPULAÇÃO DO DOM = ( Document Object Model )
//
//Passando primeiro evento , adicionando uma função com base no evento de click direto no botão do HTML
function clicou01() {
   console.log("Fui clicado");
}

//EXEMPLO 02
// Selecionando o botão do HTML e armazenando em uma variável
let button02 = document.querySelector(".button02");

// Adicionando o evento de click no botão através da variável onde ele foi armazenado
button02.addEventListener("click", clicou02);

function clicou02() {
   console.log("Fui clicado também");
}

// EXEMPLO 03
// Selecionando o botão do HTML e armazenando em uma variável
let button03 = document.querySelector(".button03");

// Fazendo o evento acontecer com uma função direto , sem precisar criar uma funcao separada
button03.addEventListener("click", function () {
   console.log("O terceiro foi clicado");
});

//--------------------------------------------------------------------------------------//

// MANIPULANDO ELEMENTOS DA LISTA
//
// Adicionando o evento de click no botão através da variável onde ele foi armazenado
let buttonLista1 = document.querySelector(".buttonLista1");

// Selecionando o botão , adicionando o evento nele , e nele mesmo criando a função a ser executada apos o click
buttonLista1.addEventListener("click", () => {
   // Selecionando a div onde esta  lista que sera alterada
   let divLista1 = document.querySelector(".lista1");
   // Criando uma nova variável , que recebe a div e seleciona lista que esta dentro dela
   let conteudoLista1 = divLista1.querySelector("ul");
   // Adicionando novo conteudo na lista
   conteudoLista1.innerHTML += "<li>Adicionando item 3</li>";
});
