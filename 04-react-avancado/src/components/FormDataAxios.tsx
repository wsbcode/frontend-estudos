// Importa o axios para fazer requisições e o useRef para acessar elementos do HTML
import axios from "axios";
import { useRef } from "react";

export const FormDataAxios = () => {
   // Cria uma "referência" para o campo de input.
   // Isso permite que o código JavaScript "enxergue" o que está dentro do input de arquivo.
   const inputFile = useRef<HTMLInputElement>(null);

   // Função que será executada quando o usuário clicar no botão "Enviar"
   const handleSendFile = async () => {
      // Verifica se existe um arquivo selecionado no input
      if (inputFile.current?.files && inputFile.current.files.length > 0) {
         // Pega o primeiro arquivo da lista (mesmo que seja só um, ele vem em uma lista)
         const file = inputFile.current.files[0];

         // Cria um objeto FormData, que funciona como um "envelope" para enviar arquivos e textos
         const data = new FormData();

         // Adiciona informações ao "envelope" (chave, valor)
         data.append("name", "William"); // Enviando um nome de exemplo
         data.append("file", file); // Enviando o arquivo propriamente dito

         // Faz a postagem para o servidor (uma URL de teste aqui) enviando o nosso "envelope" data
         const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);

         // Mostra no console a resposta que o servidor devolveu
         console.log(response.data);
      }
   };

   return (
      <div>
         <h1 className="text-4xl text-blue-600">Introdução biblioteca Axios</h1>
         <h2 className="text-2xl text-white">Envio de arquivos (FormData) com Axios</h2>

         <div>
            {/* O atributo 'ref' liga este input físico à nossa variável 'inputFile' lá de cima */}
            <input type="file" ref={inputFile} className="cursor-pointer" />

            <button
               className=" bg-green-500 rounded-md mx-4 text-white hover:text-gray-400 cursor-pointer p-2"
               onClick={handleSendFile} // Chama a função ao clicar
            >
               Enviar
            </button>
         </div>
      </div>
   );
};
