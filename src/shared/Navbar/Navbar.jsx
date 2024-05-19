/** @format */

import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navLinks = (
		<>
			<NavLink to="/">
				<li>
					<a>Home</a>
				</li>
			</NavLink>
			<NavLink to={"/contact-us"}>
				<li>
					<a>Contact Us</a>
				</li>
			</NavLink>
			<NavLink to="/dashboard">
				<li>
					<a>Dashboard</a>
				</li>
			</NavLink>
			<NavLink to="/our-menu">
				<li>
					<a>Our Menu</a>
				</li>
			</NavLink>
			<NavLink to="/order-food/salad">
				<li>
					<a>Order Food</a>
				</li>
			</NavLink>
			<NavLink to="/login">
				<li>
					<a>Login</a>
				</li>
			</NavLink>
		</>
	);

	return (
		<>
			<div className="navbar fixed z-10 top-0 bg-opacity-60 max-w-screen-2xl text-white bg-gray-500">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navLinks}
						</ul>
					</div>
					<p className="btn-ghost rounded-xl p-1 ">
						<span className="text-xl font-bold">Bistro Boss</span>
						<br />
						<span className="text-sm font-medium">Resturants</span>
					</p>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navLinks}</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>
		</>
	);
};

export default Navbar;
