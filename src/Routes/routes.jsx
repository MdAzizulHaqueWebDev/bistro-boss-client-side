/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Carts from "../pages/Dashboard/Carts/Carts";
import AdminHome from "../pages/Dashboard/AdminDashboard/Home/AdminHome";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";

const routes = createBrowserRouter([
	// main routes
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/our-menu",
				element: <OurMenu />,
			},
			{
				path: "/order-food/:category",
				element: <OrderFood />,
			},
			{
				path: "/contact-us",
				element: <Contact />,
			},
			{
				path: "/secret",
				element: (
					<PrivateRoute>
						<Secret />
					</PrivateRoute>
				),
			},
		],
	},
	// dashboard routes
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: "carts",
				element: <Carts />,
			},

			// admin routes
			{
				path: "admin",
				element: <AdminHome />,
			},
			{
				path: "allUsers",
				element: <AllUsers />,
			},
		],
	},
	// login && register routes
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

export default routes;
