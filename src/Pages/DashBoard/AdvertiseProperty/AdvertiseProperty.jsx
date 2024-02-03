import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { LiaAdSolid } from "react-icons/lia";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import Title from "../../../Shared/Title/Title";

const AdvertiseProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { data: advertiseProperty = [], refetch } = useQuery({
        queryKey: ['advertiseProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/properties/verified/filtered')
            return res.data;
        }
    })


    const [advertisementsCount, setAdvertisementsCount] = useState(0);
    useEffect(() => {
        // Calculate the count of properties with {advertise: 'advertise'}
        const count = advertiseProperty.reduce((acc, property) => {
            return property.advertise === 'advertise' ? acc + 1 : acc;
        }, 0);
        setAdvertisementsCount(count);
    }, [advertiseProperty]);




    // handle  advertise property 
    const handleAdvertise = (id, advertise) => {
        if (advertise.advertise === 'advertise' && advertisementsCount >= 6) {
            // Display an error message when trying to advertise more than 6 properties
            Swal.fire({
                title: "Error",
                text: "You can't advertise more than 6 properties.",
                icon: "error"
            });
            return;
        }
        // if advertise length is less than 6
        Swal.fire({
            title: "Are you sure advertise this?",
            text: `Property will ${advertise.advertise} !`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${advertise.advertise} it!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/api/v1/advertiseProperties/${id}`, advertise)
                console.log(res.data)
                if (res?.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Advertised!",
                        text: `{Property has been ${advertise.advertise}}`,
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div className="mt-5">
            <HelmetTitle title={`Luxury Real Estate || Advertise Properties`}></HelmetTitle>
            <Title heading={"Manage Advertisement"} colorHeading={"Properties"}></Title>
            <div>
                <div className=" px-3 lg:px-6">
                   

                    {/* table */}
                    <div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white font-[sans-serif]">
                                <thead className="bg-gray-800 whitespace-nowrap">
                                    <tr>

                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            #
                                        </th>

                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Agent Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Property Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Property Image
                                        </th>

                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Property Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Advertise
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                            Remove
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="whitespace-nowrap">

                                    {advertiseProperty?.map((properties, index) =>
                                        <tr key={properties._id} className="even:bg-blue-50">
                                            <td className="px-6 py-4 text-sm ">
                                                <p className="btn bg-slate-200 text-center">{index + 1}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {properties.agentName}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {properties.propertyTitle}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <img src={properties.propertyImage} className="h-16 w-28 rounded object-cover" alt="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {properties.priceRange}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <button disabled={properties?.advertise === "advertise"} className="btn border border-zinc-950" onClick={() => handleAdvertise(properties._id, { advertise: 'advertise' })}><LiaAdSolid className="text-2xl text-green-600"></LiaAdSolid></button>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-green-600 font-medium">
                                                <button disabled={properties?.advertise === "dontDisplay"} className="btn border border-zinc-950" onClick={() => handleAdvertise(properties._id, { advertise: 'dontDisplay' })}><IoMdRemoveCircleOutline className="text-2xl text-red-600"></IoMdRemoveCircleOutline></button>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProperty;