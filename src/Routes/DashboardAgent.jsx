import { FaBook, FaHeart, FaList, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashboardAgent = () => {
    return (
        <div>
            <li>
                <Link
                to="agentProfile"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                    </span>
                    <span>Agent Profile</span>
                </Link>
            </li>
            <li>
                <Link
                to="addProperty"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaHeart className="text-2xl"></FaHeart>
                    </span>
                    <span>Add Property</span>
                </Link>
            </li>
            <li>
                <Link
                to="addedProperties"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaSuperpowers className="text-2xl"></FaSuperpowers>
                    </span>
                    <span>My Added Properties</span>
                </Link>
            </li>
            <li>
                <Link
                to="soldProperties"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaBook className="text-2xl"></FaBook>
                    </span>
                    <span>My Sold Properties</span>
                </Link>
            </li>
            <li>
                <Link
                to="requestedProperties"
                    className="flex items-center px-6 py-4 text-white dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaList className="text-2xl"></FaList>
                    </span>
                    <span>Requested Properties</span>
                </Link>
            </li>
        </div>
    );
};

export default DashboardAgent;