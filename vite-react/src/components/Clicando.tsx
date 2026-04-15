export const Clicando = () => {
   //
   // Criando  função que sera executada apos botão ser clicado
   const fuiClicado = () => {
      // Aqui você coloca o que deve acontecer
      console.log("Apertaram o botão");
      alert("Clicaram em mim!");
   };

   return (
      <div className="flex flex-col items-center p-5 text-white">
         <h1 className="text-xl mb-6 font-bold">Aprendendo Eventos</h1>
         {/* Passamos apenas a REFERÊNCIA da função (sem os parênteses).
          Isso diz ao React: "Guarde essa função e use quando o usuário clicar".*/}
         <button onClick={fuiClicado} className="bg-blue-500 p-2 rounded-md">
            Clique aqui
         </button>
      </div>
   );
};
