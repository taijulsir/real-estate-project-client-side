import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

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
        <div>
            <h1>{propertyBought?.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyBought?.map(property=>
             <div key={property._id}
                className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div className="flex items-center px-6">
                    <h3 className="text-2xl text-[#333] font-semibold flex-1">{property.propertyTitle}</h3>    
                </div>
                <img src={property.propertyImage} className="w-full my-6" />
                <div className="px-6">
                    <div className="mt-10 flex items-center">
                        <h3 className="text-xl text-[#333] font-semibold flex-1">$12.90</h3>
                        <button type="button"
                            className="px-6 py-2 rounded text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Order
                            now</button>
                    </div>
                </div>
            </div>)}
           </div>
        </div>
    );
};

export default PropertyBought;