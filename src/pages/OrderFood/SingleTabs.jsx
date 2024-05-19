import FoodCard from "../../shared/FoodCard/FoodCard";

const SingleTabs = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {items.map((item) => <FoodCard key={item._id} item={item} /> )}
        </div>
    );
};

export default SingleTabs;