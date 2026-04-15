import { useReducer, useState } from "react";
import { listReducer } from "../reducer/listReducer";

export const Reducer = () => {
   // list: armazena os dados (o estado atual)
   // dispatch: função que usamos para "enviar" um pedido de alteração para o Reducer
   const [list, dispatch] = useReducer(listReducer, []);

   // Estado simples para controlar o que o usuário digita no campo de texto
   const [addField, setAddField] = useState("");

   // Função para adicionar um novo item
   const handleAddButton = () => {
      // Impede de adicionar se o campo estiver vazio ou só com espaços
      if (addField.trim() === "") return false;

      // Enviamos para o Reducer o tipo "add" e o texto que foi digitado
      dispatch({
         type: "add",
         payload: {
            text: addField.trim(),
         },
      });

      // Limpa o input depois de enviar o item
      setAddField("");
   };

   // Função para marcar/desmarcar a tarefa (o checkbox)
   const handleDoneCheckBox = (id: number) => {
      // Avisamos o Reducer que queremos alternar o status do item com esse ID
      dispatch({
         type: "toggleDone",
         payload: { id },
      });
   };

   // Função para editar o texto de um item existente
   const handleEdit = (id: number) => {
      // Primeiro, procuramos o item original na lista usando o ID
      const item = list.find((i) => i.id === id);
      if (!item) return;

      // Abre uma janelinha no navegador para digitar o novo nome
      const newText = window.prompt("Digite o novo texto", item.text);

      // Se o usuário cancelou ou deixou vazio, não faz nada
      if (!newText || newText.trim() === "") return false;

      // Envia a alteração para o Reducer com o novo texto
      dispatch({
         type: "editText",
         payload: { id: item.id, newText },
      });
   };

   // Função para remover um item
   const handleRemove = (id: number) => {
      // Pergunta se o usuário tem certeza (retorna verdadeiro ou falso)
      if (!window.confirm("Tem certeza que quer deletar?")) return;

      // Se ele confirmou, envia a ordem de remoção para o Reducer
      dispatch({
         type: "remove",
         payload: { id },
      });
   };

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-4xl text-green-500">Aplicando Reducer na lista</h1>

         <div className="max-w-2xl mx-auto flex rounded-md border border-gray-400 bg-gray-900 p-4 my-4">
            <input
               type="text"
               placeholder="Digite um item"
               className="flex-1 rounded-md border border-white p-3 bg-transparent text-white outline-none"
               // Conecta o valor do input ao nosso estado 'addField'
               value={addField}
               // Atualiza o estado toda vez que o usuário digita uma letra
               onChange={(e) => setAddField(e.target.value)}
            />
            <button
               className=" p-4 ml-2 bg-green-500 rounded-md cursor-pointer"
               onClick={handleAddButton}
            >
               ADICIONAR
            </button>
         </div>

         <ul className="max-w-2l mx-auto">
            {/* Percorre o array 'list' e transforma cada objeto em um elemento HTML */}
            {list.map((item) => (
               <li
                  className="text-white flex items-center p-3 my-3 border-b border-gray-500"
                  key={item.id} // O React precisa dessa chave única para saber qual item é qual
               >
                  <input
                     type="checkbox"
                     className="w-4 h-4 mr-4"
                     checked={item.done} // Define se está marcado ou não baseado no dado
                     onChange={() => handleDoneCheckBox(item.id)} // Dispara ao clicar no quadrado
                  />

                  {/* Exibe o texto da tarefa */}
                  <p className="flex-1 text-lg">{item.text}</p>

                  <button
                     onClick={() => handleEdit(item.id)}
                     className=" bg-green-500  rounded-md mx-4 text-white hover:text-gray-400"
                  >
                     Editar
                  </button>

                  <button
                     onClick={() => handleRemove(item.id)}
                     className=" bg-red-500  rounded-md mx-4 text-white hover:text-gray-400"
                  >
                     Excluir
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};
