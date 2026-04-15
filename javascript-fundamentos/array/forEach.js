// LAÇO DE REPETIÇÃO COM (forEach) MAIS UTILIZADO PARA PERCORRER Arrays de Objetos.

// 1. Criamos um ARRAY de OBJETOS. Cada objeto é uma "ficha" de usuário.
let users = [
   { id: 1, name: "William", age: 33, status: "Ativo" },
   { id: 2, name: "Julia", age: 23, status: "Inativo" },
   { id: 3, name: "Rosângela", age: 43, status: "Ativo" },
   { id: 4, name: "Leticia", age: 14, status: "Inativo" },
];

// 2. Chamamos o forEach. Ele vai rodar a função abaixo 4 vezes (uma para cada usuário).
// 'item'  -> Representa o objeto da vez (ex: a ficha do William).
// 'index' -> Representa o número da posição no array (0, 1, 2, 3).
users.forEach((item, index) => {
   // 3. Acessamos a propriedade 'age' de dentro do 'item' (objeto atual).
   if (item.age < 18) {
      // 4. Se a idade for menor que 18, usamos Template Strings (``) para exibir os dados.
      // item.name   -> pega o nome dentro do objeto atual.
      // item.status -> pega o status dentro do objeto atual.
      // index       -> mostra em qual "gaveta" do array estamos.
      console.log(`O Usuário ${item.name} é menor de idade e esta ${item.status} Posição ${index}`);
   } else {
      // 5. Caso a idade seja 18 ou mais, cai aqui.
      console.log(`O Usuário ${item.name} é maior de idade e esta ${item.status} Posição ${index}`);
   }
});
