/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_Hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`
const UpdateProperTies = () => {
    const properties = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.propertyImage[0] }
        const res = await axiosPublic.post(image_Hosting_Api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        const property = {
            propertyImage: res.data.data.display_url,
            propertyTitle: data.propertyTitle,
            propertyLocation: data.propertyLocation,
            priceRange: data.priceRange
        }
        // eslint-disable-next-line no-unused-vars
        const updateProperties = await axiosSecure.patch(`/properties/${properties._id}`,property)
            .then(res => {
                console.log(res)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Property Update Successfull.',
                    });
                    navigate('/dashboard/addedProperties')
                }
            })
    }
    return (
        <div className="px-3 lg:px-6 my-5">

            <h3 className="text-3xl font-bold text-center mb-5">Update Your Properties</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" space-y-3">
                    {/* agent name */}
                    <div className="font-[sans-serif]  mx-auto">
                        <input
                            {...register('agentName')}
                            type='text'
                            className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" readOnly defaultValue={properties?.agentName} />
                    </div>
                    {/* agent email */}
                    <div className="font-[sans-serif]  mx-auto">
                        <input
                            {...register('agentEmail')} type='email'
                            className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" readOnly defaultValue={properties?.agentEmail} />
                    </div>
                    {/* property title */}
                    <div className="font-[sans-serif]  mx-auto">
                        <input
                            {...register('propertyTitle', { required: true })}
                            type='text'
                            className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" defaultValue={properties?.propertyTitle} />
                    </div>
                    {/* property locatin */}
                    <div className="font-[sans-serif]  mx-auto">
                        <input
                            {...register('propertyLocation', { required: true })}
                            type='text'
                            className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" defaultValue={properties?.propertyLocation} />
                    </div>
                    {/* price range */}
                    <div className="font-[sans-serif]  mx-auto">
                        <input
                            {...register('priceRange', { required: true })}
                            type='text'
                            className="pr-4 px-5 py-2.5 text-sm text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" defaultValue={properties?.priceRange} />
                    </div>
                    {/* upload image */}
                    <div className="w-full">
                        <label htmlFor="uploadFile1" className="bg-white text-center rounded min-h-[160px] flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif] m-4">
                            <IoCloudUploadOutline className="text-3xl"></IoCloudUploadOutline>
                            <p className="text-gray-400 font-semibold text-sm">Drag & Drop or <span className="text-[#007bff]">Choose file</span> to upload</p>
                            <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                            <input
                                {...register('propertyImage', { required: true })}
                                type="file"
                                className="w-1/6 text-black text-lg bg-gray-100 cursor-pointer py-1 px-2 mt-2 mx-auto hover:bg-gray-700 rounded"
                            />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update" className="btn pr-4 px-5 py-2.5 text-xl text-black rounded-full bg-white border border-green-500 w-full outline-[#007bff]" />

            </form>
        </div>
    );
};

export default UpdateProperTies;