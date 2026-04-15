// Arrays em States: Exibir

import { useState } from "react";
import type { Array } from "../types/Array";
export const ArrayStates = () => {
   // // Guarda o texto que o usuário está digitando no input no momento
   const [itemInput, setItemInput] = useState("");

   // // Guarda a lista de tarefas. Começa com dois itens de exemplo.
   // // O tipo <Array[]> indica que é uma lista de objetos.
   const [lista, setLista] = useState<Array[]>([
      { label: "Primeira Tarefa", check: false },
      { label: "Segunda Tarefa", check: false },
      { label: "Terceira Tarefa", check: false },
   ]);

   // // Função para adicionar uma nova tarefa à lista
   const adicionarTarefa = () => {
      // // Verifica se o input está vazio ou tem apenas espaços.
      // // Se estiver vazio, exibe alerta e o 'return' para a execução aqui.
      if (!itemInput.trim()) {
         alert("Adicione uma tarefa");
         return;
      }

      // // Cria uma nova lista: copia a 'lista' atual (...lista) e adiciona o novo objeto.
      setLista([...lista, { label: itemInput, check: false }]);

      // // Limpa o campo de entrada para o usuário digitar a próxima tarefa.
      setItemInput("");
   };

   // // Função para remover um item da lista usando a posição (index) dele
   const deleteItem = (index: number) => {
      // // O 'filter' cria uma lista nova contendo apenas os itens que
      // // NÃO possuem o índice que queremos deletar.
      setLista(lista.filter((_, key) => key !== index));
   };

   const checkBox = (index: number) => {
      const novaLista = [...lista];
      novaLista[index].check = !novaLista[index].check;

      setLista(novaLista);
   };

   return (
      <div className="w-screen h-screen flex flex-col items-center text-2xl">
         <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

         <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-blue-400 border-2 border-blue-100">
            {/* // Input controlado: o 'value' mostra o estado e 'onChange' o atualiza */}
            <input
               type="text"
               placeholder="O que deseja fazer?"
               value={itemInput}
               onChange={(e) => setItemInput(e.target.value)}
               className="flex-1 border border-blue-100 text-black"
            />
            {/* // Dispara a função de adicionar ao clicar */}
            <button onClick={adicionarTarefa} className="bg-blue-500 rounded-md ml-2">
               Adicionar
            </button>
         </div>

         {/* // Mostra a quantidade total de itens dinamicamente usando .length */}
         <p className="p-4">{lista.length} - Itens adicionados</p>

         <ul className="w-full max-w-lg list-disc pl-5">
            {/* // O 'map' percorre a lista e transforma cada objeto em um elemento <li> na tela */}
            {lista.map((item, index) => (
               <li key={index}>
                  {/* // Mostra o texto da tarefa */}
                  <input
                     onClick={() => checkBox(index)}
                     type="checkbox"
                     checked={item.check}
                     className="w-6 h-6 mr-3"
                  />
                  {item.label} {" - "}
                  {/* // Botão de deletar: passa o índice atual para a função deleteItem */}
                  <button onClick={() => deleteItem(index)} className="hover:underline">
                     [Delete]
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};
