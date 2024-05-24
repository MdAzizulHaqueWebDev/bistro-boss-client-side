/** @format */

import Cover from "../OurMenu/Cover/Cover";
import banner from "../../assets/contact/banner.jpg";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
	return (
		<>
			<Cover
				img={banner}
				title={"Contact Us"}
				subtitle={"Would you like to try a dish?"}
			/>
			<div className="max-w-5xl mx-auto">
				<SectionTitle heading={"Our Location"} subheading={"visit us"} />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<div className="border-2">
						<section className="flex justify-center py-3 bg-[#D1A054] ">
							<FaPhoneAlt />
						</section>
						<section className="bg-[#F3F3F3] mx-6 py-6 flex justify-center items-center text-center">
							<div>
								<h3>Phone</h3>
								<p>+1 00115151454</p>
							</div>
						</section>
					</div>
					<div className="border-2">
						<section className="flex justify-center py-3 bg-[#D1A054] ">
							<FaLocationArrow />
						</section>
						<section className="bg-[#F3F3F3] mx-6 py-6 flex justify-center items-center text-center">
							<div>
								<h3>Address</h3>
								<p>+1 00115151454</p>
							</div>
						</section>
					</div>
					<div className="border-2">
						<section className="flex justify-center py-3 bg-[#D1A054] ">
							<FaClock />
						</section>
						<section className="bg-[#F3F3F3] mx-6 py-6 flex justify-center items-center text-center">
							<div>
								<h3>Working Time</h3>
								<p>
									Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
								</p>
							</div>
						</section>
					</div>
				</div>
				<section className="mt-8">
					<SectionTitle
						heading={"contact form"}
						subheading={"send a message"}
					/>
					<div className="bg-[#F3F3F3] my-6">
						<form className="p-8">
							<section className="md:flex-row flex flex-col md:gap-5">
								<div className="md:w-1/2">
									<label htmlFor="name" className="text-sm">
										Name *
									</label>
									<input
										id="name"
										type="text"
										placeholder="Enter Your Name .."
										className="flex w-full items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-600 focus:ring-sky-600"
									/>
								</div>
								<div className="md:w-1/2">
									<label htmlFor="email" className="text-sm">
										Email*
									</label>
									<input
										id="email"
										type="text"
										placeholder="Enter Your Email"
										className="flex w-full items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-600 focus:ring-sky-600"
									/>
								</div>
							</section>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="text-sm">
									Phone *
								</label>
								<input
									id="email"
									type="text"
									placeholder="Enter Your Phone Number.."
									className="flex w-full items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-600 focus:ring-sky-600"
								/>
							</div>
							<div className="flex justify-start flex-col w-full">
								<label htmlFor="message" className="w-full">
									Message *
								</label>

								<textarea name="" id="message" cols="30" rows="5"></textarea>
							</div>
							<div>
								<div className="w-full h-40 flex items-center justify-center cursor-pointer">
									<div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
										<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
										<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												stroke="currentColor"
												fill="none"
												className="w-5 h-5 text-green-400"
											>
												<path
													d="M14 5l7 7m0 0l-7 7m7-7H3"
													strokeWidth="2"
													strokeLinejoin="round"
													strokeLinecap="round"
												></path>
											</svg>
										</span>
										<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												stroke="currentColor"
												fill="none"
												className="w-5 h-5 text-green-400"
											>
												<path
													d="M14 5l7 7m0 0l-7 7m7-7H3"
													strokeWidth="2"
													strokeLinejoin="round"
													strokeLinecap="round"
												></path>
											</svg>
										</span>
										<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
											Send Message
										</span>
									</div>
								</div>
							</div>
						</form>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
