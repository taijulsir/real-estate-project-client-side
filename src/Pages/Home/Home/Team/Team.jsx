import { MdVerified } from 'react-icons/md';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Title from '../../../../Shared/Title/Title';


const Team = () => {
    return (
        <div>
            <Title heading={"Meet Our Exclusive"} colorHeading={"Team Member"} ></Title>
            <div className='container mx-auto '>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        // When window width is >= 640px
                        425: {
                            slidesPerView: 1,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    {/* slide 1 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/G9b4sTz/kW9o.jpg' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center">"Brings a wealth of experience to our team as our Lead Real Estate Agent. With a proven track record of successful transactions and a deep understanding of the local market!." </p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 ">Sarah Johnson</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>Marketing Manager</p>
                        </div>
                    </SwiperSlide>


                    {/* Slider 2 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/XtGHyH7/istockphoto-1159212661-612x612.jpg' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center"> "Brings a wealth of experience to our team as our Lead Real Estate Agent. With a proven track record of successful transactions and a deep understanding of the local market."</p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 ">Michael Rodriguez</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>Graphic Designer</p>
                        </div>
                    </SwiperSlide>

                    {/* Slider 3 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/qpYffk3/hhhg.jpg' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center">One of the friendly face you'll encounter when you join our real estate journey. As our Client Relations Coordinator, he is committed to providing exceptional customer service. </p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 ">Emily Chen</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>UX Designer</p>
                        </div>
                    </SwiperSlide>

                    {/* Slider 4 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/n3q8zyX/download-10.jpg' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center"> "Brings a wealth of experience to our team as our Lead Real Estate Agent. With a proven track record of successful transactions and a deep understanding of the local market" </p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 "> James Wilson</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>Marketing Manager</p>
                        </div>
                    </SwiperSlide>

                    {/* slider 5 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/6bNG2mV/depositphotos-150975580-stock-photo-portrait-of-businesswoman-in-office.webp' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center"> "Our creative force behind property marketing. As our Marketing Specialist, she combines her passion for real estate with innovative marketing strategies to showcase your property" </p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 "> Maria Gonzalez</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>Content Marketer</p>
                        </div>
                    </SwiperSlide>


                    {/* Slider 6 */}
                    <SwiperSlide>
                        <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                            <div className="flex items-center justify-center mt-10 mb-6">
                                <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/yhkkyqv/1.jpgg' alt="" />

                            </div>
                            <p className=" text-base text-zinc-950 font-bold capitalize px-6 mb-6 text-center">"David is the friendly face you'll encounter when you join our real estate journey. As our Client Relations Coordinator, he is committed to providing exceptional customer service. "</p>
                            <div className="rating rating-sm flex justify-center mb-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="flex items-center justify-center mb-1">
                                <h1 className=" text-xl font-bold text-zinc-950 capitalize mr-1 ">David Lee</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                            <p className='text-xl font-semibold text-zinc-950 text-center mb-5'>Marketing Manager</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Team;