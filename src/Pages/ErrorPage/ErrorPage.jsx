import LottieAnimation from "../../Shared/Lottie/Animation/LottieAnimation";
import error from "../../Shared/Lottie/Animation - 1700797183774.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <>
            <div className="lg:w-[800px] lg:h-[700px] lg:mx-auto">
                <LottieAnimation animationData={error}></LottieAnimation>
            </div>
            <div className="text-center mt-20">
                <Link to='/'><button className="btn bg-teal-500 font-bold">Go Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;