import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const LatestReview = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['customerReveiew'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allReviews')
            return res.data
        }
    })

    const sortedReviews = reviews.sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime))

    return (
        <div className="my-16">
            <h3 className="text-3xl font-bold text-center">What Our Customer Says</h3>

            <div className=" lg:w-1/2 mx-auto">
                <>
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
                        {sortedReviews?.slice(0, 6).map(sort => <SwiperSlide key={sort?._id}>
                            <div
                                className=" bg-amber-600 px-8 py-10 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)]  rounded-2xl font-[sans-serif] overflow-hidden  mt-4">
                                <div className="flex flex-col items-center">
                                    <img src={sort.reviewerImage} className="w-60 h-60 rounded-full" />
                                    <div className="mt-6 text-center">
                                        <p className="text-base text-gray-400 font-bold uppercase">{sort.reviewerName}</p>
                                        <h3 className="text-white font-bold text-xl mt-4">{sort.reviewDescription}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default LatestReview;