// APRENDENDO SOBRE (filter)
//

const produtos = [
   { nome: "Teclado Mecânico", preco: 200, temDesconto: true, quantidade: 5 },
   { nome: "Mouse Gamer", preco: 120, temDesconto: true, quantidade: 27 },
   { nome: "Monitor 144hz", preco: 900, temDesconto: false, quantidade: 12 },
   { nome: "Web Cam 1080p", preco: 1900, temDesconto: true, quantidade: 19 },
   { nome: "Hub USB Tipo C", preco: 250, temDesconto: false, quantidade: 9 },
];

// O filter olha para 'item.temDesconto'.
// Se o valor for 'true', o item passa na peneira.
let produtosDesconto = produtos.filter((item) => item.temDesconto);
console.log(produtosDesconto);

// O '!' (operador NOT) inverte o valor para o filtro.
let produtosSemDesconto = produtos.filter((item) => !item.temDesconto);
console.log(produtosSemDesconto);
