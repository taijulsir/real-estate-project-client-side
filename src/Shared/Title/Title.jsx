/* eslint-disable react/prop-types */

const Title = ({heading,colorHeading}) => {
    return (
        <div>
            <div className="text-2xl lg:text-4xl text-zinc-950 font-bold text-center mt-16">{heading} <span className="text-green-400">{colorHeading}</span></div>
            <hr className="w-[400px] mx-auto mt-6 mb-10 border-2 border-black" />
        </div>
    );
};

export default Title;