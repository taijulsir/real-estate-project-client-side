import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Card from "../../Shared/Card/Card";


const ALlProperties = () => {
    const axiosPublic = useAxiosPublic()
    const { data: allProperties = [], refetch } = useQuery({
        queryKey: ['allProperties'],
        queryFn: async () => {
            const res = await axiosPublic.get('/properties/verified')
            return res.data;
        }
    })

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            {/* all products */}
            <h3 className="mt-10 text-center text-3xl lg:text-5xl font-bold ">Explore Our ALL Properties</h3>
            <hr className="w-[400px] mx-auto mt-10 border-2" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {allProperties.map(properties => <Card key={properties._id} advertise={properties}></Card>)}
            </div>
        </div>
    );
};

export default ALlProperties;