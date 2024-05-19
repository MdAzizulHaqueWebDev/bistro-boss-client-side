/** @format */

import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:999/reviews").then((res) => {
			setReviews(res.data);
		});
	}, []);

	return (
		<div>
			<SectionTitle
				heading={"Testimonial"}
				subheading={"What Our Clients Say"}
			/>
			<div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					{reviews?.map((review) => (
						<SwiperSlide key={review._id}>
							<div className=" flex flex-col justify-center items-center my-10 mx-16 space-y-2 text-center">
								<Rating
									style={{ maxWidth: 180 }}
									value={review.rating}
									readOnly
								/>
								<p className="text-[50px] font-bold">
									<FaQuoteLeft />
								</p>
								<p>{review.details}</p>
								<h2 className="text-xl text-orange-400">{review.name}</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonial;
