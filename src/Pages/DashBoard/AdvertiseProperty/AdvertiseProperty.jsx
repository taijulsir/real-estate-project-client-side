import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { LiaAdSolid } from "react-icons/lia";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const AdvertiseProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { data: advertiseProperty = [], refetch } = useQuery({
        queryKey: ['advertiseProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get('/properties/verified/filtered')
            return res.data;
        }
    })

    const handleAdvertise = (id, advertise) => {
        console.log(id, advertise)
    }
    return (
        <div>
            <div>
                <div className=" px-3 lg:px-6">
                    <h3 className="text-3xl text-center font-bold my-10">Your All Sold Properties</h3>

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
                                                <img src={properties.propertyImage} className="h-12 w-24" alt="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {properties.priceRange}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <button className="btn bg-amber-600" onClick={() => handleAdvertise(properties._id, { advertise: 'advertise' })}><LiaAdSolid className="text-2xl text-green-600"></LiaAdSolid></button>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-green-600 font-medium">
                                                <button className="btn bg-amber-600" onClick={() => handleAdvertise(properties._id, { advertise: 'dontDisplay' })}><IoMdRemoveCircleOutline className="text-2xl text-red-600"></IoMdRemoveCircleOutline></button>
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