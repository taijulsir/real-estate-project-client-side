import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";
import Title from "../../../Shared/Title/Title";

const image_Hosting_Key = import.meta.env.VITE_UPLOAD_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`
const AddProperty = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()

    // form
    const onSubmit = async (data) => {
        const propertyImage = { image: data.propertyImage1[0] }
        const res = await axiosPublic.post(image_Hosting_Api, propertyImage, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const cleanPriceRange = data.priceRange.replace(/[ ,]+/g, '');
        const properties = {
            propertyImage: res.data.data.display_url,
            propertyTitle: data.propertyTitle,
            propertyLocation: data.propertyLocation,
            priceRange: cleanPriceRange,
            agentImage: user?.photoURL,
            agentName: data.agentName,
            agentEmail: data.agentEmail,
            propertyDescription: data.propertyDescription,
            bed: data.bed,
            bath: data.bath,
            size: data.size,
            verified_status: "pending"
        }
        const propertiesRes = await axiosSecure.post('/api/v1/properties', properties)
        console.log(propertiesRes.data)
        if (propertiesRes.data.insertedId) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Property added successful.',
            });
            reset()
        }
    }

    return (
        <div className="mt-5">
            <HelmetTitle title={"Markon Estate || Add Property"}></HelmetTitle>
            <Title heading={"Added Your"} colorHeading={"Properties"}></Title>
            <div className=" px-4 lg:px-0">
                <section className="lg:p-16 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-900">
                            {/* property photo */}
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <div>
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Property Image <span className="text-red-700">*</span></h2>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-zinc-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-zinc-950"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-zinc-950">SVG, PNG, JPG or GIF </p>
                                            </div>
                                            <input id="dropzone-file" type="file" {...register("propertyImage1", { required: true })} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                {/* agent name */}
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Agent Name <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text"  {...register('agentName')} defaultValue={user?.displayName} readOnly />
                                </div>
                                {/* agent email */}
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Agent Email <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type='email' {...register('agentEmail')} readOnly defaultValue={user?.email} />
                                </div>
                                {/* property title */}
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Property Title <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" {...register("propertyTitle", { required: true })} placeholder="Enter Your Property Title Here" />
                                </div>

                                {/* location */}
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Property Location <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text"    {...register('propertyLocation', { required: true })} placeholder="Enter Your Property Location" />
                                </div>
                                {/* price */}
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Price<span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text"   {...register("priceRange", { required: true })} placeholder="Enter Price Range" />
                                </div>
                                {/* bed */}
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Bed <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="number"   {...register("bed", { required: true })} placeholder="Enter Price Here" />
                                </div>
                                {/* bath */}
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4"> Bath <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="number"   {...register('bath', { required: true })} placeholder="Enter Total Bath Here" />
                                </div>
                                {/* size */}
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4">Size<span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="number"  {...register('size', { required: true })} placeholder="Enter Property Size" />
                                </div>

                                {/* description */}
                                <div className="col-span-full">
                                    <h2 className=" text-base md:text-xl font-semibold text-zinc-950 mb-2 lg:mb-4"> Description <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" {...register("propertyDescription", { required: true })} placeholder="Enter Property description Here" />
                                </div>
                                <div className="col-span-full mt-5">
                                    <input type="submit" value="Add Property" className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] " />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddProperty;