//CONDICIONAIS
//
// ==========================================
// 1. EXEMPLO COM IF / ELSE (Se / Senão)
// ==========================================

// Criamos uma variável com a nota de um aluno
let notaDoAluno = 8;

// O 'if' testa uma condição. Se for verdadeira, roda o primeiro bloco.
if (notaDoAluno >= 7) {
   // Esse código só roda se a nota for maior ou igual a 7
   console.log("Parabéns! Você foi aprovado.");
} else {
   // O 'else' é o plano B. Só roda se a condição do 'if' for falsa (nota menor que 7)
   console.log("Ops, você ficou de recuperação.");
}

// EX 2

// ==========================================
// 1. Definição da Função
// ==========================================
// Criamos uma função que recebe uma "idade" como parâmetro (entrada)
function maiorDeIdade(idade) {
   // O 'if' testa se a idade recebida é maior ou igual a 18
   if (idade >= 18) {
      return true; // Se for maior ou igual a 18, devolve (retorna) verdadeiro
   } else {
      return false; // Se não for, devolve (retorna) falso
   }
}

// ==========================================
// 2. Uso da Função e Armazenamento
// ==========================================
// Criamos uma variável com o valor 33
let idade = 33;

// Chamamos a função passando o número 33. O resultado dela (true)
// vai ser guardado direto dentro da variável 'verificandoIdade'
let verificandoIdade = maiorDeIdade(idade);

// ==========================================
// 3. Tomada de Decisão com o Resultado
// ==========================================
// O 'if' verifica o que está guardado em 'verificandoIdade' (que é true)
if (verificandoIdade) {
   // Como é verdadeiro (true), o JavaScript executa esta linha:
   console.log(`Idade: ${idade} , voce de maior`);
} else {
   // Se o resultado fosse falso (false), executaria esta linha:
   console.log(`Idade:${idade} , voce é de menor`);
}
// ==========================================
// 2. EXEMPLO COM SWITCH (Escolha um caso)
// ==========================================

// O switch é ótimo para quando temos várias opções exatas para testar
let corDoSemaforo = "verde";

// O switch vai olhar o que está dentro da variável 'corDoSemaforo'
switch (corDoSemaforo) {
   case "verde":
      // Se a cor for "verde", roda o código abaixo
      console.log("Pode passar!");
      break; // O 'break' serve para parar e não testar os próximos casos

   case "amarelo":
      // Se a cor for "amarelo", roda o código abaixo
      console.log("Atenção, diminua a velocidade!");
      break;

   case "vermelho":
      // Se a cor for "vermelho", roda o código abaixo
      console.log("Pare o veículo imediatamente!");
      break;

   default:
      // O 'default' é o padrão. Só roda se a cor não for nenhuma das opções acima
      console.log("Cor inválida no semáforo.");
      break;
}

// ==========================================
// 3. Condicional Ternário (PERGUNTA ? seSim : seNao;)
// ==========================================

// verifica se o usuário está logado
let logado = true;

// se logado for true -> "Bem-vindo"
// se logado for false -> "Faça login"
let mensagem = logado ? "Bem-vindo" : "Faça login";

// exibe mensagem
console.log(mensagem);
