/** @format */

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import CategorySlideImg from "./CategorySlideImg";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<>
			<SectionTitle
				heading={"ORDER ONLINE"}
				subheading="From 11:00am to 10:00pm"
			/>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper gap-0 font-cinzel"
			>
				<SwiperSlide>
					<CategorySlideImg img={img1} title="Salads" />
				</SwiperSlide>
				<SwiperSlide>
					<CategorySlideImg img={img2} title="pizzas" />
				</SwiperSlide>
				<SwiperSlide>
					<CategorySlideImg img={img3} title="soups" />
				</SwiperSlide>
				<SwiperSlide>
					<CategorySlideImg img={img4} title="desserts" />
				</SwiperSlide>
				<SwiperSlide>
					<CategorySlideImg img={img5} title="Salads" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Category;
