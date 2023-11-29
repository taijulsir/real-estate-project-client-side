import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Title from "../../../Shared/Title/Title";
import { CiStar } from "react-icons/ci";

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
        <div className="my-16">
            <Title heading={"Client's Testimonial for"} colorHeading={"Exclusive Services"}></Title>
            <div className="max-w-4xl mx-auto">
                <Swiper
                     effect={'coverflow'}
                     grabCursor={true}
                     centeredSlides={true}
                     slidesPerView={'auto'}
                     coverflowEffect={{
                       rotate: 50,
                       stretch: 0,
                       depth: 100,
                       modifier: 1,
                       slideShadows: true,
                     }}
                     pagination={true}
                     modules={[EffectCoverflow, Pagination]}
                     className="mySwiper"
                >
                    {reviews?.slice(0, 6).map(review => (
                        <SwiperSlide key={review?._id}>
                            <div className=" bg-sky-300 px-8 py-10 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)]  rounded-2xl font-[sans-serif] overflow-hidden  mt-4">
                                <div className="flex flex-col items-center">
                                    <img src={review.reviewerImage} className="w-48 h-48 rounded-full object-cover" alt={review.reviewerName} />
                                    <div className="mt-3 text-center">
                                        <p className="text-base text-zinc-950 font-bold uppercase">Name: {review.reviewerName}</p>
                                        <p className="text-base text-zinc-950 font-bold mt-4 ">Property: {review.propertyTitle}</p>
                                        <h3 className="text-white lg:text-center lg:w-1/2 mx-auto  font-bold text-xl mt-4">{review.reviewDescription}</h3>
                                        <div className="mx-auto w-max flex items-center bg-gray-900 pl-12 pr-4 py-3 rounded-full relative mt-6">
                                            <div
                                                className="absolute -left-8 w-16 h-16 rounded-full flex items-center justify-center bg-[#facc15] text-[#333] text-xl font-bold">
                                                4.0</div>
                                            <div className="flex items-center space-x-2">                             
                                           <CiStar className="text-amber-400 text-2xl"></CiStar>
                                           <CiStar className="text-amber-400 text-2xl"></CiStar>
                                           <CiStar className="text-amber-400 text-2xl"></CiStar>
                                           <CiStar className="text-amber-400 text-2xl"></CiStar>
                                           <CiStar  className="text-amber-400 text-2xl"></CiStar>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LatestReview;
