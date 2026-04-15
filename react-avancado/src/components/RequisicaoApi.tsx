import { useEffect, useState } from "react";
// Importamos o tipo UserApi para que o TypeScript saiba como é a estrutura do usuário
import type { UserApi } from "../types/UserApi";

export const RequisicaoApi = () => {
   // Criamos um estado para guardar a lista de usuários (começa com um array vazio)
   const [users, setUsers] = useState<UserApi[]>([]);
   // Criamos um estado para saber se a página está carregando (começa como verdadeiro)
   const [loading, setLoading] = useState(true);

   // O useEffect faz o código rodar assim que o componente aparece na tela
   useEffect(() => {
      // O 'fetch' vai lá no endereço da API buscar os dados
      fetch("https://jsonplaceholder.typicode.com/users")
         // Quando a API responde, transformamos a resposta em formato JSON (que o JS entende)
         .then((resposta) => resposta.json())
         // Com o JSON em mãos, guardamos ele dentro do nosso estado 'users'
         .then((json) => {
            setUsers(json);
         })
         // Se o site da API estiver fora do ar ou o link estiver errado, cai aqui
         .catch(() => {
            console.log("ALGO DEU ERRADO.");
         })
         // O 'finally' roda sempre, independente de dar certo ou errado.
         // Aqui, avisamos que o carregamento terminou (false)
         .finally(() => {
            setLoading(false);
         });
   }, []); // Esse colchete vazio indica que o fetch só deve rodar uma única vez

   return (
      <div>
         <h1 className="text-4xl text-blue-500">Requisições API</h1>
         <h2 className="text-2xl text-white">Lista de usuários vindo da API</h2>

         {/* Se o loading for verdadeiro, mostra o texto "Carregando..." na tela */}
         {loading && "Carregando..."}

         {/* Se terminou de carregar e existem usuários, desenha a lista (ul) */}
         {!loading && users.length > 0 && (
            <ul>
               {/* O .map percorre cada usuário da lista e cria um item (li) para ele */}
               {users.map((item) => (
                  <li key={item.id} className="text-green-300">
                     {/* Mostramos os dados específicos de cada item da API */}
                     Id: {item.id} Nome: {item.name} - email:{item.email} - Cidade:
                     {item.address.city}
                  </li>
               ))}
            </ul>
         )}

         {/* Se terminou de carregar, mas a lista veio vazia, avisa o usuário */}
         {!loading && users.length === 0 && "Nenhum usuário encontrado."}
      </div>
   );
};
