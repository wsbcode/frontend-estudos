// 1. Função que formata a data recebida.

// Usamos o parâmetro 'novoDia' que a função recebe para gerar o texto.
function diaDaSemana(novoDia: Date) {
   return novoDia.toLocaleDateString("pt-BR", {
      weekday: "long", // Retorna o dia por extenso
   });
}

// 2. Contrato de Tipagem (Props)
type PropsPessoa = {
   nome: string;
   imagem?: string;
   profissao: string[];
};

// 3. Componente Pessoa
export const Pessoa = ({
   nome,
   imagem = "https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg",
   profissao,
}: PropsPessoa) => {
   // Criamos a data atual para passar para a função
   const hoje: Date = new Date();

   return (
      <div className=" flex flex-col p-4 border border-gray-700 rounded-lg bg-gray-800 mb-1">
         {/* Exibe o nome e o dia da semana formatado */}
         <h1 className="text-green-600 font-bold text-xl">
            Nome: {nome} - {diaDaSemana(hoje)}
         </h1>

         {/* Imagem com tamanho controlado */}
         <img
            className="w-32 h-32 rounded-full mx-auto my-4 object-cover"
            src={imagem}
            alt={nome}
         />

         {/* Lista de profissões usando map para evitar erros de índice vazio */}
         <ul className="text-center text-gray-300">
            {profissao.map((job, index) => (
               <li key={index} className="mt-1 border-b border-gray-700 last:border-0 pb-1">
                  {job}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Pessoa;
