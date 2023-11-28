import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { CiLocationOn } from "react-icons/ci";

const PropertyBought = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: propertyBought = [] } = useQuery({
        queryKey: ['propertyBought', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/propertyBrought/${user?.email}`)
            return res.data
        }
    })
    return (
        <div className="px-3 lg:px-6">
            <h3 className="text-3xl font-bold text-zinc-950 my-6">My all offered Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertyBought?.map(property =>
                    <div key={property._id}
                        className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <div className="flex items-center px-6">
                            <h3 className="text-2xl text-[#333] font-semibold flex-1">{property.propertyTitle}</h3>
                        </div>
                        <img src={property.propertyImage} className="w-full h-[338px] my-6" />
                        <div className=" space-y-6">
                            <div
                                className="flex flex-wrap items-center cursor-pointer rounded-lg w-full px-4 py-4">
                                <img src={property.agentImage} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4 flex-1">
                                    <p className="text-sm text-black font-semibold">{property.agentName}</p>
                                    <p className="text-xs text-gray-400">{property.agentEmail}</p>
                                </div>
                                <div className="flex items-center">
                                    <CiLocationOn className="text-2xl mr-2"></CiLocationOn> {property.propertyLocation}
                                </div>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="mt-5 flex items-center justify-between">
                                <h3 className="text-xl text-[#333]  flex-1">Offer: $ {property.offerAmount}</h3>
                                <h3 className="text-xl text-[#333]  ">Status:  {property.status}</h3>
                            </div>
                        </div>
                        <div className="px-6">
                            {property.status === "accepted" ? <button type="button"
                                className="px-6 btn py-2 mt-5 rounded text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Pay</button> : ""}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default PropertyBought;