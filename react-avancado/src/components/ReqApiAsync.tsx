import { useEffect, useState } from "react";
import type { UserApi } from "../types/UserApi";

export const ReqApiAsync = () => {
   // users: Aqui guardamos a lista que vem da API (começa vazia [])
   const [users, setUsers] = useState<UserApi[]>([]);

   // loading: Serve para sabermos se a internet ainda está carregando os dados
   const [loading, setLoading] = useState(true);

   // getUsers: Função "async" (assíncrona) porque buscar dados na internet demora um pouco
   const getUsers = async () => {
      // 1. Antes de começar, avisamos que está carregando
      setLoading(true);

      try {
         // 2. O "await fetch" faz a chamada para a URL da API e espera a resposta chegar
         const res = await fetch("https://jsonplaceholder.typicode.com/users");

         // 3. "res.json()" transforma o texto que chegou da API em um objeto JS que podemos usar
         const data = await res.json();

         // 4. Guardamos os dados recebidos no nosso estado 'users'
         setUsers(data);
      } catch (err) {
         // Se a internet cair ou o link estiver errado, ele cai aqui no erro
         console.error("Algo deu errado!");
      }

      // 5. Acabou de carregar (com sucesso ou erro), então desligamos o loading
      setLoading(false);
   };

   // useEffect: Este bloco executa a função getUsers assim que a tela aparece (montagem)
   useEffect(() => {
      getUsers();
   }, []); // Esse array vazio [] garante que a busca só aconteça uma vez

   return (
      <div>
         <h1 className="text-4xl text-blue-500">Requisições API async</h1>
         <h2 className="text-2xl text-white">Lista de suários vindo da API</h2>

         {/* Se loading for verdadeiro, mostra o texto na tela */}
         {loading && "Carregando..."}

         {/* Se não estiver carregando e houver usuários, desenha a lista (map) */}
         {!loading && users.length > 0 && (
            <ul>
               {users.map((item) => (
                  <li key={item.id} className="text-orange-300">
                     {/* Aqui acessamos as propriedades de cada usuário da API */}
                     Id: {item.id} Nome: {item.name} - email:{item.email} - Cidade:
                     {item.address.city}
                  </li>
               ))}
            </ul>
         )}

         {/* Caso a lista venha vazia após o carregamento */}
         {!loading && users.length === 0 && "Nenhum usuário encontrado."}
      </div>
   );
};
