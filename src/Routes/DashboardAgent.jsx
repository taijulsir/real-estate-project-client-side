import { FaBook, FaHeart, FaList, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashboardAgent = () => {
    return (
        <div>
            <li>
                <Link
                to="agentProfile"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard></MdOutlineDashboard>
                    </span>
                    <span>Agent Profile</span>
                </Link>
            </li>
            <li>
                <Link
                to="addProperty"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaHeart></FaHeart>
                    </span>
                    <span>Add Property</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaSuperpowers></FaSuperpowers>
                    </span>
                    <span>My Added Properties</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaBook></FaBook>
                    </span>
                    <span>My Bought Properties</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaList></FaList>
                    </span>
                    <span>Requested Properties</span>
                </Link>
            </li>
        </div>
    );
};

export default DashboardAgent;