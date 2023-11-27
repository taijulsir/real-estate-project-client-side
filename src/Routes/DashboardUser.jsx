import { FaBook, FaHeart, FaSuperpowers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashboardUser = () => {
    return (
        <div>
            <li>
                <Link
                to="usersProfile"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard></MdOutlineDashboard>
                    </span>
                    <span>My Profile</span>
                </Link>
            </li>
            <li>
                <Link
                to="wishlist"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaHeart></FaHeart>
                    </span>
                    <span>Wishlist</span>
                </Link>
            </li>
            <li>
                <Link
                to="propertyBought"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaSuperpowers></FaSuperpowers>
                    </span>
                    <span>Property Bought</span>
                </Link>
            </li>
            <li>
                <Link
                to="myReviews"
                    className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                    <span className="inline-block mr-3">
                        <FaBook></FaBook>
                    </span>
                    <span>My Reviews</span>
                </Link>
            </li>
        </div>
    );
};

export default DashboardUser;