/* eslint-disable react/prop-types */


const BannerFeatures = ({icon:Icon,heading,description,bgColor}) => {
    return (
        <div>
            <div className={`w-full p-8 mb-10 text-center transition-all shadow lg:mb-0 ${bgColor}`}>
                <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                <Icon size={32} color="#000" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">{heading}</h2>
                <p className="text-base text-gray-300 dark:text-gray-300">
                   {description}
                </p>
            </div>
        </div>
    );
};

export default BannerFeatures;