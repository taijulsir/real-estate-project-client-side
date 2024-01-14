import Marquee from "react-fast-marquee";
import Title from "../../../Shared/Title/Title";

const Partners = () => {
    return (
        <div>
            <Title heading={"Our Trusted"} colorHeading={"Partners"}></Title>
            <div className="pb-5">
            <Marquee className="pt-5 pb-5" pauseOnHover={true} speed={50}>
                <img className="mr-12" src="https://i.ibb.co/pQJLT3Y/partner5-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/0jGDqdd/partner4-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/mvZ82JG/partner3-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/zHhG5cS/company-logo-06.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/YB6pydb/partner2-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/DQ9n1ss/partner1-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/YB6pydb/partner2-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQJLT3Y/partner5-removebg-preview.png" alt="" />
            </Marquee>
        </div>
        </div>
    );
};

export default Partners;