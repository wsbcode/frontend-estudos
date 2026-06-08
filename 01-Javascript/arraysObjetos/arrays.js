// ARRAY

// ==========================================
// 1. Array de Strings (Lista de Textos)
// ==========================================
// Serve para guardar vários textos juntos em uma única variável.
// Usamos colchetes [ ] e separamos cada texto por vírgula.
let nomesDosAlunos = ["William", "Marcela", "Vitoria"];

// ==========================================
// 2. Array de Numbers (Lista de Números)
// ==========================================
// Serve para guardar uma sequência de números, sejam eles inteiros ou com ponto decimal.
let precosDosProdutos = [19.9, 5.0, 120.45, 33.0];

// ==========================================
// 3. Array de Booleans (Lista de Verdadeiro/Falso)
// ==========================================
// Guarda um histórico ou uma sequência de estados de verdadeiro ou falso.
let statusDasTarefas = [true, false, true, true]; // Ex: Concluída, Pendente, Concluída...

// ==========================================
// 4. Array Misto (Lista com vários tipos)
// ==========================================
// O JavaScript permite misturar tipos diferentes dentro do mesmo Array, embora no dia a dia seja mais comum usar o mesmo tipo.
let dadosDoUsuario = ["William", 33, true]; // Guarda o nome (String), idade (Number) e se está ativo (Boolean)

// =====================================================
// 1. Funções para Modificar a Lista (Adicionar/Remover)
// =====================================================

let numeros = [10, 20, 30];
let compras = ["Arroz", "Feijão"];

//.push() -> Adiciona no FINAL
compras.push("Macarrão");
// Resultado: ["Arroz", "Feijão", "Macarrão"]

//.pop() -> Remove o ULTIMO
compras.pop();
// Resultado: ["Arroz"] (o Feijão foi removido)

//.unshift() -> Adiciona no INÍCIO
compras.unshift("Café");
// Resultado: ["Café", "Arroz", "Feijão"]

//.shift() -> Remove o PRIMEIRO
compras.shift();
// Resultado: ["Feijão"] (o Arroz foi removido)

// ==============================================================
// 2. Funções para Percorrer e Transformar (As mais importantes!)
// ==============================================================

//.forEach() -> O "Ranger de Gavetas"
compras.forEach((item) => {
   console.log("Comprar: " + item);
});
//Ele apenas passa por cada item da lista e faz uma ação (como mostrar na tela). Não cria uma lista nova.

//.map() -> O "Transformador"
let dobrados = numeros.map((num) => num * 2);
// Resultado: [20, 40, 60]
//Ele passa por todos os itens, faz uma alteração e te devolve uma lista novinha do mesmo tamanho.

// ==============================================================
// 3. Funções de Busca e Filtragem
// ==============================================================

//.filter() -> O "Filtro de Segurança"
// Salva apenas os números que forem maiores que 15
let maioresQue15 = numeros.filter((num) => num > 15);
// Resultado: [20, 30]
//Olha item por item e cria uma nova lista apenas com os itens que passarem no seu teste.

//.find() -> O "Detetive"
// Busca o número exato 20
let achouNumero = numeros.find((num) => num === 20);
// Resultado: 20 (devolve o dado direto, não uma lista)
//Procura na lista e te devolve o primeiro item real que ele encontrar que bate com o que você pediu.

//.includes() -> O "Checador"
let temArroz = compras.includes("Arroz");
// Resultado: true
//Ele apenas te diz Sim ou Não (true ou false) se o item que você procura está ou não dentro da lista.

// ==============================================================
// Ordenação de array , colocando itens do array em ordem escolhida
// ==============================================================

// Criamos nossa lista de alunos (fora de ordem alfabética)
let alunos = [
   { nome: "Vitoria", idade: 17 },
   { nome: "William", idade: 33 },
   { nome: "Marcela", idade: 28 },
];

// Usamos o método .sort() para ordenar a lista ordenado pelo nome
// O (a, b) representam dois alunos que o JavaScript pega para comparar por vez
alunos.sort((a, b) => {
   // O método .localeCompare() serve para comparar textos de forma inteligente,
   // já resolvendo problemas com acentos (como Á, Ç, é...)
   return a.nome.localeCompare(b.nome);
});

// ORDEM CRESCENTE (Do menor para o maior) ordenando pela idade
alunos.sort((a, b) => {
   // Subtrai a idade do segundo pela do primeiro
   return a.idade - b.idade;
});

// Mostra o resultado final no terminal
console.log(alunos);
console.log(alunos);
