import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import ReviewsCard from "./ReviewsCard";


const ManageReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: manageReviews = [], refetch } = useQuery({
        queryKey: ['manageReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageReviews')
            return res.data;
        }
    }) 
    return (
        <div className="px-3 lg:px-6 my-5">
            <h3 className="text-3xl font-bold text-center mt-10">All User Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {manageReviews?.map(reviews => <ReviewsCard key={reviews._id} reviews={reviews} refetch={refetch}></ReviewsCard>)}
            </div>
        </div>
    );
};

export default ManageReviews;