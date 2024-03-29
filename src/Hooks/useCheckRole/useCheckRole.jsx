
import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useCheckRole = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
   
    const { data: isCheckRole, error, isPending: isCheckRoleLoading,refetch } = useQuery({
        queryKey: [user?.email, 'isCheckRole'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/users/checkRole/${user.email}`)
            return res.data;
        },
        initialData: {
            admin: false,
            agent: false,
        },
    });
    if (error) {
        console.error("Error fetching role:", error);
    }
    return [isCheckRole, isCheckRoleLoading,refetch];
};

export default useCheckRole;