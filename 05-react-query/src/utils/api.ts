// 1. Importamos o Axios e os "Moldes" (Types) dos dados
import axios from "axios";
import { Post } from "../types/Post";
import { User } from "../types/User";

// 2. Criamos uma INSTÂNCIA do Axios.
// Isso evita que você tenha que digitar a URL inteira em toda função.
const req = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com",
});

// 3. Função para buscar TODOS os posts (Lista)
export const getPosts = async (): Promise<Post[]> => {
   // O req.get usa a baseURL e adiciona o "/posts" no final
   const result = await req.get("/posts");
   return result.data; // Retorna o array de posts
};

// 4. Função para buscar APENAS UM post específico pelo ID
export const getPost = async (id: number): Promise<Post[]> => {
   // Usamos ` ` (crase) para colocar a variável ID dentro do link
   const result = await req.get(`/posts/${id}`);
   return result.data;
};

// 5. Função para buscar a lista de usuários
export const getUsers = async (): Promise<User[]> => {
   const result = await req.get("/users");
   return result.data;
};
