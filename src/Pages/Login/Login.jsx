import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4" style={{ backgroundImage: 'url(https://i.ibb.co/Jspy7Nq/register.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="max-w-md w-full mx-auto">
                    <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-xl">
                        <div className="mb-10">
                            <h3 className="text-3xl font-extrabold">Sign in</h3>
                        </div>
                        <div>
                            <div className="relative flex items-center">
                                <input name="email" type="text" required
                                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter email" />
                                <MdOutlineEmail className="text-2xl " ></MdOutlineEmail>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="relative flex items-center">
                                <input name="password" type="password" required
                                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                                    placeholder="Enter password" />
                                <LuEye className="text-2xl "></LuEye>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-6">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="jajvascript:void(0);" className="text-sm font-semibold hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="button"
                                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
                                Sign in
                            </button>
                            <p className="text-sm text-center mt-6">Don`t have an account <a href="javascript:void(0);"
                                className="font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
                        </div>
                        <hr className="my-6 border-gray-500" />
                        
                        {/* social button */}
                        <div className="space-x-8 flex justify-center">
                            <button type="button" className="border-none outline-none">
                                <FcGoogle className="text-4xl"></FcGoogle>
                            </button>
                            <button type="button" className="border-none outline-none">
                                <ImGithub className="text-4xl"></ImGithub>
                            </button>
                            <button type="button" className="border-none outline-none">
                                <BsFacebook className="text-4xl  text-sky-700 font-bold"></BsFacebook>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;