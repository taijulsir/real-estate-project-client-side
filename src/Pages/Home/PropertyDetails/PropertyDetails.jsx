import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { FiTriangle } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaClover } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { Toaster } from "react-hot-toast";
import ReviewCards from "./ReviewCards";
import ContactUs from "./ContactUs";
import ReviewModal from "./ReviewModal";
import "../../../Shared/ButtonHover/ButtonHover.css"
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import ReportModal from "./ReportModal";

const PropertyDetails = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const propertyReview = useLoaderData()
    const { properties, reviews } = propertyReview;
    const { _id, propertyImage, propertyDescription, propertyTitle, propertyLocation, priceRange, agentName, agentEmail, agentImage, verified_status, bed, bath, size } = properties;
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
            <HelmetTitle title={`Luxury Real State || Property ${properties._id}`}></HelmetTitle>
            <div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col mx-auto lg:flex-row">

                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center  p-4 md:p-8 lg:p-12">
                                <img src={propertyImage} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>
                        </div>
                        <div className="flex flex-col px-6 py-8 text-white space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                            <h3 className="text-xl font-semibold  ">Features</h3>
                            <hr className="mt-5" />
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Air Conditioning</p>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Swimming Pool</p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">TV Cable</p>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Outdoor Shower</p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Washer</p>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">WiFi</p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Window Coverings</p>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Gym</p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 w-full">
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Laundry</p>

                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-4 w-1/2">
                                    <IoIosCheckmarkCircleOutline className="text-xl md:text-2xl " />
                                    <div className="space-y-2">
                                        <p className="text-sm md:text-lg font-medium ">Dryer</p>

                                    </div>
                                </div>
                            </div>
                            {/* button */}

                            <button onClick={handleWishlist} className="btn  hvr-sweep-to-top text-black flex items-center text-base">
                                <FaClover />
                                Add To Wishlist
                            </button>

                        </div>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row text-white gap-5 container mx-auto">
                    <div className="max-w-4xl flex-1 mx-2 lg:mx-0 px-8 py-4 shadow-2xl  shadow-gray-300/50 border border-white rounded-lg dark:bg-gray-800">
                        <h3 className="text-xl font-semibold ">Overview</h3>
                        <hr className="mt-5" />
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-3">
                            <div className="border-l-2 border-r-2 text-center">
                                <div className="flex items-center gap-2  justify-center mb-1">
                                    <IoBedOutline className="text-2xl" />
                                    <p>{bed}</p>
                                </div>
                                <p className=" font-medium text-lg">Bedrooms</p>
                            </div>
                            <div className="border-l-2 border-r-2 text-center">
                                <div className="flex items-center gap-2  justify-center mb-1">
                                    <FaShower className="text-2xl" />
                                    <p>{bath}</p>
                                </div>
                                <p className=" font-medium text-lg">Bathrooms</p>
                            </div>
                            <div className="border-l-2 border-r-2 text-center">
                                <div className="flex items-center gap-2  justify-center mb-1">
                                    <GiHomeGarage className="text-2xl" />
                                    <p>2</p>
                                </div>
                                <p className=" font-medium text-lg">Garage</p>
                            </div>
                            <div className=" border-r-2 border-l-2 text-center">
                                <div className="flex items-center gap-2  justify-center mb-1">
                                    <FiTriangle className="text-2xl" />
                                    <p>{size}</p>
                                </div>
                                <p className=" font-medium text-lg">Size</p>
                            </div>
                            <div className=" border-l-2 border-r-2 text-center">
                                <div className="flex items-center gap-2  justify-center mb-1">
                                    <CiCalendar className="text-2xl" />
                                    <p>{properties?.year}</p>
                                </div>
                                <p className=" font-medium text-lg">Year</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="lg:max-w-2xl flex-1 mx-2 lg:mx-0 px-8 py-4  rounded-lg border border-white shadow-2xl  shadow-gray-300/50 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold ">Additional Details</h3>
                            <hr className="mt-2" />
                            <h1 className=" mt-2 ">{propertyTitle}</h1>
                            <h3 className=" mt-1">Agent Name : {agentName}</h3>
                            <p className=" mt-1">Price Range : $ {priceRange}</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mt-10 text-white container mx-auto">
                    <div className="max-w-4xl flex-1 mx-2 lg:mx-0 px-8 py-4 mt-5 rounded-lg border border-white shadow-2xl  shadow-gray-300/50 dark:bg-gray-800">
                        <h3 className="text-xl font-semibold ">Description</h3>
                        <hr className="mt-5" />
                        <p className=" mt-3 text-lg">{propertyDescription}</p>
                    </div>
                    <div className="flex-1">
                        <h3 className=" font-bold text-3xl text-center mb-5">Contact Us</h3>
                        <ContactUs></ContactUs>
                    </div>
                </div>


                <div className=" mt-10 container mx-auto">
                    <h1 className="text-4xl mb-10  font-bold">Recent Reviews</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-0 gap-5">
                        {
                            reviews?.map(review => <ReviewCards key={review._id} review={review}></ReviewCards>)
                        }
                    </div>
                </div>


              {/*Review and Report Section  */}
                 <div className="container mx-auto flex gap-10">

                    {/* Review modal */}
                    <ReviewModal properties={properties} reviews={reviews} ></ReviewModal>

                     {/* Report Modal */}
                     <ReportModal properties={properties}></ReportModal>
                </div>
                <Toaster />
            </div >
        </div>
    );
};

export default PropertyDetails;




















