import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import Title from "../../../Shared/Title/Title";


const MyReviews = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: myReviews = [], refetch } = useQuery({
        queryKey: [user?.email, 'myReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/userMyReviews/${user?.email}`)
            return res.data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/api/v1/reviews/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    const formatLocalTime = (timeString) => {
        const date = new Date(timeString)
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
        const formatter = new Intl.DateTimeFormat(undefined, options);
        return formatter.format(date);
    }
    return (
        <div className="min-h-screen">
           <HelmetTitle title={"Markon Estate || My Reviews"}></HelmetTitle>
           <Title heading={"All Of My"} colorHeading={"Reviews"} ></Title>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {myReviews?.map(reviews =>
                    <div key={reviews._id}>
                        <div
                            className=" shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] px-6 py-8 w-full  text-white border  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                            <div className=" flex ">
                                <h3 className="text-base font-semibold flex-1 mb-5">Property: {reviews.propertyTitle}</h3>
                                <p>Time: {formatLocalTime(reviews.reviewTime)}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold flex-1">Reviewer</h3>
                            </div>

                            <div className="mt-5 space-y-6">
                                <div
                                    className="flex flex-wrap items-center cursor-pointer shadow-[0_0px_8px_-3px_rgba(6,81,237,0.3)] rounded-lg w-full px-4 py-4">
                                    <img src={reviews.reviewerImage} className="w-9 h-9 rounded-full object-cover" />
                                    <div className="ml-4 flex-1">
                                        <p className="text-sm text-white font-semibold">{reviews.reviewerName}</p>
                                        <p className="text-xs text-white">{reviews.reviewerEmail}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-gray-400" viewBox="0 0 32 32">
                                        <path
                                            d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold flex-1 mt-4">Review</h3>
                                <p className="text-lg text-white"> {reviews.reviewDescription}</p>
                                <button
                                    onClick={() => handleDelete(reviews._id)}
                                    className="btn  mt-4  border border-zinc-950 bg-red-400 flex items-center">Delete<AiOutlineDelete className="text-3xl text-red-600"></AiOutlineDelete>
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>

        </div>
    );
};

export default MyReviews;