/* eslint-disable react/prop-types */

import { AiOutlineDelete } from "react-icons/ai";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const ReviewsCard = ({ reviews, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { _id, reviewerName, reviewerEmail, reviewerImage, reviewDescription } = reviews;

    const handleDelete = async (id) => {
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
                console.log(res.data)
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
    return (
        <div>
            <div
                className=" text-zinc-950 border shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] px-6 py-8 w-full  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div>
                    <h3 className="text-base font-semibold  mb-5">Property: {reviews.propertyTitle}</h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold flex-1">Reviewer</h3>
                </div>
                <div className="mt-5 space-y-6">
                    <div
                        className="flex flex-wrap items-center cursor-pointer shadow-[0_0px_8px_-3px_rgba(6,81,237,0.3)] rounded-lg w-full px-4 py-4">
                        <img src={reviewerImage} className="w-9 h-9 rounded-full object-cover" />
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-zinc-950 font-semibold">{reviewerName}</p>
                            <p className="text-xs text-zinc-950">{reviewerEmail}</p>
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
                    <p className="text-lg "> {reviewDescription}</p>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn  mt-4  border border-zinc-950 bg-red-400 flex items-center">Delete<AiOutlineDelete className="text-3xl text-red-600"></AiOutlineDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;