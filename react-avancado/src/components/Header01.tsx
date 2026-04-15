import { LoggedUserContext } from "../context/LoggedUser";
import { useContext } from "react";

export const Header01 = () => {
   const loggedUserCtx = useContext(LoggedUserContext);

   const handleLogout = () => {
      if (!loggedUserCtx) return;
      loggedUserCtx.setName("");
   };

   return (
      <header>
         <h1 className="text-3xl text-white">Verificando usuário</h1>

         {loggedUserCtx?.name && (
            <>
               <p className="text-green-300">Usuário Logado: {loggedUserCtx.name}</p>
               <button
                  className=" bg-green-500  rounded-md mx-4 text-white hover:text-gray-400 cursor-pointer p-2"
                  onClick={handleLogout}
               >
                  Sair
               </button>
            </>
         )}

         {(!loggedUserCtx || loggedUserCtx?.name === "") && (
            <p className="text-red-500">Usuário Deslogado</p>
         )}
      </header>
   );
};
