/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ReportModal = ({properties}) => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [isModalOpen, setModalOpen] = useState(false);
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    // handle report 
    const handleReport = async () => {
     const report = {
        reporterName: user?.displayName,
        reporterEmail: user?.email,
        reporterImage: user?.photoURL,
        description: description,
        propertyTitle: properties.propertyTitle,
        agentName: properties.agentName,
        propertyImage: properties.propertyImage,
        propertyId: properties._id
     }
    const res = await axiosPublic.post('/reportedProperties',report) 
     if(res.data.insertedId){
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Succesfully,Reported Done.',
        });
     }
    }
    return (
        <div className="mt-5 mb-5">
            <button className="btn border border-zinc-950 hvr-sweep-to-top text-xl" onClick={openModal}>Report Now</button>
            {isModalOpen && (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white px-8 w-full  max-w-lg rounded-md shadow-lg ">
                            {/* for close modal */}
                            <div className='flex justify-end  '>
                                <button className="mt-4 p-2 text-3xl rounded-md" onClick={closeModal}> <IoIosCloseCircleOutline></IoIosCloseCircleOutline></button>
                            </div>

                            {/* report form */}

                            <div>
                                <h3 className="text-2xl my-3 font-semibold"></h3>
                                <div className="flex flex-col items-center">
                                    <img src={user?.photoURL} className="w-28 h-w-28 rounded-full object-cover" />
                                    <div className="mt-4 text-center">
                                        <p className="text-2xl text-[#333] font-bold">{user?.displayName}</p>
                                        <p className="text-sm text-gray-400 mb-6">{user?.email}</p>
                                    </div>
                                </div>
                                <form onChange={e => setDescription(e.target.value)} className=" space-y-6">
                                    <textarea placeholder="Description..." className="textarea textarea-bordered textarea-lg w-full " required></textarea>
                                </form>
                                <button onClick={handleReport} className="btn w-full bg-amber-600 my-3">Report</button>

                            </div>


                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReportModal;
