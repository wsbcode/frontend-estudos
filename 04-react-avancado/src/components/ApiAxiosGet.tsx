// Importamos o axios para fazer a busca de dados
import axios from "axios";

export const ApiAxiosGet = () => {
   // Função para buscar as postagens
   const handleGetPosts = async () => {
      // O axios.get vai até o endereço e "baixa" as informações
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      // Aqui está o detalhe importante:
      // 1. response.data é a LISTA de todos os posts que voltaram do site.
      // 2. [1] acessa o SEGUNDO item dessa lista (lembrando que programação começa no 0).
      // 3. .body pega apenas o texto do conteúdo desse post específico.
      console.log(response.data[1].body);
   };

   return (
      <div>
         <h1 className="text-4xl text-blue-600">Introdução biblioteca Axios</h1>
         <h2 className="text-2xl text-white">Fazendo GET com Axios</h2>

         <div>
            <button
               className=" bg-green-500 rounded-md mx-4 text-white hover:text-gray-400 cursor-pointer p-2"
               // Ao clicar, a lista é baixada e o log aparece no console
               onClick={handleGetPosts}
            >
               Click here
            </button>
         </div>
      </div>
   );
};
