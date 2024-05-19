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
	const {user} = useAuth()
	console.log(user);
	return (
		<>
		<Helmet>
			<title>
				Bistro Boss | Home
			</title>
		</Helmet>
			<section>
				<Banner />
			</section>
			<div className="lg:max-w-5xl mx-auto">
			<section>
				<Category />
			</section>
			<section>
				<PopularMenu />
			</section>
			<section>
				<Contact/>
			</section>
			<section>
				<ChefRecommend/>
			</section>
			</div>
			<section>
				<Featured/>
			</section>
			<section>
				<Testimonial/>
			</section>
		</>
	);
};

export default Home;
