import { useEffect, useState } from "react";

export const CleanupEffect = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      if (show) {
         console.log("Conectando...");

         // Cleanup function
         return () => {
            console.log("Desconectando...");
         };
      }
   });

   return (
      <div className="flex flex-col gap-2 text-white items-center justify-center">
         <h1 className="text-4xl text-blue-500">Cleanup Effect</h1>
         <p>
            <p className=" text-3xl text-green-500">Cleanup</p> Usado para parar o uso de recursos
            quando o componente é desmontado no uso do useEffect
         </p>
         {show && <h1 className="text-2xl text-yellow-500">Exibição de exemplo</h1>}

         <button
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={() => setShow(!show)}
         >
            {show ? "ESCONDER" : "MOSTRAR"}
         </button>
      </div>
   );
};
