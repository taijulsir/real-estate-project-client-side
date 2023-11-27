/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SlSizeActual } from 'react-icons/sl';
import { IoBedOutline } from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Card = ({ advertise }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    property_name,
    description,
    property_image,
    location,
    price_range,
    verification_status,
    bed,
    bath,
    size,
    agent_img,
    agent_name,
    year,
  } = advertise;

  return (
    <div className="px-5 lg:px-0">
      {/* image slider */}
      {/* <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {property_image.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-60"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={image.img}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
                <div
                  className={`agent-info absolute bottom-0 left-0 p-2 flex items-center text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={agent_img}
                    alt={agent_name}
                    className="w-12 h-12 object-cover rounded-full mr-2"
                  />
                  {agent_name}
                </div>
                <div
                  className={`heart-icon absolute top-0 right-0 p-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <IoMdHeartEmpty size={24} />
                  <div className="wishlist-text absolute -top-7 right-0 bg-black text-white p-1 rounded opacity-0 transition-opacity duration-300">
                    Add to wishlist
                  </div>
                </div>       
                <span className="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-stone-400 shadow-xl rounded-md">
                  Luxury
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <div className="p-4 bg-white dark:bg-gray-700 shadow-xl">
        <div className="flex items-center gap-1 ">
          <CiLocationOn className="text-xl" />
          <span className="hover:text-amber-700">{location}</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold dark:text-gray-300 mt-2">
              {property_name}
            </h2>
          </div>
        </div>
        <div>
          <p className="mt-2 text-sm">{description}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div>{price_range}</div>
          <div className="flex gap-2">
            <span className="flex">
              <SlSizeActual></SlSizeActual>
              {size}
            </span>
            <span className="flex">
              {' '}
              <IoBedOutline></IoBedOutline>
              {bed}
            </span>
            <span className="flex">
              {' '}
              <LiaBathSolid></LiaBathSolid>
              {bath}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
