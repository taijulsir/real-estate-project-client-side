import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";
import "../../Shared/ButtonHover/ButtonHover.css"
/* eslint-disable react/prop-types */
const Card = ({ advertise }) => {
  return (
    <div className="px-5 lg:px-0">
      <div className="w-full">
        <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
          <div className="block mb-2" >
            <div className="relative overflow-hidden">
              <div className="mb-5 overflow-hidden">
                <img className="object-cover w-full mx-auto transition-all rounded-md h-72 group-hover:scale-110"
                  src={advertise.propertyImage} />
              </div>
              <div className="absolute flex flex-col top-4 right-4">
                <a className="flex items-center">
                  <div
                    className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                    <IoIosHeartEmpty className="text-2xl text-red-500"></IoIosHeartEmpty>
                  </div>
                </a>
                <a className="flex items-center">
                  <div
                    className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200 dark:hover:bg-blue-600 group">
                    <BsCart2 className="text-2xl text-green-500"></BsCart2>
                  </div>
                </a>
              </div>
            </div>
            <a >
              <h3 className="mb-2 text-xl  font-bold dark:text-white">{advertise.propertyTitle}</h3>
            </a>
            {/* agent information */}
            <div className="flex flex-wrap items-center cursor-pointer  rounded-lg w-full py-2">
              <img src={advertise.agentImage} className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-4 flex-1">
                <p className="text-lg text-black font-semibold">{advertise.agentName}</p>
                <p className="text-base text-gray-400">{advertise.agentEmail}</p>
              </div>
            </div>
            <div className="flex justify-between my-4 ">
              <p className="text-sm text-gray-400 flex items-center"><CiLocationOn className="text-2xl mr-2 text-zinc-950"></CiLocationOn> {advertise?.propertyLocation}</p>
              <p className="text-sm text-gray-400 flex items-center"><AiOutlineDollar className="text-2xl mr-2 text-zinc-600"></AiOutlineDollar> {advertise?.priceRange}</p>
              <p className="text-sm text-gray-400 flex items-center"><MdOutlineVerifiedUser className="text-2xl mr-2 text-green-600"></MdOutlineVerifiedUser> {advertise?.verified_status}</p>
            </div>

            <div className="flex gap-5">
              <Link to={`/propertyDetails/${advertise._id}`} className="w-full">
                <button className="btn border-zinc-950 hvr-sweep-to-top mt-2 text-lg w-full">Details</button>
              </Link>
              <div className="flex items-center w-full">
                <p className="flex items-center text-xl mr-2"><LiaBathSolid className="text-2xl mr-2"></LiaBathSolid> {advertise.bath} </p>
                <p className="flex items-center text-xl mr-2"><IoBedOutline className="text-2xl mr-2"></IoBedOutline> {advertise.bed} </p>
                <p className="flex items-center mr-2"><SlSizeActual className="text-xl mr-2"></SlSizeActual> {advertise.size} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
