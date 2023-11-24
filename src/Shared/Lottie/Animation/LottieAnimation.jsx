/* eslint-disable react/prop-types */
import Lottie from "lottie-react";


const LottieAnimation = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
             <Lottie
                    animationData={animationData}
                    options={defaultOptions}
                    height={400}
                    width={400}>
                </Lottie>
        </div>
    );
};

export default LottieAnimation;