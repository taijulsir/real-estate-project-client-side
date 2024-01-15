import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";
const Login = () => {
    const [showPassword,setShowPassWord] = useState(false)
    const {login,googleLogin,githubLogin} = useAuth()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()

    // form functionality
    const { register, handleSubmit, formState: { errors },reset } = useForm()
    const onSubmit = (data) => {
       login(data.email,data.password)
       .then(result =>{
        console.log(result.user)
        reset()
        toast.success("login succesfull")
        navigate(location?.state? location.state : '/')
       })
       .catch(error=> {
        console.log(error)
        toast.error(error.message)
       })
    }

    // login with google or github
    const handleSocialSignin = (popUp) => {
        popUp()       
        .then(result=>{
            console.log(result.user)
            const authInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
                photoURL: result.user?.photoURL,
                role: 'user'
            }
            axiosPublic.post('/users',authInfo)
            .then(res=> {

                if(res.data?.insertedId|| res.data?.insertedId === null){
                    navigate(location?.state ? location.state : '/')
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Logged in successful.',
                    })
                   
                }
            })
        })
        .catch(error=> {
            console.log(error)
            toast.error(error.message)
        })
    }
    return (
        <div>
            <HelmetTitle title={"MARKON REAL ESTATE || Login"}></HelmetTitle>
            <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4" style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="max-w-md w-full mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-xl">
                        <div className="mb-10">
                            <h3 className="text-3xl font-extrabold">Sign in</h3>
                        </div>

                        {/* email  */}
                        <div>
                            <div className="relative flex items-center">
                                <MdOutlineEmail className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    {...register('email', { required: true })}
                                    type="email"

                                    className="bg-transparent w-full text-sm border-b border-[#333] px-6 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter email"
                                />
                            </div>
                            {errors.name && <span className="text-red-500 font-medium">This field is required</span>}
                        </div>
                        {/* password */}
                        <div className="mt-8">
                            <div className="relative flex items-center">
                                <button onClick={()=>setShowPassWord(!showPassword)}>{showPassword?<LuEye className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" /> :<FaRegEyeSlash className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2"></FaRegEyeSlash>}</button>
                                
                               
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/
                                    })}
                                    
                                    type={showPassword? 'text' : 'password'}
                                    className="bg-transparent w-full text-sm border-b border-[#333] px-6 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter password"
                                />
                            </div>
                            {errors.password?.type === "required" && <span className="text-red-500 font-medium">This field is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-500 font-medium">Password Must be at least 6 character</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-500 font-medium">Password can`t be more than 20 character</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-500 font-medium">Password have at least one lowercase,uppercase,special character and number</span>}
                        </div>

                        {/* remember and forget password */}
                        <div className="flex items-center justify-between gap-2 mt-6">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a className="text-sm font-semibold hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
                                Sign in
                            </button>
                            <p className="text-sm text-center mt-6">Don`t have an account <Link to="/register"
                                className="font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                        </div>
                        <hr className="my-6 border-gray-500" />

                        {/* social button */}
                        <div className="space-x-8 flex justify-center">
                            <button onClick={()=>handleSocialSignin(googleLogin)} type="button" className="border-none outline-none">
                                <FcGoogle className="text-4xl"></FcGoogle>
                            </button>
                            <button onClick={()=>handleSocialSignin(githubLogin)} type="button" className="border-none outline-none">
                                <ImGithub className="text-4xl"></ImGithub>
                            </button>
                            <button type="button" className="border-none outline-none">
                                <BsFacebook className="text-4xl  text-sky-700 font-bold"></BsFacebook>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;