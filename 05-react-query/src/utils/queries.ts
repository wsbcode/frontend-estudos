import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "../utils/api";

export const usePosts = () => {
   const query = useQuery({ queryKey: ["posts"], queryFn: getPosts });
   return query;
};

export const usePost = (id: number) => {
   const query = useQuery({
      queryKey: ["posts", id],
      queryFn: () => {
         return getPost(id);
      },
   });
   return query;
};
