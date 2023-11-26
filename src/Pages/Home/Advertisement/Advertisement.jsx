
import Card from "../../../Shared/Card/Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

const Advertisement = () => {
    const axiosPublic = useAxiosPublic()
    const {data:advertisements} = useQuery({
        queryKey:['properties'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/properties')
            return res.data;
        }
    })
    return (
        <div className="my-16  container mx-auto ">
            <h1 className=" text-2xl lg:text-4xl  font-bold text-zinc-950">Our choice of <br />
             popular real estate</h1>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {advertisements?.map(advertise=> <Card key={advertise._id} advertise={advertise}></Card>)}
            </div> 
        </div>
    );
};

export default Advertisement;