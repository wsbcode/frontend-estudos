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
