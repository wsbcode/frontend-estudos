import { useState } from "react";

// States em Campos

export const StatesCampos = () => {
   const [campoInput, setCampoInput] = useState("");
   return (
      <div className="flex flex-col justify-center items-center text-3xl">
         <input
            type="text"
            placeholder="Digite seu nome"
            className="text-black"
            value={campoInput}
            onChange={(e) => setCampoInput(e.target.value)}
         />
         <p>Seu nome é:{campoInput}</p>
      </div>
   );
};
