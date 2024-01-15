import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { CiLocationOn } from "react-icons/ci";
import "../../../Shared/ButtonHover/ButtonHover.css"
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import Title from "../../../Shared/Title/Title";

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
        <div className="px-3 lg:px-6 mt-5 min-h-screen">
            <HelmetTitle title={"MARKON REAL ESTATE ||Property Bought"}></HelmetTitle>
           <Title heading={"All of My Bought"} colorHeading={"Properties"} ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {propertyBought?.map(property =>
                    <div key={property._id}
                        className=" border border-zinc-950 text-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full py-6  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <div className="flex items-center px-6">
                            <h3 className="text-2xl  font-semibold flex-1 text-zinc-950 mb-2">{property.propertyTitle}</h3>
                        </div>
                        <img src={property.propertyImage} className="w-full h-[338px] rounded-lg" />
                        <div className=" space-y-6">
                            <div
                                className="flex flex-wrap items-center cursor-pointer rounded-lg w-full px-4 py-4">
                                <img src={property.agentImage} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-4 flex-1">
                                    <p className="text-sm  font-semibold">{property.agentName}</p>
                                    <p className="text-xs ">{property.agentEmail}</p>
                                </div>
                                <div className="flex items-center">
                                    <CiLocationOn className="text-2xl mr-2"></CiLocationOn> {property.propertyLocation}
                                </div>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="mt-2 flex items-center justify-between">
                                <h3 className="text-xl flex-1">Offer: $ {property.offerAmount}</h3>
                                <h3 className="text-xl">Status:  {property.status}</h3>
                            </div>
                        </div>
                        <div className="px-6">
                            {property.status === "accepted" ? <Link to={`payment/${property._id}`}><button type="button"
                                className="px-6 btn py-2 hvr-sweep-to-top mt-5 rounded  text-sm tracking-wider font-semibold border-2 border-[#333] hover:bg-gray-50 outline-none">Pay</button></Link> : ""}
                        </div>
                        <div className="px-6">
                            {property?.status === "Bought" ? <p className="text-base text-green-600 flex items-center mt-5"><IoCheckmarkCircleOutline className="text-xl font-bold text-green-600 bg-black rounded-full mr-2"></IoCheckmarkCircleOutline> Transaction Id : {property?.transactionId}</p> : ""}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default PropertyBought;