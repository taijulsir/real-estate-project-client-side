import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useCheckRole = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isCheckRole, isPending: isCheckRoleLoading } = useQuery({
        queryKey: [user?.email, 'isCheckRole'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/checkRole/${user.email}`)
            return res.data;
        }
    })
    return [isCheckRole, isCheckRoleLoading];
};

export default useCheckRole;