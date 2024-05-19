/** @format */

import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
	return (
		<div>
			<Parallax
				blur={{ min: -15, max: 15 }}
				bgImage={(img)}
				bgImageAlt="menu img"
				strength={-200}
			>
				{/* style={{ backgroundImage: `url("${img}")` } */}
				<div className="hero h-[600px] mb-5">
					<div className="hero-overlay bg-opacity-40"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md bg-slate-200 bg-opacity-25 md:py-14 md:px-24 py-10 px-14">
							<h1 className="mb-5 uppercase text-5xl font-bold text-responsive ">
								{title}
							</h1>
							<p className="mb-5 text-xs md:text-xl">{subtitle} </p>
						</div>
					</div>
				</div>
				{/* <div style={{ height: "400px" }} /> */}
			</Parallax>
		</div>
	);
};

export default Cover;
