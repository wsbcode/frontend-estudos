// Exportamos para que outros arquivos (como o Reducer ou Componentes)
// possam saber qual é o "formato" de um item da lista.
export type Item = {
   // O 'id' é o RG do item.
   // Ele serve para o React saber qual item é qual na hora de deletar ou editar.
   id: number;

   // O 'text' é o conteúdo da tarefa (ex: "Comprar pão").
   // Definimos como string porque é um texto.
   text: string;

   // O 'done' é o status da tarefa (Feito ou Não Feito).
   // Usamos boolean porque só aceita dois valores: true (sim) ou false (não).
   done: boolean;
};
