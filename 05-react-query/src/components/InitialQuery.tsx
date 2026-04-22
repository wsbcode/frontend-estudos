import { usePosts } from "../utils/queries";

export const InitialQuery = () => {
   const posts = usePosts();
   return (
      <div className="text-white flex flex-col items-center">
         <h1 className="text-2xl text-black">Primeiro React-Query / TanstackQuery</h1>

         {posts.isLoading && "Carregando..."}

         {posts.data && (
            <ul>
               {posts.data.map((item) => (
                  <li key={item.id}>{item.title}</li>
               ))}
            </ul>
         )}
      </div>
   );
};
