// const button = document.querySelector("#button");
// const exibir = document.querySelector("#exibir");

// const numeros = [10, 20, 71, 30, -80, -99, 40, 50, 60];

// button.addEventListener("click", encontrarMaiorNumero);

// function encontrarMaiorNumero() {
//    let resultado = numeros[0];

//    for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] > resultado) {
//          resultado = numeros[i];
//       }
//    }
//    exibir.textContent = resultado;
// }

// button.addEventListener("click", somar);

// function somar(n1, n2) {
//    return n1 + n2;
// }
// console.log(somar(10, 20));

// pega o botão do HTML
const button = document.querySelector("#button");

// pega o elemento onde vamos mostrar o resultado
const exibir = document.querySelector("#exibir");

// array com vários números
const numeros = [10, 20, 71, 30, -80, -99, 40, 95, 50, 60];

// quando o botão for clicado, executa uma função
button.addEventListener("click", () => {
   // aqui estamos chamando a função e passando o array "numeros"
   // o valor de numeros vai entrar no parâmetro chamado "array"
   const maiorNumero = encontrarMaiorNumero(numeros);

   // mostramos o resultado na tela
   exibir.textContent = maiorNumero;
});

// função responsável por encontrar o maior número
// "array" é o PARÂMETRO da função
// ele vai receber o array que passarmos quando chamarmos a função
function encontrarMaiorNumero(array) {
   // aqui usamos o primeiro número do array como valor inicial
   let maior = array[0];

   // percorremos o array começando do índice 1
   // porque o índice 0 já foi usado como base
   for (let i = 1; i < array.length; i++) {
      // verificamos se o número atual é maior que o número guardado
      if (array[i] > maior) {
         // se for maior, atualizamos a variável
         maior = array[i];
      }
   }

   // depois de percorrer todos os números
   // retornamos o maior valor encontrado
   return maior;
}
