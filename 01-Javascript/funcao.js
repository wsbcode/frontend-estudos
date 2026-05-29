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
const saudarcao = (nome) => {
   console.log("Olá " + nome);
};

// executa função
saudarcao("William");

// Forma curta da arrow function

// retorna valor automaticamente
const dobrar = (numero) => numero * 2;

console.log(dobrar(10));

// exemplo com usuario digitando valor

// 1. A sua função que dobra o número (ela fica esperando um valor chegar)
const dobrando = (numero) => numero * 2;

// 2. Simulando o que o usuário digitou em um campo de texto do site
// (Imagine que ele digitou "10" na caixinha do site e o JavaScript guardou aqui)
let campoDigitadoPeloUsuario = 10;

// 3. O JavaScript pega o que estava no campo e joga para dentro da função
let resultadoFinal = dobrando(campoDigitadoPeloUsuario);

console.log(resultadoFinal); // Mostra no terminal: 20

function testando(nome, idade) {
   return `Nome: ${nome} Idade:${idade}`;
}

let nick = testando("William", 1990);

console.log(nick);
