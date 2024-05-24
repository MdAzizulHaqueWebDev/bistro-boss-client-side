/** @format */

import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testomonial/Testimonial";
import useAuth from "../../hooks/useAuth";

const Home = () => {
	const { user } = useAuth();
	// console.log(user);
	return (
		<>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>

			<Banner />
			<div className="lg:max-w-5xl mx-auto">
				<Category />

				<PopularMenu />

				<Contact />

				<ChefRecommend />
			</div>

			<Featured />

			<Testimonial />
		</>
	);
};

export default Home;
