/* eslint-disable react/prop-types */

import HelmetTitle from "../HelmetTitle/HelmetTitle";


const DashboardProfile = ({ user,role, description }) => {
    return (
        
        <div>
             <HelmetTitle title={`Luxury Real State ||  Profile`}></HelmetTitle>
            <section className="flex items-center py-10 text-white xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <img src={user?.photoURL} alt=""
                                    className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>

                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-white font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    About Me
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                    Welcome to visit my profile
                                </h1>
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-950 mt-5">Name: {user?.displayName}</h3>
                            <p className="mt-6 mb-10 text-base leading-7 text-white dark:text-gray-400">
                                {description}
                            </p>
                            {role && <a
                                className="px-4 py-3 text-zinc-950 font-bold transition-all transform bg-blue-400 rounded md hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                Role: {role}
                            </a>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashboardProfile;