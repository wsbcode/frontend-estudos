import type { Question } from "../types/Question";

type Props = {
   // Lista completa das perguntas do quiz.
   questions: Question[];
   // Lista das respostas escolhidas pelo usuario (indice da opcao).
   answers: number[];
};

export const Resultado = ({ questions, answers }: Props) => {
   // Conta quantas respostas do usuario batem com a resposta correta de cada pergunta.
   const totalCorretas = questions.filter((item, index) => item.answer === answers[index]).length;

   return (
      <div className="space-y-4">
         <div className="text-center">
            {/* Resumo geral do desempenho no quiz. */}
            <div className="text-xl font-semibold">Resultado Final</div>
            <div className="text-sm text-gray-600">
               Você acertou {totalCorretas} de {questions.length}
            </div>
         </div>

         <div className="space-y-3">
            {/* Lista de revisao: mostra cada pergunta com status de acerto/erro. */}
            {questions.map((item, key) => (
               <div key={key} className="rounded-md border border-gray-200 p-3">
                  <div className="mb-1 text-sm font-semibold">
                     {key + 1}. {item.question}
                  </div>
                  <div className="text-sm">
                     <span
                        className={`mr-2 rounded px-2 py-0.5 text-xs font-medium ${
                           item.answer === answers[key]
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                        }`}
                     >
                        {item.answer === answers[key] ? "Correto" : "Incorreto"}
                     </span>
                     {/* Exibe o texto da alternativa correta da pergunta. */}
                     {item.options[item.answer]}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
