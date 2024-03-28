import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";



const useClient = () => {
    const { user, loading } = useAuth();
    const publicAxios = useAxios();
    const { data: isClient, isPending: isClientLoading } = useQuery({
        queryKey: [user?.email, 'isClient'],
        enabled: !loading,
        queryFn: async () => {
            const res = await publicAxios.get(`/users/client/${user.email}`);
            // console.log(res.data);
            return res.data?.client;
        }
    })
    return [isClient, isClientLoading]
};

export default useClient;