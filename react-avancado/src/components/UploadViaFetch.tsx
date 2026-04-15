import { useRef, useState } from "react";

export const UploadViaFetch = () => {
   // Cria um estado para guardar o texto da legenda que o usuário digita
   const [legendInput, setLegendInput] = useState("");

   // O useRef funciona como uma "âncora" para o campo de arquivo (input file).
   // Como o valor de um arquivo não é um texto simples, usamos o ref para acessar o elemento HTML diretamente.
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleFileSend = async () => {
      // Verifica se existe o input e se o usuário realmente selecionou pelo menos 1 arquivo
      if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
         // Pega o primeiro arquivo da lista (mesmo que seja só um, ele vem em uma lista)
         const fileItem = fileInputRef.current.files[0];

         // Lista de formatos que vamos aceitar
         const allowed = ["image/jpg", "image/jpeg", "image/png"];

         // Se o tipo do arquivo estiver na nossa lista de permitidos, prosseguimos
         if (allowed.includes(fileItem.type)) {
            // O FormData é como um "envelope". Usamos ele para enviar arquivos e textos juntos para o servidor.
            const data = new FormData();
            data.append("image", fileItem); // Coloca a imagem no envelope
            data.append("legend", legendInput); // Coloca o texto da legenda no envelope

            // Faz a requisição para o servidor (aqui é um link de teste)
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
               method: "POST", // Método POST é usado para enviar/criar dados

               /* IMPORTANTE: Quando usamos FormData, o navegador define o Header automaticamente. 
                  Remover o "headers: { 'Content-type': 'multipart/form-data' }" costuma ser necessário 
                  para o fetch funcionar corretamente com arquivos, pois o navegador precisa inserir 
                  um código chamado "boundary" sozinho.
               */
               body: data, // Enviamos o nosso envelope (FormData) aqui
            });

            // Transforma a resposta do servidor em um objeto JS para lermos no console
            const json = await res.json();
            console.log(json);
         } else {
            // Caso o arquivo não seja uma imagem permitida
            alert("Arquivo incompatível");
         }
      } else {
         // Caso o botão seja clicado sem nenhum arquivo selecionado
         alert("Selecione um arquivo");
      }
   };

   return (
      <div className="mt-5">
         <h1 className="text-4xl text-blue-500">Fazendo Upload de arquivos</h1>
         <h2 className="text-2xl text-white">Subindo arquivo</h2>

         <div className="flex flex-col text-white gap-3 max-w-md border border-dotted border-white p-3 mt-4">
            {/* Conectamos o ref aqui para que o React saiba qual input estamos vigiando */}
            <input type="file" ref={fileInputRef} className="cursor-pointer" />

            <input
               type="text"
               placeholder="digite uma legenda"
               className="p-3 bg-white rounded-md text-black"
               value={legendInput} // O valor do input é o que estiver no nosso estado
               onChange={(e) => setLegendInput(e.target.value)} // Atualiza o estado conforme o usuário digita
            />

            <button
               className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
               onClick={handleFileSend} // Chama a função de enviar ao clicar
            >
               Enviar Arquivo
            </button>
         </div>
      </div>
   );
};
