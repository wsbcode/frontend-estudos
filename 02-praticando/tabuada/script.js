// ============================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ============================================

// Input onde o usuário digita o número para gerar a tabuada
let input = document.querySelector("#input");

// Botão que dispara a geração da tabuada
let button = document.querySelector("#button");

// Div onde o resultado da tabuada será exibido
let exibir = document.querySelector("#exibir");

// Elementos da tela de verificação de idade
let idadeInput = document.querySelector("#idade-input");     // Campo para digitar a idade
let idadeBtn = document.querySelector("#idade-btn");         // Botão para verificar a idade
let idadeMensagem = document.querySelector("#idade-mensagem"); // Texto que mostra se acesso foi liberdo ou negado
let idadeContainer = document.querySelector("#idade-container"); // Container da tela de verificação de idade
let appContainer = document.querySelector("#app-container");   // Container principal da aplicação (tabuada)

// ============================================
// EVENTO DE VERIFICAÇÃO DE IDADE
// ============================================

// Quando o botão de idade é clicado, chama a função verificarIdade
idadeBtn.addEventListener("click", verificarIdade);

/**
 * Função que verifica se o usuário tem idade para acessar a aplicação
 * Regras:
 * - Idade vazia → Mensagem de erro
 * - Idade inválida (negativa ou não numérica) → Mensagem de erro
 * - Idade >= 18 → Acesso negado (somente menores de 18)
 * - Idade < 18 → Acesso liberado e mostra a tabuada
 */
function verificarIdade() {
   // Converte o valor do input para número
   let idade = Number(idadeInput.value);

   // ============================================
   // VALIDAÇÃO: CAMPO VAZIO
   // ============================================
   // Verifica se o campo está vazio
   if (idadeInput.value === "") {
      // Exibe mensagem de erro na cor vermelha
      idadeMensagem.textContent = "Digite sua idade";
      idadeMensagem.className = "negado";
      // Interrompe a função para não prosseguir
      return;
   }

   // ============================================
   // VALIDAÇÃO: IDADE INVÁLIDA
   // ============================================
   // Verifica se o valor não é um número ou é negativo
   if (isNaN(idade) || idade < 0) {
      // Exibe mensagem de erro na cor vermelha
      idadeMensagem.textContent = "Idade inválida";
      idadeMensagem.className = "negado";
      // Interrompe a função para não prosseguir
      return;
   }

   // ============================================
   // VERIFICAÇÃO: MAIORES DE 18 ANOS (BLOQUEIO)
   // ============================================
   // Se a idade for 18 ou mais, nega o acesso
   if (idade >= 18) {
      // Exibe mensagem de acesso negado na cor vermelha
      idadeMensagem.textContent = "Acesso negado! Apenas menores de 18 anos.";
      idadeMensagem.className = "negado";
      // Limpa o campo de idade para nova tentativa
      idadeInput.value = "";
   } else {
      // ============================================
      // LIBERAÇÃO: MENORES DE 18 ANOS
      // ============================================
      // Se a idade for menor que 18, libera o acesso

      // Exibe mensagem de acesso liberado na cor verde
      idadeMensagem.textContent = "Acesso liberado!";
      idadeMensagem.className = "aprovado";

      // Após 1 segundo, esconde a tela de verificação e mostra a aplicação
      setTimeout(() => {
         // Adiciona a classe CSS "oculto" para esconder o modal de idade
         idadeContainer.classList.add("oculto");
         // Remove a classe CSS "oculto" para mostrar a aplicação
         appContainer.classList.remove("oculto");
      }, 1000); // 1000 milissegundos = 1 segundo
   }
}

// ============================================
// EVENTO DE GERAÇÃO DA TABUADA
// ============================================

// Quando o botão "Tabuada" é clicado, chama a função tabuada
button.addEventListener("click", tabuada);

/**
 * Função que gera e exibe a tabuada do número digitado
 * Calcula a multiplicação do número por 1 até 10
 */
function tabuada() {
   // ============================================
   // CAPTURA DO VALOR DE ENTRADA
   // ============================================
   // Pega o valor digitado pelo usuário (sempre vem como string)
   let valorInput = input.value;

   // Converte o valor de string para número
   let numero = Number(valorInput);

   // ============================================
   // VALIDAÇÃO: CAMPO VAZIO
   // ============================================
   // Verifica se o usuário não digitou nada
   if (valorInput === "") {
      // Exibe mensagem de erro na área de resultado
      exibir.innerHTML = "Digite um numero";
      // Interrompe a função para não prosseguir
      return;
   }

   // ============================================
   // VALIDAÇÃO: VALOR NÃO NUMÉRICO
   // ============================================
   // Verifica se o valor digitado não é um número válido
   if (isNaN(numero)) {
      // Exibe mensagem de erro na área de resultado
      exibir.innerHTML = "Digite apenas números";
      // Interrompe a função para não prosseguir
      return;
   }

   // ============================================
   // GERAÇÃO DA TABUADA
   // ============================================
   // Variável que vai armazenar todas as linhas da tabuada
   let resultado = "";

   // Loop que percorre de 1 até 10 para gerar as 10 linhas da tabuada
   for (let i = 1; i <= 10; i++) {
      // Concatena cada linha da tabuada no formato: "5 X 1 = 5"
      // A cada repetição, adiciona uma nova linha à variável resultado
      resultado += `${numero} X ${i} = ${numero * i} <br>`;
   }

   // ============================================
   // EXIBIÇÃO DO RESULTADO
   // ============================================
   // Insere todo o conteúdo da tabuada na área de resultado
   exibir.innerHTML = resultado;
}
