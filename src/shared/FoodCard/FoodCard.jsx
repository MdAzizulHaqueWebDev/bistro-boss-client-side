/** @format */

const FoodCard = ({ item }) => {
	const { image, price, name, recipe } = item || {};
	return (
		<div>
			<div className="card relative border-2 rounded-none w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={image} className="w-full" />
				</figure>
				<p className="bg-black text-white right-3 px-2 top-2 absolute">
					${price}
				</p>
				<div className="card-body items-center text-center">
					<h2 className="card-title ">{name}</h2>
					<p> {recipe.slice(0, 50)}.....</p>
					<div className="card-actions">
						<button className="btn btn-accent">Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
