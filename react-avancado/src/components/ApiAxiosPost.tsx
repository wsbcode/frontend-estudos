// Importamos o axios padrão (sem configurações prévias)
import axios from "axios";

export const ApiAxiosPost = () => {
   // Função que será disparada ao clicar no botão
   const handleAddPosts = async () => {
      // Aqui passamos o endereço COMPLETO porque não estamos usando a instância
      // O 'await' espera o servidor processar a criação do post
      const responde = await axios.post("https://jsonplaceholder.typicode.com/posts", {
         userId: 77,
         title: "Palmeiras ",
         body: "O maior time do Brasil",
      });

      // Lógica de verificação (Check):
      // Se o servidor devolver um 'userId', significa que o post foi criado com sucesso
      if (responde.data.userId) {
         console.log("Sucesso");
      } else {
         // Caso contrário, algo deu errado na comunicação
         console.log(" Deu Ruim!");
      }
   };

   return (
      <div>
         <h1 className="text-4xl text-blue-600">Introdução biblioteca Axios</h1>
         <h2 className="text-2xl text-white">Fazendo POST com Axios</h2>

         <div>
            <button
               className=" bg-green-500 rounded-md mx-4 text-white hover:text-gray-400 cursor-pointer p-2"
               // Aciona a função acima quando clicado
               onClick={handleAddPosts}
            >
               Click here
            </button>
         </div>
      </div>
   );
};
