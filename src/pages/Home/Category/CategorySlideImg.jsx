
const CategorySlideImg = ({img,title}) => {
    return (
        <div className="relative">
           <img src={img} alt="" /> 
           <h2 className="absolute text-xl font-bold uppercase text-white top-[80%] left-5">
            {title}
           </h2>
        </div>
    );
};

export default CategorySlideImg;