// TYPES EM ARRAY S E OBJETOS

// Criando type (Produto)
type Produto = {
   nome: string;
   preco: number;
   emEstoque: boolean;
};

// Usando type (Produto)
let produto: Produto = {
   nome: "Mouse",
   preco: 300,
   emEstoque: true,
};
console.log(produto);

//EXEMPLO EM ARRAY

type ListaProdutos = Produto[];

let product: ListaProdutos = [
   { nome: "Mouse", preco: 300, emEstoque: true },
   { nome: "Teclado", preco: 500, emEstoque: false },
];
console.log(product);
