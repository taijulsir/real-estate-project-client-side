/* eslint-disable react/no-unescaped-entities */
import '../../Pages/ButtonHover/hover.css'
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
    return (
        <div className=" mt-10 mb-10">
            <div className="flex items-center justify-center flex-col-reverse lg:flex-row text-center p-5">
                <div className=" w-full lg:w-1/2">
                    <h1 className="mb-5 text-6xl text-white font-bold lg:ml-16">Find Your Sanctuary <br /> in Every Brick</h1>
                    <p className="mb-5 text-white">Your Home Journey Starts Here - Explore <br /> Affordable  and Elegant Properties.We'll <br /> help you find a place  you'll love. <br />We'll help you find a place you'll love</p>
                    <div className="flex items-center gap-5 justify-center">
                        <button className="px-4 py-3  text-white hvr-shutter-in-vertical-two  ">More Info</button>
                        <button className="px-4 py-3 text-white hvr-shutter-in-vertical-two ">Learn More</button>
                    </div>

                </div>
                <div className="text-center w-full lg:w-1/2">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/5a63c480-9b0d-4346-a676-42071f3e3a3f/Wn0V29cvJD.json"

                    >
                    </Player>
                </div>
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Banner;