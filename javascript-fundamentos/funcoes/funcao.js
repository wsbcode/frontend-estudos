// APRENDENDO SOBRE (function)
//
// 1. DECLARAÇÃO: Aqui você está criando a "fábrica" e dando um nome a ela.
// 'numero1' e 'numero2' são os buracos (parâmetros) onde os dados vão entrar.
function somar(numero1, numero2) {
   // 2. PROCESSAMENTO + SAÍDA:
   // O 'return' é o braço da máquina que joga o resultado para fora.
   // Sem o 'return', a função faz a conta mas "esquece" de te entregar.
   console.log(numero1 + numero2);
} // As chaves { } são as paredes da fábrica. O que acontece aqui dentro, fica aqui dentro.

// 3. EXECUÇÃO (CHAMADA):
// somar(10, 20) -> Aqui você aperta o botão 'Ligar'.
// O 10 viaja até o 'numero1' e o 20 viaja até o 'numero2'.
// O console.log apenas mostra o que a máquina "cuspiu" no painel.
console.log("Resultado", (10, 20));
console.log("Resultado", (13, 23));

//
//-----------------------------------------------------------------------------------------------------------//
//

// FUNÇÃO COM RETORNO (return)

// 1. DEFINIÇÃO (A FÁBRICA):
// Aqui criamos a função. Ela é como uma forma que espera dois dados.
function nome(primeiroNome, sobreNome) {
   // 2. O MOMENTO DO "ENTREGA" (RETURN):
   // IMPORTANTE: O que vem depois da palavra 'return' é o "produto final".
   // Aqui o return está montando uma frase inteira e dizendo:
   // "Quem me chamou, vai receber este texto de presente".
   return `O nome do usuário: ${primeiroNome} ${sobreNome}`;
}

// 3. A CAPTURA (ARMAZENAMENTO):
// Esta linha é onde a mágica do 'return' acontece.
// 'nome("William", "Barbosa")' é executado e o return "cospe" a frase pronta.
// O sinal de '=' pega essa frase que saiu e guarda dentro de 'nomeCompleto'.
let nomeCompleto = nome("William", "Barbosa");

// 4. O USO DO VALOR:
// Agora que o valor "fugiu" de dentro da função (graças ao return)
// e está salvo na variável, podemos usá-lo para qualquer coisa.
console.log(nomeCompleto);

//
//-----------------------------------------------------------------------------------------------------------//
//

// 1. DEFINIÇÃO E ENTRADA:
// Criamos a função 'parImpar' que espera receber UM dado (o parâmetro 'numero').
function parImpar(numero) {
   // 2. A LÓGICA DA CONDIÇÃO (O "SE"):
   // Aqui usamos o operador de resto (%).
   // Tradução: "Se o resto da divisão de 'numero' por 2 for exatamente igual a 0..."
   if (numero % 2 === 0) {
      // 3. RETORNO CONDICIONAL A:
      // Se a conta deu 0, a função para aqui e ejeta esta frase.
      // O return encerra a função imediatamente.
      return `O Numero ${numero} é PAR`;
   } else {
      // 4. RETORNO CONDICIONAL B:
      // Se a conta NÃO deu 0, a função pula para cá e ejeta esta outra frase.
      return `O Numero ${numero} é IMPAR`;
   }
}

// 5. CHAMADA E ARMAZENAMENTO:
// Chamamos a função passando o argumento '1'.
// O return envia a frase "O Numero 1 é IMPAR" para dentro da variável 'resultado'.
let resultado = parImpar(1);

// 6. EXIBIÇÃO:
console.log(resultado); // Imprime o que foi guardado.

// EXEMPLO 2 DE RETORNO  CONDICIONAL

// 1. DEFINIÇÃO E ENTRADA:
// A função 'idade' recebe um número (parâmetro) para testar.
function idade(idade) {
   // 2. A CONDIÇÃO (O TESTE LÓGICO):
   // Tradução: "Se a idade for Maior ou Igual (>=) a 18..."
   if (idade >= 18) {
      // 3. RETORNO POSITIVO:
      // Se o teste acima for verdade, a função "ejecta" o valor 'true'.
      // Aqui, o return entrega um dado do tipo Boolean.
      return true;
   } else {
      // 4. RETORNO NEGATIVO:
      // Se a idade for menor que 18, o código pula para o else.
      // O return entrega o valor 'false'.
      return false;
   }
}

// 5. CHAMADA E CAPTURA:
// Chamamos a função passando o número 18.
// O return entrega 'true', que é guardado na variável 'verificandoIdade'.
let verificandoIdade = idade(18);

// 6. EXIBIÇÃO:
console.log(verificandoIdade); // Saída: true
