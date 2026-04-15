// APRENDENDO SOBRE ARROW FUNCTION
//

// 1. A ESTRUTURA:
// 'const nome' -> Guardamos a função em uma constante.
// '(nome, SobreNome)' -> Os parâmetros (entradas).
// '=>' -> A flecha que substitui a palavra 'function'.
const nome = (nome, sobreNome) => {
   // 2. O CORPO:
   // Como usamos chaves { }, o 'return' é OBRIGATÓRIO.
   return `${nome} ${sobreNome}`;
};

let nomeCompleto = nome("William", "Barbosa");
console.log(nomeCompleto); // Saída: 40

// 1. O ATALHO:
// Como só existe uma linha de código, podemos tirar as chaves e o 'return'.
// O JavaScript entende que o que vem depois da flecha deve ser "ejetado" automaticamente.
const dobrar = (n) => n * 2;

console.log(dobrar(10)); // Saída: 20
