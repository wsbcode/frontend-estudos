import { useState } from "react";
import { questions } from "../data/questions";
import { QuizItem } from "./QuizItem";
import { Resultado } from "./Resultado";

export const Quiz = () => {
   // Guarda o indice da resposta marcada em cada pergunta, na ordem em que o usuario respondeu.
   const [answers, setAnswers] = useState<number[]>([]);
   // Controla qual pergunta do array esta sendo exibida agora.
   const [currentQuestion, setCurrentQuestion] = useState(0);
   // Alterna entre tela de perguntas e tela de resultado final.
   const [showResult, setShowResult] = useState(false);
   // Titulo exibido no topo do card do quiz.
   const title = "Quiz de Futebol";

   // Recebe a resposta do componente filho e avanca o fluxo do quiz.
   const handleAnswered = (answer: number) => {
      // Registra a resposta escolhida, seja ela correta ou incorreta.
      setAnswers([...answers, answer]);

      // Se ainda houver perguntas, avanca para a proxima.
      if (currentQuestion < questions.length - 1) {
         setCurrentQuestion(currentQuestion + 1);
      } else {
         // Quando chega na ultima pergunta, abre a tela de resultado.
         setShowResult(true);
      }
   };

   // Reinicia todo o estado para permitir jogar novamente.
   const handleRestart = () => {
      setCurrentQuestion(0);
      setShowResult(false);
      setAnswers([]);
   };

   return (
      <div className="w-full h-screen flex justify-center items-center">
         <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
            <div className="p-5 font-bold text-2xl shadow-gray-300">{title}</div>
            <div className="p-5 border-t border-gray-300">
               {/* Enquanto showResult for falso, exibe a pergunta atual. */}
               {!showResult && (
                  <QuizItem
                     question={questions[currentQuestion]}
                     count={currentQuestion + 1}
                     onAnswer={handleAnswered}
                  />
               )}
               {/* Quando showResult for verdadeiro, exibe o resumo final. */}
               {showResult && <Resultado questions={questions} answers={answers} />}
            </div>
            <div className="p-5 text-center border-t border-gray-300">
               {/* Rodape com progresso durante o quiz. */}
               {!showResult &&
                  `${currentQuestion + 1} de ${questions.length} Pergunta${questions.length === 1 ? "" : "s"}`}
               {/* Botao para reiniciar somente apos o resultado. */}
               {showResult && (
                  <button
                     onClick={handleRestart}
                     className="px-5 py-2 rounded-md bg-blue-800 text-white"
                  >
                     Reiniciar Quiz
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};
