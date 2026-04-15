import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export const OnlineUsers = () => {
   const countCtx = useContext(CountContext);

   const handleBanAll = () => {
      countCtx?.setOnlineCount(0);
   };

   return (
      <div className="flex flex-col">
         <p className="text-green-400">Usuários Online : {countCtx?.onlineCount}</p>
         <button
            onClick={handleBanAll}
            className="rounded-md bg-green-500 cursor-pointer hover:bg-green-300"
         >
            Banir Players
         </button>
      </div>
   );
};
