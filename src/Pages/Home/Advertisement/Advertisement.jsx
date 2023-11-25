import { useEffect, useState } from "react";
import Card from "../../../Shared/Card/Card";

const Advertisement = () => {
    const [advertisements, setAdvertisements] = useState([])
    useEffect(() => {

        fetch('/public/state.json')
            .then(res => res.json())
            .then(data => setAdvertisements(data))
    }, [])
    return (
        <div className="my-16  container mx-auto ">
            <h1 className=" text-2xl lg:text-4xl  font-bold text-zinc-950">Our choice of <br />
             popular real estate</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {advertisements.map(advertise=> <Card key={advertise._id} advertise={advertise}></Card>)}
            </div> 
        </div>
    );
};

export default Advertisement;