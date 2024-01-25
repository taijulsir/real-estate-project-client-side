import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Pagination,A11y } from 'swiper/modules';

import { CiStar } from "react-icons/ci";
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestReview = () => {
    const axiosPublic = useAxiosPublic();
    const { data: reviews = [] } = useQuery({
        queryKey: ['customerReveiew'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/allReviews');
                return res.data;
            } catch (error) {
                console.error('Error fetching reviews:', error.message);
                throw error;
            }
        }
    });
    console.log(reviews)
    return (
        <div className="my-16 bg-[#F2F6F6] py-16">
            <div className=" max-w-6xl mx-auto flex justify-between items-center flex-col lg:gap-10 lg:flex-row">
                {/* image */}
                <div className=" flex-1">
                    <img src="https://i.ibb.co/vJ6sHhp/property-review.png" alt="" className="lg:h-[450px] w-[450px] object-cover" />
                </div>
                {/* slider */}
                <div className="lg:w-3/5 w-4/5">
                    <Swiper
              
                        modules={[Navigation,Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        className=" w-full"
                    >
                        {
                            reviews?.slice(0, 6).map(review => <SwiperSlide key={review._id}>
                                <div className="">
                                    {/* heding */}
                                    <div className="flex items-center mb-3 justify-end">
                                        <div className="bg-[#0E82FD] w-[50px] h-1 content-['']"></div>
                                        <div>
                                            <h1 className="text-[#0E82FD] text-3xl font-semibold mx-5 ">Happy Clients</h1>
                                        </div>
                                        <div className="bg-[#0E82FD] w-[50px] h-1 content-['']"></div>
                                    </div>
                                    {/* title */}
                                    <h1 className="text-[#1F2937] flex justify-end font-bold text-4xl mb-10 ">Our Clients Feedback About Us</h1>

                                    {/* review description */}
                                    <div className="bg-[#fff]  font-libreFranklin py-5 px-6 mt-24 rounded-3xl">
                                        <div className=" flex justify-between">
                                            <h3 className="text-zinc-950 text-lg font-medium"> March 03,2023</h3>
                                            <div>
                                                <img src={review.reviewerImage} alt="" className="h-[100px] w-[100px] rounded-xl bg-sky-200 -mt-[80px] object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <CiStar className="text-amber-400 text-2xl"></CiStar>
                                            <CiStar className="text-amber-400 text-2xl"></CiStar>
                                            <CiStar className="text-amber-400 text-2xl"></CiStar>
                                            <CiStar className="text-amber-400 text-2xl"></CiStar>
                                            <CiStar className="text-amber-400 text-2xl"></CiStar>
                                        </div>
                                        <p className=" mx-auto my-5 text-base text-[#858484]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium expedita beatae excepturi quibusdam itaque veritatis molestiae cumque eaque! At totam exercitationem voluptatum ipsa laudantium nulla esse quas. Ullam magnam ea voluptatum laboriosam esse. Explicabo assumenda, quaerat a magni quam quia doloribus quidem nesciunt distinctio, facere qui enim voluptatum rerum.</p>
                                        <h3 className="text-2xl font-bold text-[#282828]">{review.reviewerName}</h3>
                                        <h4 className="my-2">Texas,Usa</h4>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                        <SwiperNavButton />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LatestReview;
