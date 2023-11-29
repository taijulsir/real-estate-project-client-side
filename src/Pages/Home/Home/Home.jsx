import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import LatestReview from "../Latest Review/LatestReview";
import PropertyArea from "../PropertyArea/PropertyArea";
import PropertyType from "../PropertyType/PropertyType";
import Blogs from "./Blogs/Blogs";


const Home = () => {
    return (
        <div className="font-raleway space-y-16">
           <Banner></Banner> 
           <Advertisement></Advertisement>
           <Gallery></Gallery>
           <PropertyType></PropertyType>
           <PropertyArea></PropertyArea>
           <Blogs></Blogs>
           <LatestReview></LatestReview>
        </div>
    );
};

export default Home;