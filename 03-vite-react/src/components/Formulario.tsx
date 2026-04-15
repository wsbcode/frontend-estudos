export const Formulario = () => {
   const formEnvio = function (evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault();

      alert("Item enviado");
   };

   return (
      <div className="flex flex-col items-center p-5 text-white">
         <h1 className="text-3xl font-bold mb-3">Usando o preventDefault</h1>
         <form onSubmit={formEnvio}>
            <input type="text" className="mb-3" />
            <input type="submit" value="Enviar" className="bg-blue-400 p-2 rounded-md" />
         </form>
      </div>
   );
};
