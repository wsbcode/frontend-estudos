// LOOPS EM OBJETOS

// =================================================
// 1. loop simples em um objeto com ( for in )
// =================================================

// Criamos um objeto (ficha) com os dados de um aluno
let aluno = {
   nome: "William",
   idade: 33,
   curso: "ADS",
};

// Lemos assim: "Para cada 'chave' DENTRO (in) do objeto 'aluno'..."
// A variável 'chave' vai valer "nome", depois "idade", depois "curso"
for (let chave in aluno) {
   // 1. Mostra o nome da propriedade (ex: nome, idade...)
   // 2. aluno[chave] pega o VALOR que está guardado ali dentro (ex: William, 33...)
   console.log(`Propriedade: ${chave} | Valor: ${aluno[chave]}`);
   // 3. Pegando valor especifico de dentro do objeto
   console.log(aluno.curso);
}
