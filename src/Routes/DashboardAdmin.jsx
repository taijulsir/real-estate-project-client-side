import { FaBook, FaHeart, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashboardAdmin = () => {
    return (
        <div>
            <li>
                <Link
                to="adminProfile"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard></MdOutlineDashboard>
                    </span>
                    <span>Admin Profile</span>
                </Link>
            </li>
            <li>
                <Link
                to="manageUsers"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaHeart></FaHeart>
                    </span>
                    <span>Manage Users</span>
                </Link>
            </li>
            <li>
                <Link
                
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaSuperpowers></FaSuperpowers>
                    </span>
                    <span>Manage Properties</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaBook></FaBook>
                    </span>
                    <span>Manage Reviews</span>
                </Link>
            </li>
        </div>
    );
};

export default DashboardAdmin;