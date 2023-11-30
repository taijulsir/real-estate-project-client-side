import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import Title from "../../../Shared/Title/Title";


const SoldProperty = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: soldProperties = [] } = useQuery({
        queryKey: [user?.email, 'soldProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    console.log(soldProperties)
    return (
        <div className="mt-5">
            <HelmetTitle title={"Luxury Real Estate || Agent Sold Property"}></HelmetTitle>
            <div className=" px-3 lg:px-6">
               <Title heading={"All of your"} colorHeading={"Sold Properties"}></Title>
               
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
                                        Buyer Name 
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Buyer Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Property Title
                                    </th>

                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Property Location
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Sold Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        Payment Id
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="whitespace-nowrap">
                                {soldProperties?.map((properties, index) =>
                                    <tr key={properties._id} className="even:bg-blue-50">
                                        <td className="px-6 py-4 text-sm ">
                                            <p className="btn bg-slate-200 text-center">{index + 1}</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {properties.buyerName}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {properties.buyerEmail}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {properties.propertyTitle}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {properties.propertyLocation}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {properties.offerAmount}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-green-600 font-medium">
                                            $ {properties.transjectionId}
                                        </td>



                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldProperty;