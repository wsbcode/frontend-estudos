// Importamos a biblioteca axios para podermos usar suas funções de conexão
import axios from "axios";

// Criamos uma "instância" (uma configuração salva) para não termos que repetir o endereço do site toda hora
export const ApiAxios = axios.create({
   // O baseURL é o endereço principal do servidor (a "casa" dos dados)
   // Assim, quando você for buscar algo, só precisa digitar o final do endereço (ex: "/posts")
   baseURL: "https://jsonplaceholder.typicode.com",
});
