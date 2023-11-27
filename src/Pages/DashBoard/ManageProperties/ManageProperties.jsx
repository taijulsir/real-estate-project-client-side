import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbForbid2 } from "react-icons/tb";
import Swal from "sweetalert2";


const ManageProperties = () => {
    const axiosSecure = useAxiosSecure()
    const { data: manageProperties = [], refetch } = useQuery({
        queryKey: ['manageProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageProperties')
            return res.data;
        }
    })

    // handle verify or rejected
    const handleVerify = async (id, status) => {
        const updateStatus = status;
        // eslint-disable-next-line no-unused-vars
        const res = await axiosSecure.patch(`/properties/verifiedStatus/${id}`, updateStatus)
            .then(updateRes => {
                console.log(updateRes.data)
                if (updateRes.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Logged in successful.',
                    })
                    refetch()
                }
            })
    }
    return (
        <div className=" px-3 lg:px-6">
            <h3 className="text-3xl text-center font-bold my-5">Manage Properties</h3>
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
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Property Image
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Property Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Property Location
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Price Range
                                </th>
                              {
                                manageProperties?.verified_status === 'verified' || manageProperties?.verified_status === 'rejected' ? ( <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                               Status
                            </th>) : (  <thead><th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Verify
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                Reject
                            </th></thead>)
                              }
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap">
                            {manageProperties?.map((properties, index) =>
                                <tr key={properties._id} className="even:bg-blue-50">
                                    <td className="px-6 py-4 text-sm ">
                                        <p className="btn bg-slate-200 text-center">{index + 1}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center cursor-pointer">
                                            <img src={properties.agentImage} className="w-12 h-12 object-cover rounded-full shrink-0" />
                                            <div className="ml-4">
                                                <p className="text-sm text-black">{properties.agentName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {properties.agentEmail}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <img src={properties.propertyImage} alt="" className=" w-40 h-20" />
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {properties.propertyTitle}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {properties.propertyLocation}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        $ {properties.priceRange}
                                    </td>

                                    {properties.verified_status === "verified" || properties.verified_status === "rejected" ? (
                                        <td className="px-6 py-4 text-sm">
                                            {properties.verified_status}
                                        </td>
                                    ) : (
                                        <tr>
                                            <td className="px-6 py-4 text-sm">
                                                <button className="btn" onClick={() => handleVerify(properties._id, { verified_status: "verified" })}>
                                                    <MdOutlineVerifiedUser className="text-3xl text-green-600"></MdOutlineVerifiedUser>
                                                </button>
                                            </td>
                                            {/* Change this line to <td> instead of <tr> */}
                                            <td className="px-6 py-4 text-sm">
                                                <button className="btn" onClick={() => handleVerify(properties._id, { verified_status: "rejected" })}>
                                                    <TbForbid2 className="text-3xl text-red-600"></TbForbid2>
                                                </button>
                                            </td>
                                        </tr>
                                    )}


                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProperties;