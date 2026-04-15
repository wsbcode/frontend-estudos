// 1. Definimos o contrato do componente.
// A interrogação em 'autor?' indica que essa informação é opcional.
type PropCondicional = {
   frase: string;
   autor?: string;
};

// 2. Criamos o componente que recebe a frase e o autor.
export const Condicional = ({ frase, autor }: PropCondicional) => {
   return (
      <div className="w-100 border-2 border-red-500 p-3 text-3xl text-center italic">
         {/* Exibimos a frase principal que obrigatoriamente foi enviada */}
         <h3 className="text-3xl font-bold italic">{frase}</h3>

         {/* 3. Lógica Condicional: Se o autor não existir (null ou undefined), 
             o operador '??' exibe o texto padrão à direita */}
         <p className="text-right text-sm italic">{autor ?? "Programador não encontrado"}</p>
      </div>
   );
};
