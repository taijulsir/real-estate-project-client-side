import Title from "../../../Shared/Title/Title";


const PropertyArea = () => {
    return (
        <div className="container mx-auto ">
            <Title heading={"Choose Your Area For"} colorHeading={"Best Deals"} ></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 grid-flow-col gap-6 mt-10">
                <div className=" relative col-span-2 row-span-2 overflow-hidden transition-transform transform hover:scale-105">
                    <img
                        src="https://i.ibb.co/RQLb7Ty/top-class-villas-near-whitefield.jpg"
                        alt=""
                        className="h-full w-full object-cover rounded-xl transition-transform transform hover:scale-110 duration-1000"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">New York</h3>
                        <p className="text-lg font-bold text-white ">14 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/GR92R0Y/24.webp" alt="" className="h-[250px] w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">Newzealand</h3>
                        <p className="text-lg font-bold text-white ">12 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/km61Wmn/13.jpg" alt="" className="h-[250px] w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">Australia</h3>
                        <p className="text-lg font-bold text-white ">14 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/Zd7dtc7/banner-3.jpg" alt="" className="h-[250px] w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">Washington</h3>
                        <p className="text-lg font-bold text-white ">16 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105" >
                    <img src="https://i.ibb.co/F5w7Hq4/6441b994edbd71f2754c17fb733af948.jpg" alt="" className="h-full w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">America</h3>
                        <p className="text-lg font-bold text-white ">13 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/Hdd5ZqV/download-12.jpg" alt="" className="h-[250px] w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">New York</h3>
                        <p className="text-lg font-bold text-white ">12 listing</p>
                    </div>
                </div>
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/k3gBgwj/dark-exterior-2.webp" alt="" className="h-[250px] w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">NewZealand</h3>
                        <p className="text-lg font-bold text-white ">8 listing</p>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 overflow-hidden transition-transform transform hover:scale-105">
                    <img src="https://i.ibb.co/Bw0cWZw/download-23.webp" alt="" className="h-full w-full object-cover rounded-xl  transition-transform transform hover:scale-110 duration-1000 " />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="text-xl font-bold text-white ">Washington Dc</h3>
                        <p className="text-lg font-bold text-white ">6 listing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyArea;