// 1. Importamos os tipos e as ferramentas que vamos usar
import type { PropsQueryInitial } from "../types/PropsQueryInitial";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const InitialQuery = () => {
   // 2. O 'query' guarda o resultado da busca e o status (se está carregando ou não)
   const query = useQuery({
      // 3. queryKey: O "RG" da busca. Serve para o React Query salvar isso no cache (memória)
      queryKey: ["post"],

      // 4. queryFn: É a função que REALMENTE vai buscar os dados na internet
      queryFn: async (): Promise<PropsQueryInitial[]> => {
         // O axios.get entra no site e traz os dados
         const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

         // Retornamos apenas a lista de posts (o .data)
         return result.data;
      },
   });

   return (
      <div className="text-white flex flex-col items-center">
         <h1 className="text-2xl text-black">Primeiro React-Query / TanstackQuery</h1>

         {/* 5. Se o React Query ainda estiver buscando, mostre essa mensagem */}
         {query.isLoading && "Carregando..."}

         {/* 6. Se os dados já chegaram (query.data), mostramos a lista */}
         {query.data && (
            <ul>
               {/* 7. O .map percorre a lista e cria um <li> para cada item */}
               {query.data.map((item) => (
                  <li key={item.id}>{item.title}</li>
               ))}
            </ul>
         )}
      </div>
   );
};
