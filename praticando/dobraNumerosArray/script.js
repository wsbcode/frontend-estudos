// seleciona o botão no HTML usando o id "button"
const button = document.querySelector("#button");

// seleciona o elemento onde o resultado será exibido
const exibir = document.querySelector("#exibir");

// cria um array com números de 1 a 10
const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// quando o botão for clicado, executa a função "dobrar"
button.addEventListener("click", dobrar);

// função responsável por dobrar os números do array
function dobrar() {
   // cria um novo array vazio para guardar os números dobrados
   let resultado = [];

   // percorre todos os números do array original
   for (let i = 0; i < numerosArray.length; i++) {
      // pega o número atual do array e multiplica por 2
      let numeroDobrado = numerosArray[i] * 2;

      // adiciona o número dobrado dentro do array "resultado"
      resultado.push(numeroDobrado);
   }

   // mostra o novo array na tela
   exibir.textContent = resultado;
}

// VERSÃO UTILIZANDO MAP
button.addEventListener("click", dobrando);

function dobrando() {
   let arrayDobrado = numerosArray.map((item) => item * 2);
   exibir.textContent = arrayDobrado;
}

// MAP em array de objetos
const usuarios = [
   { nome: "João", idade: 25 },
   { nome: "Maria", idade: 30 },
   { nome: "Pedro", idade: 28 },
];

const nomes = usuarios.map((i) => i.nome);
console.log(nomes); // ['João', 'Maria', 'Pedro']

// Adicionando email aos usuarios
const usuariosComEmail = usuarios.map((usuario) => ({
   ...usuario,
   email: `${usuario.nome.toLowerCase()}@email.com`,
}));
console.log(usuariosComEmail);
