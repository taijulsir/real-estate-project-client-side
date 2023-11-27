import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth/useAuth";
import ReviewModal from "./ReviewModal";


const PropertyDetails = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const propertyReview = useLoaderData()
    const {properties,reviews} = propertyReview;
    const { _id, propertyImage, propertyTitle, propertyLocation, priceRange, agentName, agentEmail, agentImage,verified_status } = properties;
    const handleWishlist = async (id) => {

        if(user?.email === agentEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Agent can`t add to wishlist!',
            })
        }
        else{
            const wishlist = {
                propertyImage: propertyImage,
                propertyTitle: propertyTitle,
                propertyLocation: propertyLocation,
                agentName: agentName,
                agentImage: agentImage,
                agentEmail: agentEmail,
                verified_status: verified_status,
                priceRange: priceRange,
                wishlistId: _id,
                wishlisterEmail: user?.email
            }
            // post method
            const res = await axiosPublic.post('/wishlist', wishlist)
                .then(res => {
                    if (res.data.insertedId || res.data.insertedId === null) {
                        Swal.fire({
                            title: "Success!",
                            text: `Succes ,Property added into wishlist`,
                            icon: "success"
                        });
                    }
                })
                .catch(error => console.log(error))
        }
       
    }
    return (
        <div>
            <div>
                <button onClick={() => handleWishlist(_id)} className="btn bg-orange-500">Add To Wishlist</button>
            </div>
            <div>
                <ReviewModal properties={properties} reviews={reviews} ></ReviewModal>
            </div>
        </div>
    );
};

export default PropertyDetails;