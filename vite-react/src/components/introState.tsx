// 1. Primeiro, precisamos "pedir emprestado" o useState do React
import { useState } from "react";

export const IntroState = () => {
   // 2. Criamos o nosso "Estado".
   // 'count' é o valor atual (o que está na caixa)
   // 'setCount' é a única função autorizada a mudar esse valor (o botão que toca o alarme)
   // useState(0) diz que começamos com o número ZERO
   const [count, setCount] = useState(0);

   // 3. Esta função será chamada quando clicarmos no botão
   const handleClick = () => {
      // Usamos o 'setCount' para dizer: "Ei React, mude o valor para o que era antes + 1!"
      setCount(count + 1);
   };

   return (
      <div className="flex flex-col gap-4">
         {/* 4. Mostramos o valor de 'count' aqui dentro de chaves { } */}
         <p className="text-3xl">Você clicou {count} vezes</p>

         {/* 5. Quando o botão é clicado, ele chama a nossa função handleClick */}
         {/* { /* No React, usamos camelCase como onClick em vez de onclick * / } */}
         <button className="bg-blue-600 p-4" onClick={handleClick}>
            Click
         </button>
      </div>
   );
};

// O QUE ACONTECE QUANDO O CÓDIGO RODA:
// 1. O React desenha o botão e o número 0 na tela.
// 2. Você clica no botão.
// 3. A função 'setCount' é avisada. Ela muda o valor para 1 e "toca o alarme".
// 4. O React ouve o alarme, vê que o valor mudou e redesenha a tela rapidinho.
// 5. Agora você vê o número 1 na tela!
