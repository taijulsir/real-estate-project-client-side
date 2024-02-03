import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Card from "../../Shared/Card/Card";
import { useState } from "react";
import "../../Shared/ButtonHover/ButtonHover.css"
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";

// const filterBy = (value, range) => {
//     console.log(value)
//     const data = [];
//     const [min, max] = range.split('-')
//     value.forEach((item) => {
//         console.log(item)
//         const [itemMin, itemMax] = item.priceRange.split('-')
//         if (parseInt(itemMin) >= parseInt(min)) {
//             if (parseInt(itemMax) <= parseInt(max)) {
//                 data.push(item)
//             }
//         }
//     })
//     return data;
// }

const filterBy = (data, searchValue) => {
    return data.filter(item =>
        item.propertyTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
};


const ALlProperties = () => {
    const [priceRange, setPriceRange] = useState('')
    const [sortingOption, setSortingOption] = useState('low-to-high')
    const [searchValue, setSearchValue] = useState('')
    const [properties, setProperties] = useState([])
    const axiosPublic = useAxiosPublic()
    const { data: allProperties = [], refetch } = useQuery({
        queryKey: ['allProperties', sortingOption, priceRange,searchValue],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/properties/verified/filtered')
            setProperties(res.data)
            return res.data;
        }
    })



    const sortData = (allProperties, sortingOption) => {
        console.log(allProperties);
        console.log(sortingOption);
        const sortedData = [...allProperties];
        if (sortingOption === 'low-to-high') {
            sortedData.sort((a, b) => parseInt(a.priceRange) - parseInt(b.priceRange));
        } else if (sortingOption === 'high-to-low') {
            sortedData.sort((a, b) => parseInt(b.priceRange) - parseInt(a.priceRange));
        }
        console.log(sortedData);
        return sortedData;
    };
  
    // const filteredData = searchValue ? filterBy(allProperties, priceRange) : [...allProperties];

    // Filter based on searchValue
    const filteredData = searchValue
        ? filterBy(allProperties, searchValue)
        : [...allProperties];

    // Sort the filteredData based on sortingOption
    const sortedData = sortData(filteredData, sortingOption);



    // by this filter by price change
    // const sortedData = !priceRange ? allProperties : sortData(filterBy(allProperties, priceRange), sortingOption);

    const handleSortingOptions = (value) => {
        setSortingOption(value)
        refetch()
    }
    const handleSortingOnPriceRange = (value) => {
        setPriceRange(value)
        refetch()
    }
    const handleSearch = (e) => {
        e.preventDefault()
        const value = e.target.search.value;
        setSearchValue(value)
    }
    return (
        <div>
             <HelmetTitle title={"Markon Estate || All Properties"}></HelmetTitle>
            <div>
                <Banner></Banner>
            </div>
            {/* all products */}
            <h3 className="mt-10 text-center text-3xl lg:text-5xl font-bold ">Explore Our ALL Properties</h3>
            <hr className="w-[400px] mx-auto mt-10 border-2" />

            {/* sorting option */}
            <div className="container mx-auto lg:mt-10 mt-5">
                <div className="flex justify-end items-center gap-10">
                    <form onSubmit={handleSearch}>
                        <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden font-[sans-serif">
                            <input name="search" type="text" placeholder="Search Something..." className="w-full outline-none bg-white pl-4 text-sm" />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                    {/* based on high to low or low to high */}
                    <div className="bg-gray-400 px-3 py-2">
                        <label>
                            <select className="bg-gray-400 outline-none text-zinc-950 font-medium" value={sortingOption} onChange={(e) => handleSortingOptions(e.target.value)}>
                                <option value="low-to-high">Price Low to High</option>
                                <option value="high-to-low">Price High to Low</option>
                            </select>
                        </label>
                    </div>

                    {/* price range short */}
                    <div className="bg-gray-400 px-3 py-2">
                        <label>
                            <select className="bg-gray-400 outline-none text-zinc-950 font-medium" value={priceRange} onChange={(e) => handleSortingOnPriceRange(e.target.value)}>
                                <option value="">All</option>
                                <option value="300000-500000">$3,00,000 - $5,00,000</option>
                                <option value="600000-900000">$6,00,000 - $9,00,000</option>
                                <option value="1000000-1500000">$10,00,000 - $15,00,000</option>
                            </select>
                        </label>
                    </div>

                </div>
            </div>


            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {sortedData.map(properties => <Card key={properties._id} advertise={properties}></Card>)}
            </div>
        </div>
    );
};

export default ALlProperties;










