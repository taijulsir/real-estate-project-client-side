/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import "../../../Shared/ButtonHover/ButtonHover.css"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";

const WishList = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allWishlist/${user?.email}`)
            return res.data
        }
    })

    // delete wishlist item
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
                const res = await axiosPublic.delete(`/wishlist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

    return (
        <div className="px-3 lg:px-6 container mx-auto mt-10">
            <HelmetTitle title={"MARKON REAL ESTATE || Wishlist"}></HelmetTitle>
           <Title heading={"All Of Your"} colorHeading={"Wishlist Properties"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {wishlist?.map(item =>
                    <><div key={item?.id}
                        className="border text-white border-zinc-950 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <div className="flex items-center px-6">
                            <h3 className="text-2xl text-zinc-950  font-semibold flex-1">{item?.propertyTitle}</h3>
                        </div>
                        <img src={item?.propertyImage} className="w-full h-[338px] rounded-lg" />
                        <div className=" space-y-6">
                            <div
                                className="flex flex-wrap items-center cursor-pointer  rounded-lg w-full px-4 py-4">
                                <img src={item.agentImage} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4 flex-1">
                                    <p className="text-sm  font-semibold">{item?.agentName}</p>
                                    <p className="text-xs ">{item?.agentEmail}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="flex justify-between ">
                                <p className="text-sm  flex items-center"><CiLocationOn className="text-2xl mr-2 text-zinc-950"></CiLocationOn> {item?.propertyLocation}</p>
                                <p className="text-sm  flex items-center"><AiOutlineDollar className="text-2xl mr-2 text-zinc-950"></AiOutlineDollar> {item?.priceRange}</p>
                                <p className="text-sm  flex items-center"><MdOutlineVerifiedUser className="text-2xl mr-2 text-green-600"></MdOutlineVerifiedUser> {item?.verified_status}</p>

                            </div>
                            <div className="flex justify-between gap-5">
                                <div className="mt-6 flex items-center flex-1">
                                    <Link className="w-full" to={`offerProperties/${item._id}`}>
                                        <button
                                            type="button"
                                            className="btn hvr-sweep-to-top px-6 py-2 rounded w-full  text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Make an offer
                                        </button></Link>
                                </div>
                                <div className="mt-6 flex items-center flex-1">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        type="button"
                                        className="btn px-6 hvr-sweep-to-top py-2 rounded w-full  text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div >
        </div>
    );
};

export default WishList;