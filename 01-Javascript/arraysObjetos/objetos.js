// OBJETOS

// ==========================================
// 1. Objeto Simples (Ficha de Cadastro)
// ==========================================
// Serve para agrupar várias informações sobre uma única coisa (como uma pessoa).
// Cada informação tem um nome (propriedade) e um valor.
let aluno = {
   nome: "William",
   idade: 33,
   curso: "Análise e Desenvolvimento de Sistemas",
};

// ==========================================
// 2. Objeto com Diferentes Tipos de Dados
// ==========================================
// Um objeto pode guardar qualquer tipo de dado dentro dele: Strings, Numbers, Booleans e até mesmo Arrays.
let produto = {
   nome: "Notebook Gamer",
   preco: 4500.0,
   emEstoque: true,
   coresDisponiveis: ["Preto", "Cinza"], // Um Array dentro do Objeto!
};

// ==========================================
// 3. Array contendo Objetos (Muito usado no dia a dia!)
// ==========================================
// Na programação web, é extremamente comum termos uma lista (Array) cheia de fichas (Objetos) dentro dela.
let listaDeUsuarios = [
   { nome: "William", estaAtivo: true }, // Posição 0 da lista
   { nome: "Marcela", estaAtivo: false }, // Posição 1 da lista
   { nome: "Vitoria", estaAtivo: true }, // Posição 2 da lista
];
console.log(listaDeUsuarios);

// =================================================
// EXPLICANDO OBJETO
// =================================================
/*

OBJETO

Nome: 'William': (Nome) = Chave do objeto ||  'William' = Valor do objeto 

let usuario = {
   // CHAVE   |   VALOR
   nome:        "William",     // A etiqueta é 'nome', o conteúdo é 'William'
   idade:       33,            // A etiqueta é 'idade', o conteúdo é 33
   profissao:   "Estudante"    // A etiqueta é 'profissao', o conteúdo é 'Estudante'
};

*/
