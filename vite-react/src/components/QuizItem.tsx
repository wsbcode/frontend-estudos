import { useState } from "react";
import type { Question } from "../types/Question";

// Contrato das props recebidas pelo item do quiz.
type Props = {
   // Pergunta atual com enunciado, opcoes e resposta correta.
   question: Question;
   // Numero da pergunta exibida para o usuario.
   count: number;
   // Callback para informar ao pai qual opcao foi marcada.
   onAnswer: (answer: number) => void;
};

export const QuizItem = ({ question, onAnswer, count }: Props) => {
   // Armazena a opcao clicada para bloquear nova tentativa e colorir feedback.
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

   // Processa o clique de uma opcao usando o indice dela.
   const checkQuestion = (key: number) => {
      // Permite responder apenas uma vez por pergunta.
      if (selectedAnswer === null) {
         // Salva a opcao marcada para aplicar feedback visual (correta/incorreta).
         setSelectedAnswer(key);

         // Espera 1 segundo para o usuario ver o feedback antes de trocar de pergunta.
         setTimeout(() => {
            // Envia a resposta ao componente pai, que controla o progresso do quiz.
            onAnswer(key);
            // Limpa o estado local para a proxima pergunta.
            setSelectedAnswer(null);
         }, 1000);
      }
   };

   return (
      <div>
         {/* Enunciado da pergunta atual. */}
         <div className=" text-3xl font-bold mb-5">
            {count}.{question.question}
         </div>
         <div>
            {/* Lista de opcoes da pergunta. */}
            {question.options.map((item, key) => (
               <div
                  key={key}
                  onClick={() => checkQuestion(key)}
                  // Regra visual:
                  // 1) Antes de responder: hover e clique ativos.
                  // 2) Opcao marcada: destaque.
                  // 3) Resposta correta: sempre destacada apos resposta.
                  // 4) Resposta incorreta marcada: destaque de erro.
                  // Classes condicionais apenas para estado visual da opcao.
                  className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 
                    
                    ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:bg-blue-200"}
                    ${selectedAnswer === key ? "bg-green-300 border-green-500" : ""}
                    ${selectedAnswer !== null && key === question.answer ? "bg-green-300 border-green-500" : ""}
                    ${selectedAnswer !== null && key !== question.answer && selectedAnswer === key ? "bg-red-300 border-red-500" : ""}
                    
                    
                    `}
               >
                  {item}
               </div>
            ))}
         </div>
      </div>
   );
};
