/* eslint-disable react/no-unescaped-entities */
import "../../Shared/ButtonHover/ButtonHover.css"
import LottieAnimation from "../../Shared/Lottie/Animation/LottieAnimation";
import meetingAnimation from "../../Shared/Lottie/Animation - 1701207898842.json"

const Banner = () => {
    return (
        <>
        {/* banner */}
            <div className=" mt-10 mb-10">
                <div className="flex items-center justify-center flex-col-reverse lg:flex-row text-center p-5">
                    <div className=" w-full lg:w-1/2">
                        <h1 className="mb-5 text-6xl text-zinc-950  font-bold lg:ml-16">Find Your Sanctuary <br /> in Every Brick</h1>
                        <p className="mb-5  text-zinc-950">Your Home Journey Starts Here - Explore <br /> Affordable  and Elegant Properties.We'll <br /> help you find a place  you'll love. <br />We'll help you find a place you'll love</p>
                        <div className="flex items-center gap-5 justify-center">
                            <button className="px-4 py-3 border  hvr-sweep-to-top border-zinc-950 text-zinc-950 ">More Info</button>
                            <button className="px-4 py-3 border hvr-sweep-to-top border-zinc-950 text-zinc-950">Learn More</button>
                        </div>

                    </div>
                    <div className="text-center w-full lg:w-1/2">
                        <LottieAnimation animationData={meetingAnimation}></LottieAnimation>
                    </div>
                </div>
                {/* <hr className="w-[400px] mx-auto mt-20 border-2" /> */}
            </div>
        </>

    );
};

export default Banner;