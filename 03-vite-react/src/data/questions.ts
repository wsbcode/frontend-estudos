import type { Question } from "../types/Question";

// Base de perguntas usada pelo componente Quiz.
// Cada item segue o contrato definido no tipo Question.
export const questions: Question[] = [
   {
      // Enunciado da pergunta.
      question: "Qual maior time do Brasil?",
      // Lista de opcoes na ordem em que serao exibidas.
      options: ["Corinthians", "Palmeiras", "São Paulo", "Santos"],
      // Indice da opcao correta dentro de options (comeca em 0).
      answer: 1,
   },
   {
      question: "Quem é o maior artilheiro da história do futebol?",
      options: ["Pelé", "Romário", "Cristiano Ronaldo", "Lionel Messi"],
      answer: 0,
   },
   {
      question: "Qual país sediou a Copa do Mundo de 2014?",
      options: ["Brasil", "Rússia", "África do Sul", "Alemanha"],
      answer: 0,
   },
];
