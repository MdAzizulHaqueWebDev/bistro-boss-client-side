
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="text-center space-y-3 my-6 mt-10 md:mt-16">
            <h4 className="text-[#D99904] ">--- {subheading} ---</h4>
            <h2  className="border-y-2 w-1/3 mx-auto py-2 text-xl uppercase font-bold font-poppins">{heading}</h2>
        </div>
    );
};

export default SectionTitle;