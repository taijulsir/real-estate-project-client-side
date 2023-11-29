
import Card from "../../../Shared/Card/Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import "../../../Shared/ButtonHover/ButtonHover.css"
import { Link } from "react-router-dom";
const Advertisement = () => {
    const axiosPublic = useAxiosPublic()
    const {data:advertisements} = useQuery({
        queryKey:['properties'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/advertiseProperties')
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
            <div className="mt-10 flex items-center justify-center ">
                <Link to="/allProperties"><button className="btn hvr-sweep-to-top border-zinc-950 ">Browse All Properties</button></Link>
            </div>
        </div>
    );
};

export default Advertisement;