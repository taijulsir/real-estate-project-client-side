import DashBoardNav from "./DashBoardNav";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Link, Outlet } from "react-router-dom";
import DashboardUser from "../../Routes/DashboardUser";
import DashboardAgent from "../../Routes/DashboardAgent";
import DashboardAdmin from "../../Routes/DashboardAdmin";
import useCheckRole from "../../Hooks/useCheckRole/useCheckRole";

import DashboardAvailable from "../../Routes/DashboardAvailable";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";


const DashBoard = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const { user } = useAuth()
    const [isCheckRole, isCheckRoleLoading, refetch] = useCheckRole()
    if (isCheckRoleLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const roleInfo = isCheckRole ? isCheckRole.roleInfo : null;
    const isAdmin = roleInfo ? roleInfo?.admin : false;
    const isAgent = roleInfo ? roleInfo?.agent : false;


    return (
        <div className=" font-raleway ">
             <HelmetTitle title={"MARKON REAL ESTATE || Dashboard"}></HelmetTitle>
            <div className=" dark:bg-gray-800">
                <div className={`body-content ${open ? 'open' : ''}`}>

                    {/* navlink  */}
                    <div className="relative lg:block navbar-menu">
                        <nav
                            className={`fixed top-0  transition-all lg:mt-0 z-40 mt-16 left-0 dark:bg-gray-900 bottom-0 flex flex-col ${open ? 'w-[280px]' : 'w-0'
                                } lg:border-none border-r border-gray-200 dark:border-gray-800 text-zinc-950 overflow-hidden`}
                            id="sidenav"
                        >

                            {/* website logo */}
                            <div
                                className="flex items-center w-full px-4 pt-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <Link to='/dashboard'>
                                    <div className="flex items-center ml-2">
                                        <img src="https://i.ibb.co/YZH6RwX/21eb5888117145-6050f5ffc5079-removebg-preview.png" className='h-12 w-28 lg:h-16 lg:w-56' alt="" />
                                    </div>
                                </Link>
                            </div>
                            {/* user photo and name */}
                            <div className="flex flex-wrap items-center px-4">
                                <div className="px-2">
                                    <img src={user?.photoURL}
                                        className="object-cover object-right w-10 h-10 rounded-full" alt="person" />
                                </div>
                                <div className="px-2">
                                    <span className="text-sm text-zinc-950 dark:text-gray-400 ">Welcome,</span>
                                    <h2 className="text-lg text-zinc-950 font-medium dark:text-gray-300 ">{user?.displayName}</h2>
                                </div>
                            </div>

                            {/* routes */}
                            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">

                                {/* normal user */}
                                <ul className="mb-8 text-sm">
                                    {user && !isAdmin && !isAgent && <DashboardUser></DashboardUser>}
                                </ul>
                                {/* Agetn */}
                                <ul className="mb-8 text-sm">
                                    {user && isAgent && <DashboardAgent></DashboardAgent>}
                                </ul>
                                {/* admin */}
                                <ul className="mb-8 text-sm">
                                    {user && isAdmin && <DashboardAdmin></DashboardAdmin>}
                                </ul>
                            </div>

                            <div className="divider divider-warning mt-12 px-6"></div>
                            {/* available all routes */}
                            <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                                <ul className=" list-none">
                                    <DashboardAvailable></DashboardAvailable>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto  transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}
                        <div>
                            <DashBoardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashBoardNav>
                        </div>
                        <div className=" font-raleway ">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DashBoard;