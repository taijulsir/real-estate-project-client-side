/* eslint-disable react/prop-types */

import { useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";


const ReviewModal = ({ properties, reviews }) => {
    const { user } = useAuth()

    const [description, setDescription] = useState(null)
    const currentTime = new Date()
    const isoStringtime = currentTime.toISOString()
    console.log(description)
    // propertyTitle
    // propertyId
    // reviewerName
    // reviewerEmail 
    //  reviewerImage 
    // reviewTime
    // reviewDescription

    const handleReview = () => {
        const review = {
            propertyTitle: properties.propertyTitle,
            propertyId: properties._id,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            reviewerImage: user?.photoURL,
            reviewTime: isoStringtime,
            reviewDescription: description
        }
        console.log(review)
    }


    return (
        <div>

            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Review Now</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* form */}
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
                            <textarea placeholder="Description..." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </form>
                        <button onClick={handleReview} className="btn w-full bg-amber-600 my-3">Review</button>
                    
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ReviewModal;