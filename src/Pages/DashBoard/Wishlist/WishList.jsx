import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";


const WishList = () => {
const {user} = useAuth()
const axiosPublic = useAxiosPublic()
    const {data: wishlist = [],refetch} = useQuery({
        queryKey: ['wishlist',user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/allWishlist/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <div>{wishlist?.length}</div>
        </div>
    );
};

export default WishList;