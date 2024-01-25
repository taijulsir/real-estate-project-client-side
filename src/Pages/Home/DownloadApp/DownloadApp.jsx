
import { AiFillAndroid } from "react-icons/ai";
import { RiAppleLine } from "react-icons/ri";

const DownloadApp = () => {
    return (
        <div className="my-20 lg:h-[520px] relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/DL6CBrZ/background-image-01.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between gap-10 items-center relative z-10">
                {/* text content left side */}
                <div className="flex-1 ">
                    <h3 className="text-3xl text-white font-bold ">Find your property by your <span className="text-orange-600">finger</span> tip</h3>
                    <h4 className="mt-3 text-xl text-[#c6c2c2]">Our mobile apps are available now</h4>

                    {/* icon and content */}
                    <div className="flex gap-10 mt-10">
                        {/* left side icon and content */}
                        <div className="bg-white opacity-70  px-3 py-2 flex gap-5 rounded-md overflow-hidden">
                            <div className="flex items-center gap-3">
                                <AiFillAndroid className="text-2xl " />
                                <div className=" border border-r-[#0c0c0c] contents-[''] h-full "></div>
                                </div>
                            <div className=" font-raleway">
                                <p className=" text-sm text-zinc-950 font-medium">Available on the</p>
                                <h3 className="text-xl font-bold">Android Market</h3>
                            </div>
                        </div>
                        {/* right side icon and content */}
                        <div className="bg-white opacity-70  px-3 py-2 flex gap-5 rounded-md overflow-hidden">
                            <div className="flex items-center gap-3">
                                <RiAppleLine className="text-2xl " />
                                <div className=" border border-r-[#0c0c0c] contents-[''] h-full "></div>
                                </div>
                            <div className=" font-raleway">
                                <p className=" text-sm text-zinc-950 font-medium">Available on the</p>
                                <h3 className="text-xl font-bold">Apple Market</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* images right side */}
                <div className=" flex gap-10">
                    <img className="opacity-80" src="https://i.ibb.co/bWWXdv2/iphone-white.png" alt="" />
                    <img className="opacity-80" src="https://i.ibb.co/q5SzQmP/iphone-black-207x545.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;