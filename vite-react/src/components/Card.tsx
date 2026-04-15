// 1. Criamos o tipo das propriedades para o TypeScript reconhecer o 'children'.
// O 'React.ReactNode' permite que o componente aceite qualquer elemento dentro dele.
type PropChildren = {
   children: React.ReactNode;
};

// 2. Criamos o componente 'Card' usando a tipagem acima.
export const Card = ({ children }: PropChildren) => {
   return (
      <div className=" w-100 border border-blue-800 p-10">
         {/* 3. O 'children' renderiza tudo o que for colocado entre as tags do Card. */}
         {children}
      </div>
   );
};
