
import Card from "../../../Shared/Card/Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import "../../../Shared/ButtonHover/ButtonHover.css"
import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Advertisement = () => {
    const axiosPublic = useAxiosPublic()
    const {data:advertisements} = useQuery({
        queryKey:['properties'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/api/v1/advertiseProperties')
            return res.data; 
        }
    })

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="mb-16  container mx-auto "
         >   
            <Title heading={"Our choice Of popular"} colorHeading={"Real estate"}></Title>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 overflow-hidden" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="5000">
            {advertisements?.map(advertise=> <Card key={advertise._id} advertise={advertise}></Card>)}
            </div> 
            <div className="mt-10 flex items-center justify-center ">
                <Link to="/allProperties"><button className="btn hvr-sweep-to-top border-zinc-950 ">Browse All Properties</button></Link>
            </div>
        </div>
    );
};

export default Advertisement;