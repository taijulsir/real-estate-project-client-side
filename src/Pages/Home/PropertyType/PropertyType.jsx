import Title from "../../../Shared/Title/Title";

// type data
const property =[
    {
      "id": 1,
      "propertyImage": "https://i.ibb.co/34yfDk1/cm.jpg",
      "type": "Commercial",
      "category": "Luxury",
      "listing": 15
    },
    {
      "id": 2,
      "propertyImage": "https://i.ibb.co/RQq4CXx/res.jpg",
      "type": "Residential",
      "category": "Modern",
      "listing": 10
    },
    {
      "id": 3,
      "propertyImage": "https://i.ibb.co/chYptpN/sin.jpg",
      "type": "Single family ",
      "category": "Historic",
      "listing": 12
    },
    {
      "id": 4,
      "propertyImage": "https://i.ibb.co/xSKDhcF/apa3.jpg",
      "type": "Apartment",
      "category": "Contemporary",
      "listing": 8
    },
    {
      "id": 5,
      "propertyImage": "https://i.ibb.co/FqzXjQm/condo.jpg",
      "type": "Condo",
      "category": "Rustic",
      "listing": 15
    },
    
  ]
  
const PropertyType = () => {
    return (
        <div className="mt-16">
            <Title heading={"What Kind of "} colorHeading={"Property Looking?!"}></Title>
            <p className="text-xl text-center text-zinc-950">Our Listing Properties Type</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto">
            {property?.map(type =>
                <div key={type.id} className="card ">
                    <figure className="relative  overflow-hidden transform transition-transform duration-500 ease-in-out animate-pulse hover:scale-110"><img src={type.propertyImage} alt="Shoes" className="h-[300px] object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-zinc-950">
                           {type.type}
                            <div className="badge badge-secondary">{type.category}</div>
                        </h2>
                       <p className="text-lg text-opacity-60 font-medium text-zinc-950">Listing: {type.listing}</p>
                    </div>
                </div>)}
            </div>
            
        </div>
    );
};

export default PropertyType;