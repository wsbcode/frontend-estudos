//APRENDENDO (find)
//
const produtos = [
   { nome: "Teclado Mecânico", preco: 200, temDesconto: true, quantidade: 5 },
   { nome: "Mouse Gamer", preco: 120, temDesconto: true, quantidade: 27 },
   { nome: "Monitor 144hz", preco: 900, temDesconto: false, quantidade: 12 },
   { nome: "Web Cam 1080p", preco: 1900, temDesconto: true, quantidade: 19 },
   { nome: "Hub USB Tipo C", preco: 250, temDesconto: false, quantidade: 9 },
];

// 1. O 'find' procura o PRIMEIRO item que seja exatamente igual a "Monitor 144hz".
// Ele retorna o objeto inteiro se encontrar, ou 'undefined' se não encontrar.
let procurando = produtos.find((item) => item.nome === "Monitor 144hz");
console.log(procurando);

// 2. Corrigindo o erro: de 'startsWitch' para 'startsWith' (com 'S' e 'th').
// O 'find' vai percorrer a lista e parar no PRIMEIRO que começar com "M".
let buscar = produtos.find((item) => item.nome.startsWith("M"));

// 3. Importante: Como é um 'find', ele vai trazer apenas o "Mouse Gamer".
// Ele ignora o "Monitor" porque o Mouse veio antes na lista.
console.log(buscar);
