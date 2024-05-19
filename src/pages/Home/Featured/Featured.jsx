/** @format */

import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured-section.css";
const Featured = () => {
	return (
		<div className="my-20 bg-fixed bg-opacity-30 featured-section">
			<div className="px-14 bg-slate-400 bg-opacity-35 py-6 text-white ">
				<SectionTitle heading={"from our menu"} subheading={"Checkout it"} />
				<section className="md:flex  gap-3 max-w-4xl mx-auto font-cinzel items-center justify-center">
					<img className="w-96 rounded-xl" src={featuredImg} alt="" />
					<div className="text-start">
						<h4>March 30, 2024</h4>
						<h2 className="text-xl">Where can i get some ?</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
							quasi!lorem1 Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Id animi totam soluta debitis delectus impedit aperiam
							sapiente libero, itaque reiciendis quisquam iusto ut vel beatae
							tempora pariatur nemo iure facilis.
						</p>
						<button className="btn btn-sm text-white btn-outline">
							Read More
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Featured;
