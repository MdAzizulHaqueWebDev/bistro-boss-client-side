
const MenuItem = ({item}) => {
    const {image,price,name ,recipe} = item || {}
    return (
        <div className="flex space-x-2">
            <img className="w-[100px]" style={{
            borderRadius:"0 205px 205px 205px"
            }} src={image} alt="" />
            <div>
                <h2 className="font-cinzel font-medium text-xl">{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] ">
               $ {price}
            </p>
        </div>
    );
};

export default MenuItem;