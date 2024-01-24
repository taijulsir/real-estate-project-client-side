
import "../../../Shared/ButtonHover/ButtonHover.css"
import houseVideo from "../../../../public/pexels-kindel-media-7578555 (720p).mp4"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const HomeBanner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="w-full h-[700px] flex  bg-center object-cover bg-no-repeat font-raleway" style={{ backgroundImage: 'url(https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/h1-img-5.jpg) ' }}  >
            <div>
                {/* Title and button */}
                <div className="container mx-auto mt-40 "
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="3500"
                >
                    <h1 className="text-[90px] font-bold text-slate-200 mb-8 ml-16">Modern Home</h1>
                    <Link to="/allProperties"><button className="btn hvr-sweep-to-top border border-zinc-950 ml-16">Explore Now</button></Link>
                </div>
                <div className="mt-[116px] hidden  lg:flex" >
                    <div className="ml-[290px] w-[950px] h-52 bg-zinc-900 border boreder-white shadow-md"
                        >
                        <div className="flex items-center justify-between p-20 text-white" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="5000">
                            <div className=" flex-1">
                                <h3 className="text-xl font-bold">Modern <br />Architecture</h3>
                            </div>
                            <div className="w-2/3 mx-auto">
                                <p>We created both a modern exterior and interior for your future home. This house includes a neat interior design for those interested in minimalism.</p>
                            </div>
                        </div>

                    </div>
                    <video autoPlay muted loop className="w-[500px] h-52 object-cover">
                        <source src={houseVideo} type="video/mp4" />
                    </video>
                </div>
            </div>


        </div>
    );
};

export default HomeBanner;