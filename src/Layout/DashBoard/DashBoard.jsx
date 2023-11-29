import DashBoardNav from "./DashBoardNav";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Link, Outlet } from "react-router-dom";
import DashboardUser from "../../Routes/DashboardUser";
import DashboardAgent from "../../Routes/DashboardAgent";
import DashboardAdmin from "../../Routes/DashboardAdmin";
import useCheckRole from "../../Hooks/useCheckRole/useCheckRole";
const DashBoard = () => {
    const [open, setOpen] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const { user } = useAuth()
    const [isCheckRole,isCheckRoleLoading,refetch] = useCheckRole()
    if(isCheckRoleLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const roleInfo = isCheckRole? isCheckRole.roleInfo : null;
    const isAdmin = roleInfo ? roleInfo?.admin : false;
    const isAgent = roleInfo ? roleInfo?.agent: false;

    
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

                            {/* website logo */}
                            <div
                                className="flex items-center w-full px-4 pt-4 pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                                <Link to='/dashboard'>
                                    <div className="flex items-center ml-2">
                                        <img src="https://i.ibb.co/LQ5jG4p/logo.png" className='h-12 w-28 lg:h-16 lg:w-36' alt="" />
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
                                    <span className="text-sm text-gray-500 dark:text-gray-400 ">Welcome,</span>
                                    <h2 className="text-lg font-medium dark:text-gray-300 ">{user?.displayName}</h2>
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
                        </nav>
                    </div>

                    {/* content side */}
                    <div className={`mx-auto transition-all content-wrapper ${!open ? 'lg:ml-0' : 'lg:ml-[280px]'}`} id="dash">
                        {/* navbar */}
                        <div>
                            <DashBoardNav open={open} setOpen={setOpen} dropdown={dropdown} setDropdown={setDropdown}></DashBoardNav>
                        </div>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default DashBoard;