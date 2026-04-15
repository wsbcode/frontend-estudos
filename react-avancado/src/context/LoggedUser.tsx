import { createContext, useState, type ReactNode } from "react";

type LoggedUserContexType = {
   name: string;
   setName: (n: string) => void;
};

export const LoggedUserContext = createContext<LoggedUserContexType | null>(null);

type Props = { children: ReactNode };

export const LoggedUserProvider = ({ children }: Props) => {
   const [name, setName] = useState("William");

   return (
      <LoggedUserContext.Provider value={{ name, setName }}>{children}</LoggedUserContext.Provider>
   );
};
