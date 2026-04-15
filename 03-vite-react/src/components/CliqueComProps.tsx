// Aqui você está criando o "Manual de Instruções" do seu componente
type PropsEventos = {
   label: string; // "Eu preciso de um texto para o botão"
   onClickTeste: () => void; // "Eu preciso de uma função para saber o que fazer no clique"
};

// Aqui você está "desembrulhando" o presente que o Pai enviou
export const CliqueComProps = ({ label, onClickTeste }: PropsEventos) => {
   return (
      <div className="flex flex-col items-center p-5 text-white">
         <h1 className="text-xl mb-6 font-bold"> Passando eventos via props</h1>

         {/* Aqui o 'onClick' (com C maiúsculo) é do próprio React. 
            Ele diz: "Quando clicarem em mim, execute o que estiver dentro das chaves".
            E o que está dentro das chaves? A função 'onClickTeste' que o Pai nos deu!
         */}
         <button onClick={onClickTeste} className="bg-blue-500 p-2 rounded-md">
            {/* Aqui ele coloca o texto que o Pai enviou */}
            {label}
         </button>
      </div>
   );
};
