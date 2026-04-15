// APRENDENDO SOBRE (map()) em Arrays
//

// Criamos um array original de strings
let nomes = ["william", "marcos", "joão"];

// Criamos uma nova variável para receber o resultado do map
let transformandoNomes = nomes.map(function (item) {
   // Para cada 'item', o JavaScript executa o método toUpperCase()
   // O 'return' envia o nome transformado de volta para a nova lista
   return item.toUpperCase();
});

// Exibe o novo array: ["WILLIAM", "MARCOS", "JOÃO"]
console.log(transformandoNomes);

// EXEMPLO 2

// Criamos um array original de números
let idade = [10, 20, 30, 40, 50];

// Aqui usamos uma Arrow Function (forma mais moderna e curta)
let multiplicandoIdades = idade.map((item, Index) => {
   // O map percorre a lista e multiplica cada valor por 5
   // O valor 10 vira 50, o 20 vira 100, e assim por diante
   console.log(Index);
   return item * 5;
});

// Exibe o novo array: [50, 100, 150, 200, 250]
console.log(multiplicandoIdades);

// SIMULANDO DADOS DE UM AMBIENTE REAL
// 1. Simulando dados que vêm de uma API (Banco de Dados)
// 1. Criamos um Array de Objetos. Cada { } é um produto com suas propriedades.
const produtos = [
   { nome: "Teclado Mecânico", preco: 200, temDesconto: true, quantidade: 5 },
   { nome: "Mouse Gamer", preco: 120, temDesconto: true, quantidade: 27 },
   { nome: "Monitor 144hz", preco: 900, temDesconto: false, quantidade: 12 },
   { nome: "Web Cam 1080p", preco: 1900, temDesconto: true, quantidade: 19 },
   { nome: "Hub USB Tipo C", preco: 250, temDesconto: false, quantidade: 9 },
];

// 2. Criamos a variável 'listaComDesconto' para salvar o NOVO array gerado pelo .map()
let listaComDesconto = produtos.map((item) => {
   // Criamos uma variável constante dentro do map para decidir o preço:
   // Lógica: "Se item.temDesconto for true ? aplique 10% de desconto : senão mantenha o original"
   const precoComDesconto = item.temDesconto ? item.preco * 0.9 : item.preco;

   // O 'return' entrega um NOVO objeto para a lista nova
   return {
      nome: item.nome, // Chave 'nome' recebe o valor original do item
      preco: precoComDesconto.toLocaleString("pt-br", {
         style: "currency", // Define que o estilo da formatação será "moeda"
         currency: "BRL", // Define a moeda como Real Brasileiro (R$)
      }), // Chave 'preco' recebe o valor calculado acima (com ou sem desconto)
      quantidade: item.quantidade, // Chave 'quantidade' recebe o valor original
   };
});

// 3. Imprime no console a lista nova, toda formatada e com os preços corrigidos.
console.log("Produtos com Desconto:");
console.log(listaComDesconto);
