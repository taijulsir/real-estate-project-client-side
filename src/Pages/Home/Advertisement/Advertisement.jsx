import { useEffect, useState } from "react";

const Advertisement = () => {
    const [advertisements, setAdvertisements] = useState([])
    useEffect(() => {

        fetch('/public/state.json')
            .then(res => res.json())
            .then(data => setAdvertisements(data))
    }, [])
    return (
        <div className="my-16 container mx-auto">
            <h1 className=" text-2xl lg:text-4xl">Our choice of popular real estate</h1>
            
        </div>
    );
};

export default Advertisement;