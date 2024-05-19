/** @format */

import { Link } from "react-router-dom";
import MenuItem from "../../../shared/MenuItemCard/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, subtitle, bgImg }) => {
	return (
		<>
			{title && <Cover title={title} img={bgImg} subtitle={subtitle} />}
			<div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 my-8 ">
				{items.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
			<div className="text-center">
				{title && (
					<Link to={`/order-food/${title}`}>
						<button className="btn  btn-warning hover:bg-orange-100 btn-outline border-0 border-b-4">
							Order Your Favorite Food
						</button>
					</Link>
				)}
			</div>
		</>
	);
};

export default MenuCategory;
