import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { VscBell } from "react-icons/vsc";
import { IoListSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navlinks =
        <>
            <li><NavLink to="/" className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Home</NavLink></li>
            <li><NavLink to="/allProperties" className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">All Properties</NavLink></li>
            <li><NavLink to="/dashboard" className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Dashboard</NavLink></li>
            <li><NavLink to="/aboutUs" className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">About Us</NavLink></li>
            <li><NavLink to="/blogs" className="text-sm text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">Blogs</NavLink></li>


        </>
    return (
        <div>
            <section className="font-poppins dark:bg-gray-800 bg-blue-50">
                <div className="container px-4 mx-auto">
                    <nav className="relative flex items-center justify-between py-4 ">
                        <Link href="/" className="text-3xl font-semibold leading-none dark:text-gray-400">
                            <img src="https://i.ibb.co/LQ5jG4p/logo.png" className='h-12 w-28 lg:h-16 lg:w-36' alt="" />
                        </Link>
                        <div className="flex items-center lg:hidden ">
                            <a className="mr-6 dark:text-gray-400">
                                <IoMdHeartEmpty className="text-2xl"></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-6 dark:text-gray-400 ">
                                <VscBell className="text-2xl"></VscBell>
                                <span
                                    className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-600 rounded-full"></span>
                            </span>

                            <button
                                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <IoListSharp className="text-2xl"></IoListSharp>
                            </button>
                        </div>
                        <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex">
                            {navlinks}
                        </ul>
                        <div className="items-center justify-end hidden lg:flex dark:text-gray-400">
                            <a className="mr-5">
                                <IoMdHeartEmpty className="text-2xl"></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-5">
                                <VscBell className="text-2xl"></VscBell>
                                <span
                                    className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-600 rounded-full"></span>
                            </span>
                            <NavLink
                                className="items-center hidden px-4 py-2 font-semibold text-blue-600 border border-blue-200 rounded-md hover:text-gray-100 hover:bg-blue-600 lg:flex dark:text-gray-400 dark:hover:bg-transparent dark:border-gray-300 dark:hover:text-blue-300">
                                Sign In
                            </NavLink>
                        </div>
                    </nav>


                    {/* Mobile Sidebar */}
                    <div
                        className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
                            }`}
                    ></div>
                    <div
                        className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
                            }`}
                    >
                        <div className="flex justify-between">
                            <a className="p-2 text-2xl font-bold dark:text-gray-400" href="#">Logo</a>
                            <button className="p-2 rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400" onClick={() => setOpen(false)}>
                                <AiOutlineCloseCircle className="text-2xl"></AiOutlineCloseCircle>
                            </button>
                        </div>
                        <div className="flex items-center px-5 mt-7 lg:hidden">
                            <a className="items-center mr-4 text-sm font-semibold lg:flex dark:text-gray-400">
                                <CiUser className="text-2xl"></CiUser>
                            </a>
                            <a className="mr-6 dark:text-gray-400">
                                <IoMdHeartEmpty className="text-2xl"></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-6 dark:text-gray-400 ">
                                <VscBell className="text-2xl"></VscBell>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-600 rounded-full"></span>
                            </span>
                        </div>
                        <ul className="px-5 text-left mt-7">
                            {navlinks}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
