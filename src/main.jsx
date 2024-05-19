/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider";
import 'sweetalert2/src/sweetalert2.scss'
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="max-w-screen-2xl mx-auto">
			<AuthProvider>
				<HelmetProvider>
					<RouterProvider router={routes} />
				</HelmetProvider>
			</AuthProvider>
		</div>
	</React.StrictMode>,
);
