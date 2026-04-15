import { useState, useEffect } from "react";

export const EffectorBase = () => {
   // Criamos dois estados: um para o nome e outro para a idade
   const [name, setName] = useState("William");
   const [age, setAge] = useState(33);

   // O useEffect é o nosso "vigia" ou "observador"
   useEffect(() => {
      // Esta função será executada:
      // 1. Quando o componente carregar pela primeira vez.
      // 2. Sempre que o valor dentro do array [age] for alterado.
      console.log("Use Effect ACIONADO");
   }, [age]); // <-- Aqui dizemos ao React: "Só ative este efeito se a 'age' mudar"

   return (
      <div className="flex justify-center items-center flex-col">
         <h1 className="text-blue-500 text-2xl mb-2"> Effector Base</h1>

         {/* Exibe o nome atual */}
         <h2 className="text-white text-xl"> Hello {name}</h2>

         {/* Exibe a idade atual */}
         <p className="text-white text-lg"> Age: {age}</p>

         {/* Botão de Nome: Quando clicado, muda o nome, mas NÃO dispara o alerta */}
         <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
            onClick={() => setName("Barbosa")}
         >
            Change Name Barbosa
         </button>

         {/* Botão de Idade 40: Quando clicado, muda a idade e DISPARA o alerta */}
         <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
            onClick={() => setAge(40)}
         >
            Change Age 40
         </button>

         {/* Botão de Idade 20: Quando clicado, muda a idade e DISPARA o alerta */}
         <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
            onClick={() => setAge(20)}
         >
            Change Age 20
         </button>
      </div>
   );
};
