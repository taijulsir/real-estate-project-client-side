import { useForm } from "react-hook-form";
import LeftSide from "./LeftSide";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const image_Hosting_Key = import.meta.env.VITE_UPLOAD_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`
const AddProperty = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // form
    const onSubmit = async (data) => {
        const propertyImage = { image: data.propertyImage1[0] }
        const res = await axiosPublic.post(image_Hosting_Api, propertyImage, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
         const properties = {
            propertyImage: res.data.data.display_url,
            propertyTitle: data.propertyTitle,
            propertyLocation: data.propertyLocation,
            priceRange: data.priceRange,
            agentName: data.agentName,
            agentEmail: data.agentEmail,
            propertyDescription:data.propertyDescription,
            bed: data.bed,
            bath: data.bath,
            size: data.size,
            verified_status: "pending"
         }
       // eslint-disable-next-line no-unused-vars
       const propertiesRes = await axiosSecure.post('/properties',properties)
       .then(properties=>{
        if(properties.data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Sign up successful.',
            });
            reset()
        }
       })
       .catch(error=>console.log(error))
    }

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/S0PRyFS/menu-bg.png)' }}>
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className=" px-4  ">
                    <div className="p-8 px-4 bg-white dark:bg-gray-900">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
                            {/* left side */}
                            <div className="">
                                <h2 className="px-4 text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">Provide Your Property Information
                                </h2>
                                <p className="px-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Provide Correct information
                                </p>
                                <div className="hidden lg:flex flex-col">
                                    <LeftSide></LeftSide>
                                </div>
                            </div>

                            {/* form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex justify-between">
                                    {/* name */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Agent Name</label>
                                        <input
                                            {...register('agentName')}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="text" defaultValue={user?.displayName} readOnly />
                                    </div>
                                    {/* email */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Agent Email</label>
                                        <input
                                            {...register('agentEmail')}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="text" defaultValue={user?.email} readOnly />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    {/* title */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Property Title</label>
                                        <input
                                            {...register("propertyTitle", { required: true })}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="text" placeholder="Enter title" />

                                    </div>
                                    {/* location */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Property Location</label>
                                        <input
                                            {...register('propertyLocation', { required: true })}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="text" placeholder="Enter location" />

                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    {/* price */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Price Range</label>
                                        <input
                                            {...register("priceRange", { required: true })}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="text" placeholder="Enter price range like $40000-$50000" />
                                    </div>
                                    
                                </div>
                                <div className="flex justify-between">
                                    {/* bed */}
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Quantity of Bed</label>
                                        <input
                                            {...register("bed", { required: true })}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="number" placeholder="Enter quantity" />
                                    </div>
                                    {/* bath */}
                                    <div className="px-4 mb-6 flex-1">

                                        <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Quantity of Bath</label>
                                        <input
                                            {...register('bath')}
                                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                            type="number" placeholder="Enter Quantity" />
                                    </div>
                                </div>
                                {/* size */}
                                <div className="px-4 mb-6 lg:w-1/2">
                                    <label className="block mb-2 text-sm font-medium dark:text-gray-400"> Property Size</label>
                                    <input
                                        {...register('size')}
                                        className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                        type="text" placeholder="Enter property size" />
                                </div>

                                {/* uploading photo */}
                                <div>
                                    <div className="px-4 mb-6 flex-1">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            htmlFor="file_input">Upload file</label>
                                        <input
                                            {...register("propertyImage1", { required: true })}
                                            className="block w-full text-sm text-gray-600 border border-gray-200 rounded cursor-pointer file:hover:bg-gray-200 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 dark:file:text-gray-300 dark:file:hover:bg-gray-500 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-100 "
                                            type="file" />
                                    </div>
                                </div>
                              
                                {/* description */}
                                <div className="px-4 mb-6">
                                    <label className="block mb-2 text-sm font-medium dark:text-gray-400">Description</label>
                                    <textarea
                                        {...register("propertyDescription", { required: true })}
                                        className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                        rows="5" placeholder="Write description..."> </textarea>
                                </div>
                                <div className="px-4 ">
                                    <input type="submit" value="Submit" className="btn bg-sky-500" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProperty;