export const FetchPostApi = () => {
   // handleAddNewPost: Função assíncrona que será chamada ao clicar no botão
   const handleAddNewPost = async () => {
      // 1. Fazemos o fetch para a URL, mas agora passamos um objeto de configuração
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
         // Define que estamos ENVIANDO um dado novo (POST)
         method: "POST",

         // headers: Avisa a API que o texto que estamos enviando está no formato JSON
         headers: {
            "Content-Type": "application/json; charset=UTF-8",
         },

         // body: Aqui transformamos nosso objeto JS em uma String JSON
         // Sem o JSON.stringify, a API não conseguiria ler esses dados
         body: JSON.stringify({
            userId: 999,
            title: "Titulo do texto",
            body: "Postagem completa",
         }),
      });

      // 2. A API responde confirmando que recebeu (geralmente devolve o objeto com um ID novo)
      const json = await res.json();

      // 3. Mostramos no console o que a API nos devolveu
      console.log(json);
   };

   return (
      <div>
         <h1 className="text-4xl text-blue-500">Fazendo um Fetch POST para API </h1>
         <h2 className="text-2xl text-white">Enviando um novo poste</h2>

         {/* Botão que dispara a função handleAddNewPost quando clicado */}
         <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
            onClick={handleAddNewPost}
         >
            Enviar Post
         </button>
      </div>
   );
};
