import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import LatestReview from "../Latest Review/LatestReview";


const Home = () => {
    return (
        <div className="font-libreFranklin">
           <Banner></Banner> 
           <Advertisement></Advertisement>
           <LatestReview></LatestReview>
        </div>
    );
};

export default Home;