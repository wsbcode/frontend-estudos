// Importamos a configuração que você criou (onde está o endereço do site)
import { ApiAxios } from "../InstaciaDoAxios/api";

export const ApiAxiosInstance = () => {
   // Esta função "async" (assíncrona) faz o trabalho de enviar os dados
   const AddPost = async () => {
      // O 'await' faz o código esperar o site responder antes de continuar
      // Usamos .post para dizer: "Ei servidor, salve estas informações!"
      const response = await ApiAxios.post("/posts", {
         useId: 400, // O ID do usuário que está criando
         title: "Titulo Teste", // O título da postagem
         body: "Texto da postagem", // O conteúdo da postagem
      });

      // Aqui mostramos no console o que o servidor nos mandou de volta
      // Geralmente o servidor confirma que salvou enviando os dados de novo
      console.log(response.data);
   };

   return (
      <div>
         {/* Títulos simples para organizar a tela */}
         <h1 className="text-4xl text-blue-600">Introdução biblioteca Axios</h1>
         <h2 className="text-2xl text-white">Fazendo POST com Axios Instanciado</h2>

         <div>
            {/* O botão que, ao ser clicado (onClick), chama a nossa função AddPost */}
            <button
               className=" bg-green-500 rounded-md mx-4 text-white hover:text-gray-400 cursor-pointer p-2"
               onClick={AddPost}
            >
               Click here
            </button>
         </div>
      </div>
   );
};
