import Title from "../../../../Shared/Title/Title";


const Blogs = () => {
    return (
        <div className="container mx-auto">
            <div className=" p-4 font-[sans-serif]">
                <div>
                    <Title heading={"Latest news from"} colorHeading={"Real Estate"}></Title>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className=" rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img src="https://i.ibb.co/chYptpN/sin.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2">Navigating the Home Buying Process</h3>
                                <p className="text-zinc-950 text-opacity-60 text-sm">Explore the ins and outs of the home buying journey, from securing financing to closing the deal...</p>
                                <a className="mt-4 inline-block text-black font-semibold text-sm hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className=" rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img src="https://i.ibb.co/R2cYyyK/14.webp" alt="Blog Post 2" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2">Trends in Modern Home Design</h3>
                                <p className="text-zinc-950 text-opacity-60 text-sm">Discover the latest trends shaping contemporary home design. From smart home technology...</p>
                                <a className="mt-4 inline-block text-black font-semibold text-sm hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className=" rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img src="https://i.ibb.co/3Rg6C90/6.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2">The Impact of Location on Property Value</h3>
                                <p className="text-zinc-950 text-opacity-60 text-sm">Uncover the importance of location in determining property values. Learn how factors...</p>
                                <a className="mt-4 inline-block text-black font-semibold text-sm hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className=" rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img src="https://i.ibb.co/Bj9DkqV/4.jpg" alt="Blog Post 3" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2">Preparing Your Home for Sale</h3>
                                <p className="text-zinc-950 text-opacity-60 text-sm">Get ready to sell! This blog provides practical advice on preparing your home for the market. ...</p>
                                <a className="mt-4 inline-block text-black font-semibold text-sm hover:underline">Read More</a>
                            </div>
                        </div>
                        <div className=" rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                            <img src="https://i.ibb.co/X2QGghk/rrrx.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2">Investing in Real Estate Business</h3>
                                <p className="text-zinc-950 text-opacity-60 text-sm"> Delve into the world of real estate investment. Learn about different investment strategies...</p>
                                <a className="mt-4 inline-block text-black font-semibold text-sm hover:underline">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;