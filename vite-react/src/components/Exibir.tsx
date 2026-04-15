import { useState } from "react";

export const Exibir = () => {
   // // Cria o estado que controla a visibilidade. Começa como falso (escondido)
   const [revelar, setRevelar] = useState(false);

   // // Função que altera o valor de 'revelar' para o oposto do atual
   const revelarConteudo = () => {
      // // O '!' inverte o valor: se for false, vira true (e vice-versa)
      setRevelar(!revelar);
   };

   return (
      <div className="flex flex-col justify-center items-center text-3xl">
         {/* // Botão que chama a função para alternar o estado ao ser clicado */}
         <button onClick={revelarConteudo} className="bg-blue-500 p-3">
            {/* // Operador ternário: se 'revelar' for true, mostra "Ocultar", senão "Mostrar" */}
            {revelar ? "Ocultar" : "Mostrar"}
         </button>

         {/* // O '&&' funciona como um "então": se 'revelar' for true, exibe a div abaixo */}
         {revelar && <div className="p-3 mt-5 bg-blue-300">Conteúdo</div>}
      </div>
   );
};
