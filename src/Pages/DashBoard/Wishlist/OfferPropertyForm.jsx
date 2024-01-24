import { useLoaderData } from "react-router-dom";
import "../../../Shared/ButtonHover/ButtonHover.css"
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";

const BroughtProperty = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const properties = useLoaderData()
    const [minPrice, maxPrice] = properties.priceRange;
    console.log(minPrice,maxPrice)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data)
        const boughtProperty = {
            wishlistId: properties.wishlistId,
            status: 'pending',
            propertyImage: properties.propertyImage,
            propertyTitle: data.propertyTitle,
            propertyLocation: data.propertyLocation,
            agentName: data.agentName,
            agentImage: properties.agentImage,
            agentEmail: data.agentEmail,
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            buyingDate: data.buyingDate,
            offerAmount: data.offerAmount,
        }
        const offeredAmount = parseFloat(data.offerAmount)
        console.log(offeredAmount)
        if (isNaN(offeredAmount) || offeredAmount < minPrice || offeredAmount > maxPrice) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Offer price must be between in price range!',
            })
            return;
        }
        else {
            const res = await axiosPublic.post('/propertyBrought', boughtProperty)
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your offer is successful.',
                });
            } else if (res.data.insertedId === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oppss..!',
                    text: 'Item already offered you.',
                });
            }          
        }
    }
    return (
        <div className="px-3 lg:px-6 my-6">
            <HelmetTitle title={"Markon Estate || Make an offer"}></HelmetTitle>
            <h2 className="text-3xl font-bold ">Make an offer to brought <span className="text-green-500">{properties.propertyTitle}.</span></h2>

            <div>
                {/* form page */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 my-8">

                    <div className="flex justify-between gap-5">
                        {/* Agent name */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Agent Name</label>
                            <input
                                {...register('agentName',)}
                                type="text"
                                className="pl-4 pr-12 py-3.5  w-full bg-white text-[#333]  text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={properties.agentName} readOnly />
                        </div>
                        {/* agent email */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Agent Email</label>
                            <input
                                {...register('agentEmail')} type="text"
                                className="pl-4 pr-12 py-3.5  bg-white text-[#333] w-full text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={properties.agentEmail} readOnly />
                        </div>
                    </div>

                    <div className="flex justify-between gap-5">
                        {/* buyer name */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Buyer Name</label>
                            <input
                                {...register('buyerName')} type="text"
                                className="pl-4 pr-12 py-3.5  w-full bg-white text-[#333]  text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={user?.displayName} readOnly />
                        </div>
                        {/* buyer email */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Buyer Email</label>
                            <input
                                {...register('buyerEmail')}
                                type="text"
                                className="pl-4 pr-12 py-3.5  bg-white text-[#333] w-full text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={user?.email} readOnly />
                        </div>
                    </div>

                    <div className="flex justify-between gap-5">
                        {/* property title */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Property Title</label>
                            <input
                                {...register('propertyTitle')}
                                type="text"
                                className="pl-4 pr-12 py-3.5  w-full bg-white text-[#333]  text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={properties.propertyTitle} readOnly />
                        </div>
                        {/* property Location */}
                        <div className="relative flex flex-1 items-center  mx-auto mt-4">
                            <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Property Location</label>
                            <input
                                {...register('propertyLocation')}
                                type="text"
                                className="pl-4 pr-12 py-3.5  bg-white text-[#333] w-full text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" defaultValue={properties.propertyLocation} readOnly />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        {/* Buying Date */}
                        <div className="flex-1">
                            <div className="relative flex flex-1 items-center  mx-auto mt-4">
                                <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Buying Date<span className="text-red font-bold">*</span></label>
                                <input
                                    {...register('buyingDate', { required: true })}
                                    type="date"
                                    className="pl-4 pr-12 py-3.5  w-full bg-white text-[#333]  text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" />
                            </div>
                            {errors.buyingDate && <span className="text-red-500 font-medium">This field is required</span>}
                        </div>

                        {/* Offered amount */}
                        <div className="flex-1">
                            <div className="relative flex  items-center  mx-auto mt-4">
                                <label htmlFor="" className="text-[13px] bg-white text-[#333] absolute  top-[-10px] left-[18px] font-semibold">Offer Amount<span className="text-red font-bold">*</span></label>
                                <input
                                    {...register('offerAmount', { required: true })}
                                    type="number" placeholder="Price..."
                                    className="pl-4 pr-12 py-3.5  bg-white text-[#333] w-full text-sm border-2 border-gray-300 focus:border-[#333] rounded-xl outline-none" />
                            </div>
                            {errors.offerAmount && <span className="text-red-500 font-medium">This field is required</span>}
                        </div>

                    </div>
                    <input type="submit" value="Make an Offer" className="btn hvr-sweep-to-top border-zinc-950 w-full " />
                </form>
            </div>
        </div>
    );
};

export default BroughtProperty;