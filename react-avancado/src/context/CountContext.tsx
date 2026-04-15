import { createContext } from "react";
import { useState } from "react";

type CountContextType = {
   onlineCount: number;
   setOnlineCount: (n: number) => void;
};
export const CountContext = createContext<CountContextType | null>(null);

type Props = { children: React.ReactNode };
export const CountProvider = ({ children }: Props) => {
   const [onlineCount, setOnlineCount] = useState(45);

   return (
      <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
         {children}
      </CountContext.Provider>
   );
};
