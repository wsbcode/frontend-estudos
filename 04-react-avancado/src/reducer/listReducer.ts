import type { Item } from "../types/item";

// --- DEFINIÇÃO DAS AÇÕES (O que pode acontecer no app) ---

type AddAction = {
   type: "add"; // Rótulo da ação
   payload: { text: string }; // O dado necessário para adicionar (o texto)
};

type EditTextAction = {
   type: "editText";
   payload: { id: number; newText: string }; // Precisa do ID do item e do NOVO texto
};

type ToggleDoneAction = {
   type: "toggleDone";
   payload: { id: number }; // Precisa apenas do ID para marcar como feito/não feito
};

type RemoveAction = {
   type: "remove";
   payload: { id: number }; // Precisa do ID para saber qual deletar
};

// Criamos um "pacote" com todas as ações possíveis para o TypeScript nos ajudar
type ListAction = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

// --- A FUNÇÃO REDUCER (O cérebro) ---

export const listReducer = (list: Item[], action: ListAction) => {
   // O switch olha para o 'type' da ordem que você enviou
   switch (action.type) {
      case "add":
         // Retorna uma NOVA lista com tudo que já tinha (...list) + o novo item
         return [
            ...list,
            {
               id: list.length, // Usa o tamanho da lista como ID (simples para estudos)
               text: action.payload.text,
               done: false, // Todo item novo começa como "não feito"
            },
         ];

      case "editText":
         // O .map percorre a lista para encontrar o item certo
         return list.map((item) => {
            if (item.id === action.payload.id) {
               // ✅ Jeito mais seguro (Imutabilidade):
               // Criamos um novo objeto com o texto atualizado
               return { ...item, text: action.payload.newText };
            }
            return item; // Se não for o ID que queremos, retorna o item sem mexer
         });

      case "toggleDone":
         return list.map((item) => {
            if (item.id === action.payload.id) {
               // Inverte o valor de 'done' (se era true vira false, e vice-versa)
               return { ...item, done: !item.done };
            }
            return item;
         });

      case "remove":
         // O .filter cria uma nova lista APENAS com os itens
         // que têm o ID DIFERENTE do que queremos remover
         return list.filter((item) => item.id !== action.payload.id);

      default:
         // Se cair aqui (ordem desconhecida), retorna a lista do jeito que está
         return list;
   }
};
