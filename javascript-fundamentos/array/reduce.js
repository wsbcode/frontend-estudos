// APRENDENDO SOBRE (reduce) EM ARRAYS
//

const produtos = [
   { nome: "Teclado Mecânico", preco: 200, temDesconto: true, quantidade: 5 },
   { nome: "Mouse Gamer", preco: 120, temDesconto: true, quantidade: 27 },
   { nome: "Monitor 144hz", preco: 900, temDesconto: false, quantidade: 12 },
   { nome: "Web Cam 1080p", preco: 1900, temDesconto: true, quantidade: 19 },
   { nome: "Hub USB Tipo C", preco: 250, temDesconto: false, quantidade: 9 },
];

// 1. Criamos uma variável para guardar o resultado final do cálculo.
// O método 'reduce' vai percorrer o array 'produtos'.
let valorGeral = produtos.reduce((acumulador, produto) => {
   // 2. Aqui acontece a mágica:
   // Pegamos o que já tínhamos (acumulador) e somamos com o subtotal do item atual (preço x quantidade).
   return acumulador + produto.preco * produto.quantidade;

   // 3. O '0' é o valor inicial do acumulador. Se o carrinho estiver vazio, o total começa em zero.
}, 0);

// 4. Exibe o resultado no console.
console.log(
   // 5. Transforma o número puro (ex: 1460) em uma String formatada como moeda brasileira (R$ 1.460,00).
   valorGeral.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
   })
);
