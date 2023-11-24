import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../../../Shared/ButtonHover/ButtonHover.css"
import BannerFeatures from '../../../Shared/BannerFeatures/BannerFeatures';
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";


const Banner = () => {
    const banners = [
        {
            "propertyTitle": "Luxury Penthouse with Panoramic Views",
            "propertyImage": "https://i.ibb.co/kKYqk5Q/banner-4.jpg",
            "propertyDescription": "Experience unparalleled luxury in this breathtaking penthouse. Enjoy stunning panoramic views of the city skyline and top-notch amenities."
        },
        {
            "propertyTitle": "Rustic Cottage in the Countryside",
            "propertyImage": "https://i.ibb.co/Zd7dtc7/banner-3.jpg",
            "propertyDescription": "Escape to the tranquility of the countryside with this charming rustic cottage. Embrace nature and serenity in a cozy and inviting setting."
        },
        {
            "propertyTitle": "Contemporary Townhome with Open Floor Plan",
            "propertyImage": "https://i.ibb.co/VQB2sdX/banner-2.jpg",
            "propertyDescription": "Discover the perfect blend of modern design and functionality in this contemporary townhome. The open floor plan creates a spacious and inviting atmosphere."
        },
        {
            "propertyTitle": "Seaside Retreat with Private Beach Access",
            "propertyImage": "https://i.ibb.co/cYs8GBM/banner-1.jpg",
            "propertyDescription": "Indulge in the ultimate seaside living experience with this exquisite retreat. Enjoy direct access to a private beach and breathtaking ocean views."
        }
    ]


    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {banners.map((banner, index) => <SwiperSlide key={index}>
                    <section className="relative pb-8 h-[750px] ">
                        <div>
                            <img src={banner.propertyImage}
                                className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" alt="" />
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75">
                                <div className="z-10 max-w-5xl px-4 mx-auto text-center">

                                    <h2
                                        className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                                        {banner.propertyTitle}
                                    </h2>
                                    <p className="mb-8 text-base leading-8 lg:w-2/3 mx-auto text-gray-400 lg:text-xl">
                                        {banner.propertyDescription} </p>
                                    <a className="block hvr-sweep-to-top px-5 py-3 text-sm font-semibold text-center text-indigo-500 transition duration-200 bg-white border border-white rounded md:inline-block hover:bg-indigo-50 hover:border-indigo-50"
                                    > Explore More </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* key features */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 relative mt-0 lg:-mt-[90px] z-10 rounded">
                        <div>
                            <BannerFeatures bgColor="bg-red-600" icon={BsHouseDoor} heading={"Find Your Dream Home"} description={"Explore a wide range of properties and find the perfect home that suits your lifestyle."}></BannerFeatures>
                        </div>
                        <div>
                            <BannerFeatures bgColor="bg-green-600" icon={HiOutlineCurrencyDollar} heading={"Competitive Pricing"} description={"Enjoy competitive pricing on a variety of real estate options, ensuring value for your investment."}></BannerFeatures>
                        </div>
                        <div>
                            <BannerFeatures bgColor="bg-red-600" icon={MdOutlineMedicalServices} heading={"Property Management Services"} description={"Simplify property management with our comprehensive services and modern solutions."}></BannerFeatures>
                        </div>
                        <div>
                            <BannerFeatures bgColor="bg-green-600" icon={MdOutlineVerified} heading={"Verified Listings"} description={" Explore our collection of verified listings, ensuring the authenticity and quality of each property on our platform."}></BannerFeatures>
                        </div>

                    </div>

                </SwiperSlide>)}
            </Swiper>

        </div>
    );
};

export default Banner;