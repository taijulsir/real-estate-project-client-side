import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { VscBell } from "react-icons/vsc";
import { IoListSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth/useAuth"
import "../ButtonHover/ButtonHover.css";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth()
    const handleSignOUt = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    const navlinks =
        <>
            <li className="mr-4 text-lg lg:text-white text-zinc-950    hover:bg-gray-700 hover:px-3 hover:py-2 hover:rounded"><NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Home</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950    hover:bg-gray-700 hover:px-3 hover:py-2 hover:rounded"><NavLink to="/allProperties" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>All Properties</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950    hover:bg-gray-700 hover:px-3 hover:py-2 hover:rounded"><NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Dashboard</NavLink></li>
            <li className="mr-4 text-lg lg:text-white text-zinc-950    hover:bg-gray-700 hover:px-3 hover:py-2 hover:rounded"><NavLink to="/aboutUs" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>About Us</NavLink></li>
           
        </>
    return (
        <div>
            <section className=" dark:bg-gray-800  ">
                <div className="container px-4 mx-auto">
                    <nav className="relative flex items-center justify-between ">
                        <Link href="/" className="text-3xl font-semibold leading-none dark:text-gray-400">
                            <img src="https://i.ibb.co/LQ5jG4p/logo.png" className='h-12 w-28 lg:h-16 lg:w-36' alt="" />
                        </Link>
                        <div className="flex items-center lg:hidden  ">
                            <a className="mr-6 dark:text-gray-400">
                                <IoMdHeartEmpty className="text-2xl text-white "></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-6 dark:text-gray-400 ">
                                <VscBell className="text-2xl text-white "></VscBell>
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
                                <IoMdHeartEmpty className="text-2xl text-white"></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-5">
                                <VscBell className="text-2xl text-white"></VscBell>
                                <span
                                    className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-600 rounded-full"></span>
                            </span>

                            {/* user photo and name and logout button */}
                            {user ? <div className="dropdown dropdown-end z-10">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                    <li className="text-xl font-medium px-1">{user.displayName}</li>
                                    <li><button className="text-xl" onClick={handleSignOUt}>Logout</button></li>
                                </ul>
                            </div> : <NavLink
                                to="/login"
                                className="items-center hidden px-4 py-2 font-semibold text-blue-600 border border-blue-200 rounded-md hover:text-gray-100 hvr-sweep-to-top lg:flex dark:text-gray-400 dark:hover:bg-transparent dark:border-gray-300 dark:hover:text-blue-300">
                                Sign In
                            </NavLink>}
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
                            <Link href="/" className="text-3xl font-semibold leading-none dark:text-gray-400">
                                <img src="https://i.ibb.co/LQ5jG4p/logo.png" className='h-12 w-28 lg:h-16 lg:w-36' alt="" />
                            </Link>
                            <button className="p-2 rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400" onClick={() => setOpen(false)}>
                                <AiOutlineCloseCircle className="text-2xl"></AiOutlineCloseCircle>
                            </button>
                        </div>
                        <div className="flex items-center px-5 mt-7 lg:hidden">
                            <a className="items-center mr-4 text-sm font-semibold lg:flex dark:text-gray-400">
                                <CiUser className="text-2xl"></CiUser>
                            </a>
                            <a className="mr-6 dark:text-gray-400">
                                <IoMdHeartEmpty className="text-2xl text-white"></IoMdHeartEmpty>
                            </a>
                            <span className="relative inline-block mr-6 dark:text-gray-400 ">
                                <VscBell className="text-2xl text-white"></VscBell>
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
