import { useState } from "react";
import type { Objeto } from "../types/Objeto";

//Atualizando Objetos em States

export const ObjetoStates = () => {
   // // Inicializa o estado com as duas propriedades definidas no tipo Objeto
   const [fullName, setFullName] = useState<Objeto>({ name: "", lastName: "" });

   {
      /*função que limpa os campos input */
   }
   const limpar = () => {
      setFullName({ name: "", lastName: "" });
   };

   return (
      <div className=" flex flex-col justify-center items-center text-3xl">
         {/* // Input ligado ao estado 'name'. onChange atualiza apenas o 'name' */}
         <input
            type="text"
            placeholder="nome"
            value={fullName.name}
            onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
            className="border border-blue-950 text-black rounded-md mb-3"
         />

         {/* // Input ligado ao estado 'lastName'. onChange atualiza apenas o 'lastName' */}
         <input
            type="text"
            placeholder="Sobrenome"
            value={fullName.lastName}
            onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
            className="border border-blue-950 text-black rounded-md mb-3"
         />

         {/* // Exibe o valor armazenado no estado em tempo real */}
         <p>Meu nome completo é:</p>
         <p className="text-green-600">
            {fullName.name} {fullName.lastName}
         </p>
         {/* botão com função de limpar os campos do input */}
         <button className="bg-blue-600 rounded-md w-24 h-16 mt-2" onClick={limpar}>
            Limpar
         </button>
      </div>
   );
};
