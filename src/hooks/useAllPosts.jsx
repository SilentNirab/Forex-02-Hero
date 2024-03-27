import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useAllPosts = () => {
    const publicAxios = useAxios();

    const {isPending: loading, data: posts = [],  refetch} = useQuery({
        queryKey: ['posts'], 
        queryFn: async() =>{
            const res = await publicAxios.get('/posts');
            return res.data;
        }
    })
    return [posts, loading, refetch]
};

export default useAllPosts;