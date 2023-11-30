
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import LatestReview from "../Latest Review/LatestReview";
import Partners from "../Partners/Partners";
import PropertyArea from "../PropertyArea/PropertyArea";
import PropertyType from "../PropertyType/PropertyType";
import Blogs from "./Blogs/Blogs";
import Team from "./Team/Team";
import HelmetTitle from "../../../Shared/HelmetTitle/HelmetTitle";


const Home = () => {
    return (
        <div className="font-raleway space-y-16">
            <HelmetTitle title={"Luxury Real Estate"}></HelmetTitle>
           <Banner></Banner> 
           <Advertisement></Advertisement>
           <Gallery></Gallery>
           <PropertyType></PropertyType>
           <PropertyArea></PropertyArea>
           <Blogs></Blogs>
           <LatestReview></LatestReview>
           <Team></Team>
           <Partners></Partners>
        </div>
    );
};

export default Home;