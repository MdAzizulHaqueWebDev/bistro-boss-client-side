/** @format */

import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../shared/FoodCard/FoodCard";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const ChefRecommend = () => {
	const [menu] = useMenu();
	return (
		<>
			<SectionTitle heading={"CHEF RECOMMENDS"} subheading={"Should Try"} />
			<section className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2  gap-6 my-6">
					{menu.slice(0, 6).map((item) => (
						<FoodCard key={item._id} item={item} />
					))}
				</div>
			</section>
		</>
	);
};

export default ChefRecommend;
