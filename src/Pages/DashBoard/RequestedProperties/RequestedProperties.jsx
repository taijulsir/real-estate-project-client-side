import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbForbid2 } from "react-icons/tb";
import Swal from "sweetalert2";



const RequestedProperties = () => {
   
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: requestedProperties = [], refetch } = useQuery({
        queryKey: [user?.email, 'requestedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requestedProperties/${user?.email}`)     
            return res.data;
        }
    })
    const handleAccept = (requestId,status) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, accepted it!`,
          }).then(async(result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.put(`/api/request/${requestId}`,status)
                console.log(res.data)
                if(res.data.accptedResult.modifiedCount>0 || res.data.rejectedResult.modifiedCount>0){
                    Swal.fire({
                        title: "Updated!",
                        text: `Property has been accepted`,
                        icon: "success"
                      });
                      refetch()
                }            
            }
          });
       
    }


    const handleReject = (requestId,status) =>{
        console.log(status)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, rejected it!`,
          }).then(async(result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/api/reject/${requestId}`,status)
                console.log(res.data)
                if(res.data.modifiedCount>0){
                    Swal.fire({
                        title: "Updated!",
                        text: `Property has been rejected`,
                        icon: "success"
                      });
                      refetch()
                }            
            }
          });
    }
    return (
        <div className="px-3 lg:px-6 my-6">
            <h1 className="text-3xl font-bold my-6">Request Properties Information</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white font-[sans-serif]">
                        <thead className="bg-gray-800 whitespace-nowrap">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Property Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Location
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Buyer Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Buyer Email
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Offer Price
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Accept
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Reject
                                </th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap">
                            {requestedProperties?.map((request, index) =>
                                <tr key={index} className="even:bg-blue-50">
                                    <td className="px-6 py-4 text-sm ">
                                        <p className=" bg-slate-200 text-center"> {index + 1}</p>
                                    </td>
                                    <td className="px-6 py-4 text-lg">
                                        {request.propertyTitle}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {request?.propertyLocation}
                                    </td>
                                    <td className="px-6 py-4 text-lg">
                                        {request?.buyerName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request?.buyerEmail}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request?.offerAmount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request?.status}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="mr-4 btn ">
                                            <FaRegCircleCheck onClick={()=>handleAccept(request?._id,{status:"accepted"})} className="text-2xl text-green-600 "></FaRegCircleCheck>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button onClick={()=>handleReject(request._id,{status:"rejected"})} className="mr-4 btn">
                                            <TbForbid2 className="text-2xl text-red-600 font-bold "></TbForbid2>
                                        </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestedProperties;