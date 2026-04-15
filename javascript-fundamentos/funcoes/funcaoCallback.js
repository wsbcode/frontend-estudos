// APRENDENDO FUNÇÕES (CallBack).
//
// 1. Aqui você define uma função que será usada MAIS TARDE.
// Ela é o nosso "recado" ou "instrução".
function AguardandoChamar() {
   // 2. O que acontecerá quando este "recado" for lido.
   console.log("CallBack Chamado!");
}

// 3. Uma variável de controle (simulando, por exemplo, um login de usuário).
let user = true;

// 4. Esta é a função PRINCIPAL.
// Note que ela recebe um parâmetro chamado 'Callback' (poderia ser qualquer nome).
function ChamandoCallBack(Callback) {
   // 5. Uma condição: a função só vai agir se o 'user' for verdadeiro.
   if (user === true) {
      // 6. AQUI ESTÁ O PONTO CHAVE:
      // Você está executando a função que recebeu lá no parêntese da linha 4.
      Callback();
   } else {
      // 7. Caso a condição seja falsa, ela apenas avisa no terminal.
      console.log("Callback sem retorno");
   }
}

// 8. A EXECUÇÃO (O "Play"):
// Aqui você chama a função principal e "entrega" a função AguardandoChamar para ela.
// IMPORTANTE: Não usamos () em AguardandoChamar aqui para não executá-la antes da hora.
ChamandoCallBack(AguardandoChamar);

// EXEMPLO 2 DE CALL BACK
//
// 1. Define a função que faz o cálculo. Ela será o nosso "trabalhador".
function aguardando() {
   // 2. Cria a primeira variável local com valor 10.
   let n1 = 10;
   // 3. Cria a segunda variável local com valor 5.
   let n2 = 5;
   // 4. Soma os dois e "entrega" (return) o valor para quem chamou a função.
   // Nota: (resultado = n1 + n2) cria uma variável global; o ideal seria apenas 'n1 + n2'.
   return n1 + n2;
}

// 5. Aqui você cria uma referência: 'resultadoFinal' agora é um "atalho" para a função 'aguardando'.
// Importante: você não executou a função aqui, apenas guardou o nome dela.
let resultadoFinal = aguardando;

// 6. Define a função principal que gerencia o fluxo.
// Ela espera receber UMA FUNÇÃO como parâmetro (chamada aqui de 'CallBack').
function projetandoCallback(CallBack) {
   // 7. A MÁGICA: Aqui o código EXECUTA a função que recebeu e
   // guarda o que ela "retornou" (o número 15) dentro da variável 'resultado'.
   let resultado = CallBack();

   // 8. Usa uma Template String (crases ``) para exibir o valor final no terminal.
   console.log(`O resultado é ${resultado}`);
}

// 9. O COMANDO DE EXECUÇÃO: Você chama a 'projetandoCallback'
// e envia a função 'aguardando' lá para dentro como se fosse um pacote.
projetandoCallback(aguardando);
