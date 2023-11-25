
import { MdOutlineDashboard } from "react-icons/md";

import DashBoardNav from "./DashBoardNav";
import { useState } from "react";


//  <div classNameName={`relative lg:block navbar-menu ${open ? 'w-[280px]' : 'w-0'}`}> first
// onClick={() => setOpen(!open)} profile
// classNameName={`mx-auto transition-all content-wrapper ${!open ? "lg:ml-0" : "lg:ml-[280px]"}`} id="dash" content main div
//  onClick={() => setOpen(!open)} falist icon
const DashBoard = () => {
    const [open, setOpen] = useState(true)
    const [dropdown,setDropdown] = useState(false)
    return (
        <div>
            <div className="bg-gray-100 xl:h-screen dark:bg-gray-800">
                <div className={`body-content ${open ? 'open' : ''}`}>

                    {/* navlink  */}
                    <div className="relative lg:block navbar-menu">
                        <nav
                            className={`fixed top-0 transition-all lg:mt-0 z-40 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${open ? 'w-[280px]' : 'w-0'
                                } lg:border-none border-r border-gray-200 dark:border-gray-800 bg-gray-50 overflow-hidden`}
                            id="sidenav"
                        >
                            <div
                                className="flex items-center w-full px-4 pt-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <a href="#">
                                    <div className="flex items-center ml-2">
                                        <h2 className="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                                            Your Logo </h2>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center px-4">
                                <div className="px-2">
                                    <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg"
                                        className="object-cover object-right w-10 h-10 rounded-full" alt="person" />
                                </div>
                                <div className="px-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 ">Welcome,</span>
                                    <h2 className="text-lg font-medium dark:text-gray-300 ">John Doe</h2>
                                </div>
                            </div>
                            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                                <ul className="mb-8 text-sm">
                                    <li>
                                        <a href="#"
                                            className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                                            <span className="inline-block mr-3">
                                                <MdOutlineDashboard></MdOutlineDashboard>
                                            </span>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                                            <span className="inline-block mr-3">
                                                <MdOutlineDashboard></MdOutlineDashboard>
                                            </span>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                                            <span className="inline-block mr-3">
                                                <MdOutlineDashboard></MdOutlineDashboard>
                                            </span>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* content side */}
                    <div
                        className={`mx-auto transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`}
                        id="dash"
                    >
                        {/* navbar */}
                    <div>
                        <DashBoardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashBoardNav>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DashBoard;