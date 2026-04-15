import { OnlineUsers } from "./OnlineUsers";

export const Header = () => {
   return (
      <header className=" flex items-center flex-col gap-2">
         <h1 className="text-4xl text-blue-500">Aula Context</h1>
         <h1 className="text-3xl text-red-800"> Cabal Online</h1>
         <OnlineUsers />
      </header>
   );
};
