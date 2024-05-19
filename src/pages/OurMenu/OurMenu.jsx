/** @format */

import { Helmet } from "react-helmet-async";
import Cover from "./Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
const OurMenu = () => {
	const [menu, loading] = useMenu();
	const dessert = menu.filter(
		(item) => item.category.toLowerCase() === "dessert",
	);
	const soup = menu.filter((item) => item.category.toLowerCase() === "soup");
	const salad = menu.filter((item) => item.category.toLowerCase() === "salad");
	const pizza = menu.filter((item) => item.category.toLowerCase() === "pizza");
	const offered = menu.filter(
		(item) => item.category.toLowerCase() === "offered",
	);
	return (
		<>
			<Helmet>
				<title>Our Menu | Bistro Boss</title>
			</Helmet>

			<Cover img={menuBg} title={"Our Menu"} subtitle={"Explore More Here"} />
			{/* offered section */}
			<section>
				<SectionTitle heading={"Today's Offers"} subheading={"Don't Miss"} />
				<MenuCategory items={offered}></MenuCategory>
			</section>
			<div className="space-y-8 my-6">
				{/* dessert section */}
				<MenuCategory
					bgImg={dessertBg}
					items={dessert}
					title={"dessert"}
					subtitle={"Explore Delicious Dessert Cake"}
				/>
				{/* pizza section */}
				<MenuCategory
					bgImg={pizzaBg}
					items={pizza}
					title={"pizza"}
					subtitle={"Explore Delicious Pizza "}
				/>
				{/* salad section */}
				<MenuCategory
					bgImg={saladBg}
					items={salad}
					title={"salad"}
					subtitle={"Explore Delicious Salads "}
				/>
				{/* soup section */}
				<MenuCategory
					bgImg={soupBg}
					items={soup}
					title={"soup"}
					subtitle={"Explore Delicious soup"}
				/>
			</div>
		</>
	);
};

export default OurMenu;
