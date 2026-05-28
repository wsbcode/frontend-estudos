// FUNÇÃO
//
// ==========================================
// 1. Exemplo simples
// ==========================================

/*

 function = cria função

 parâmetro = valor recebido

 argumento = valor enviado

 return = retorna valor

 função evita repetir código
 
 */

// function = cria função

// saudação = nome da função

// () = espaço dos parâmetros

// {} = bloco da função

// saudação() = executa a função

// cria função chamada mostrarNome
function mostrarNome() {
   // exibe mensagem
   console.log("William");
}

// chama/executa função
mostrarNome();

// ==========================================
// 2. Função com parâmetro
// ==========================================

//Parâmetro é um valor que a função recebe.

// nome é um parâmetro
function saudar(nome) {
   // mostra valor recebido
   console.log("Olá " + nome);
}

// envia valor para função
saudar("William");

// ==========================================
// 3. Função somando valores
// ==========================================

// função recebe dois números
function somar(numero1, numero2) {
   // soma valores
   let resultado = numero1 + numero2;

   // mostra resultado
   console.log(resultado);
}

// envia os valores
somar(10, 5);

// ==========================================
// 4. Função com Return
// ==========================================

// return serve para retornar um valor.
// função soma valores

function somar(a, b) {
   // retorna resultado
   return a + b;
}

// guarda retorno da função
let resultado = somar(5, 5);

// mostra resultado
console.log(resultado);

// ==========================================
// 5. Arrow Function
// ==========================================

//Forma moderna de criar função.

// cria função
const saudar = (nome) => {
   console.log("Olá " + nome);
};

// executa função
saudar("William");

// Forma curta da arrow function

// retorna valor automaticamente
const dobrar = (numero) => numero * 2;

console.log(dobrar(10));
