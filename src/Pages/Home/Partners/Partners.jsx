import Marquee from "react-fast-marquee";
import Title from "../../../Shared/Title/Title";

const Partners = () => {
    return (
        <div>
            <Title heading={"Our Trusted"} colorHeading={"Partners"}></Title>
            <div className="pb-5">
            <Marquee className="pt-5 pb-5" pauseOnHover={true} speed={50}>
                <img className="mr-12" src="https://i.ibb.co/2cgZY80/company-logo-01.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NjnBXV5/company-logo-03.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NrKLnfF/company-logo-05.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/zHhG5cS/company-logo-06.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/2cgZY80/company-logo-01.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NjnBXV5/company-logo-03.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NrKLnfF/company-logo-05.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/zHhG5cS/company-logo-06.png" alt="" />
            </Marquee>
        </div>
        </div>
    );
};

export default Partners;