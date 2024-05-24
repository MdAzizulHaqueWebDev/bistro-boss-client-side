/** @format */

import { NavLink, Outlet } from "react-router-dom";
// import { ImSpoonKnife } from "react-icons/im";
import {
	FaBook,
	FaCalendar,
	FaCartPlus,
	FaHome,
	FaShopify,
	FaUsers,
	FaWallet,
} from "react-icons/fa";
import {
	MdBookOnline,
	MdContactMail,
	MdMenu,
	MdOutlineRestaurant,
	MdRestaurantMenu,
	MdReviews,
} from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
	const [isAdmin] = useAdmin();
	console.log(isAdmin,"dashboard");
	return (
		<div className="flex items-start gap-6">
			<aside>
				<div className="min-h-svh  font-cinzel p-3 space-y-2 w-60 bg-[#D1A054] text-gray-800">
					<div className="p-4">
						<p className="uppercase text-2xl font-bold">bistro boss</p>
						<p className="uppercase">Restaurants</p>
					</div>
					<div className="divide-y divide-gray-300">
						{isAdmin ? (
							<ul className="pt-2 pb-4 space-y-1 text-sm">
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/dashboard/admin" className="text-red-300">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaHome />
											<span>Admin Home</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/" className={"text-red-500"}>
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<MdOutlineRestaurant />
											<span className="uppercase">Add items</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<MdMenu />
											<span className="uppercase">Manage items</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="carts">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<MdBookOnline />
											<span className="uppercase">manage booking</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/dashboard/allUsers">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaUsers />
											<span className="uppercase">all users</span>
										</button>
									</NavLink>
								</li>
							</ul>
						) : (
							<ul className="pt-2 pb-4 space-y-1 text-sm">
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/" className="text-red-300">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaHome />
											<span>User Home</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/" className={"text-red-500"}>
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaCalendar />
											<span className="uppercase">reservation</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaWallet />
											<span className="uppercase">payment history</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="carts">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaCartPlus />
											<span className="uppercase">My Cart</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<MdReviews />
											<span className="uppercase">add review</span>
										</button>
									</NavLink>
								</li>
								<li className="bg-gray-100 text-gray-900">
									<NavLink to="/">
										<button className="flex items-center p-2 space-x-3 rounded-md">
											<FaBook />
											<span className="uppercase">my booking</span>
										</button>
									</NavLink>
								</li>
							</ul>
						)}
						<ul className="pt-4 pb-2 space-y-1 text-sm">
							<li className="bg-gray-100 text-gray-900">
								<NavLink to="/">
									<button className="flex items-center p-2 space-x-3 rounded-md">
										<FaHome />
										<span>Home</span>
									</button>
								</NavLink>
							</li>
							<li className="bg-gray-100 text-gray-900">
								<NavLink to="/">
									<button className="flex items-center p-2 space-x-3 rounded-md">
										<MdRestaurantMenu />
										<span>Menu</span>
									</button>
								</NavLink>
							</li>
							<li className="bg-gray-100 text-gray-900">
								<NavLink to="/">
									<button className="flex items-center p-2 space-x-3 rounded-md">
										<FaShopify />
										<span>Shop</span>
									</button>
								</NavLink>
							</li>
							<li className="bg-gray-100 text-gray-900">
								<NavLink to="/">
									<button className="flex items-center p-2 space-x-3 rounded-md">
										<MdContactMail />
										<span>Contact</span>
									</button>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</aside>
			{/* dashboard content */}
			<section className="flex-1 border">
				<Outlet />
			</section>
		</div>
	);
};

export default Dashboard;
