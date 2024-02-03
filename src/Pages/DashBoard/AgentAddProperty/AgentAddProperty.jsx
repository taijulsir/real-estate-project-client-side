/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import UpdateProperTies from "./UpdateProperTies";
import { Link } from "react-router-dom";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import "../../../Shared/ButtonHover/ButtonHover.css"
import Title from "../../../Shared/Title/Title";

const AgentAddProperty = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: addedProperties = [], refetch } = useQuery({
        queryKey: [user?.email, 'addedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/agentProperties/${user?.email}`)
            return res.data;
        }
    })

    // handle delte
    const handleDelete = (id) => {
        console.log(id, 'delted')
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
                const res = await axiosSecure.delete(`/api/v1/properties/${id}`)
                    .then(propertiesres => {
                        if (propertiesres.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your property has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="px-4 mt-5 min-h-screen">
            <HelmetTitle title={"Markon Estate || Agent Added Properties"}></HelmetTitle>
            <Title heading={"All Of Your"}  colorHeading={"Added Properties"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {addedProperties?.map(properties =>
                    <div
                        key={properties._id}
                        className=" grid sm:grid-cols-2 border items-center shadow-2xl   w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <img src={properties?.propertyImage} className="w-full h-full object-cover" />
                        <div className="px-4 py-6">
                             {/* agent information */}
                             <div className="flex flex-wrap items-center cursor-pointer  rounded-lg w-full  py-2 mt-6">
                                <img src={properties.agentImage} className="w-9 h-9 rounded-full object-cover" />
                                <div className="ml-4 flex-1">
                                    <p className="text-sm text-white font-semibold">{properties.agentName}</p>
                                    <p className="text-xs text-white">Property Seller</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-400" viewBox="0 0 32 32">
                                    <path
                                        d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-950">{properties?.propertyTitle}</h3>
                            
                            <p className="mt-2 text-sm text-white">Address: {properties?.propertyLocation}
                            </p>
                            <p className="mt-2 text-sm  text-white">
                                Verified Status: "{properties?.verified_status}"
                            </p>
                            <p className="mt-2 text-sm  text-white"> Price: {properties?.priceRange}
                            </p>
                            <div className="flex justify-between w-full mt-6 gap-2">
                                <div className="flex-1 ">
                                    {properties.status === "rejected" ? (
                                        <div>
                                            <button disabled className="btn w-full ">Update</button>
                                        </div>
                                    ) : (
                                        <Link to={`updateProperties/${properties._id}`}>
                                            <button className="btn w-full hvr-sweep-to-top">Update</button>
                                        </Link>
                                    )                          
                                    }
                                </div>
                                <div className="flex-1">
                                    <button onClick={() => handleDelete(properties._id)} className="btn w-full hvr-sweep-to-top">Delete</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgentAddProperty;