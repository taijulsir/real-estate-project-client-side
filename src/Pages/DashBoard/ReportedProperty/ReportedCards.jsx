/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";


const ReportedCards = ({ report, refetch }) => {

    const axiosSecure = useAxiosSecure()
    const { _id, reporterName, reporterEmail, propertyTitle, agentName, propertyImage, propertyId, reporterImage, description, status } = report;
    const handleReport = (id) => {
        const status = "reported"
        Swal.fire({
            title: "Are you sure make reported?",
            text: "You won't recover it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reported!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/reportedProperties/${id}`,{status: status})
                if(res.data.modifiedCount > 0){
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }         
            }
        });
    }
    return (
        <div>
            <div
                className=" text-white border shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] px-6 py-8 w-full  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                <div>
                    <div className="flex justify-between">
                        <h3 className="text-base  mb-5">Property: {propertyTitle}</h3>
                        <h3 className="text-base  mb-5">Agent: {agentName}</h3>
                    </div>
                    <img src={propertyImage} alt="" className=" rounded-lg" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold flex-1 mt-5">Reporter</h3>
                </div>
                <div className=" space-y-6">
                    <div
                        className="flex flex-wrap items-center cursor-pointer shadow-[0_0px_8px_-3px_rgba(6,81,237,0.3)] rounded-lg w-full px-4 py-4">
                        <img src={reporterImage} className="w-9 h-9 rounded-full object-cover" />
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-white font-semibold">{reporterName}</p>
                            <p className="text-xs text-white">{reporterEmail}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-gray-400" viewBox="0 0 32 32">
                            <path
                                d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                                data-original="#000000" />
                        </svg>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold flex-1 mt-4">Report</h3>
                    <p className="text-lg "> {description}</p>
                    {status === 'reported' ? <button
                        className="btn disabled mt-4  border border-zinc-950 bg-red-400 text-white flex items-center">Remove Proeprty<AiOutlineDelete className="text-3xl text-red-600"></AiOutlineDelete>
                    </button> : <button
                        onClick={() => handleReport(_id)}
                        className="btn  mt-4  border border-zinc-950 bg-red-400 text-white flex items-center">Remove Proeprty<AiOutlineDelete className="text-3xl text-red-600"></AiOutlineDelete>
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default ReportedCards;