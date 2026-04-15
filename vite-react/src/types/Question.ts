export type Question = {
   // Texto principal da pergunta.
   question: string;
   // Alternativas disponiveis para o usuario escolher.
   options: string[];
   // Posicao (indice) da alternativa correta no array options.
   answer: number;
};
