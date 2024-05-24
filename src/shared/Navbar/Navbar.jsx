/** @format */

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
	const { user, logOut, loading } = useAuth();
	const [carts, refetch] = useCarts();
	// console.log(carts);
	const signOut = () => {
		logOut().then(() => refetch());
	};
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
			<NavLink to="/secret">
				<li>
					<a>Secret</a>
				</li>
			</NavLink>
			<NavLink to="/order-food/salad">
				<li>
					<a>Order Food</a>
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
				<div className="navbar-center hidden  lg:flex">
					<ul className="menu menu-horizontal px-1">{navLinks}</ul>
					<NavLink to="/dashboard/carts">
						<button className="btn btn-sm">
							<FaShoppingCart />
							<div className="badge badge-secondary">{carts.length}</div>
						</button>
					</NavLink>
					{user ? (
						<section className="flex items-center mx-2 gap-3 ">
							<div>
								<button onClick={signOut}>SignOut</button>
							</div>
							<div className="avatar">
								<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
									<img src={user?.photoURL} />
								</div>
							</div>
						</section>
					) : loading ? (
						"  "
					) : (
						<Link to="/login">
							<button className="btn mx-2 p-2 btn-sm ">Login</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
