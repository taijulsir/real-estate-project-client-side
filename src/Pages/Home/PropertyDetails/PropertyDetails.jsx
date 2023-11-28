import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth/useAuth";
import ReviewModal from "./ReviewModal";


const PropertyDetails = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const propertyReview = useLoaderData()
    const { properties, reviews } = propertyReview;
    const { _id, propertyImage, propertyTitle, propertyLocation, priceRange, agentName, agentEmail, agentImage, verified_status } = properties;
    // handle wishlist
    const handleWishlist = async (id) => {
        if (user?.email === agentEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Agent can`t add to wishlist!',
            })
        }
        else {
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
            console.log(res.data)        
            if (res.data.insertedId) {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Succesfully added to wishlist.',
                });
            } else if (res.data.insertedId === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oppss..!',
                    text: 'Item already added to wishlist.',
                });
            }              
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