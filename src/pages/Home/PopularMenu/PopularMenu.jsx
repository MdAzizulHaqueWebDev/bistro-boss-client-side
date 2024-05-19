/** @format */

import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItemCard/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
	const [menu, loading] = useMenu();
	const popularMenus = menu.filter(
		(item) => item.category.toLowerCase() === "popular",
	);
	if (loading) return <p className="text-4xl text-red-700">loading .....</p>;
	return (
		<>
			<SectionTitle
				heading={"from our menu"}
				subheading={"Popular Menu Items"}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 ">
				{popularMenus.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
			<div className="text-center my-4">
				<Link to={"/our-menu"}>
					<span className="btn btn-outline border-0 btn-warning border-b-4 ">
						View All Menu
					</span>
				</Link>
			</div>
		</>
	);
};

export default PopularMenu;
