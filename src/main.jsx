/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider";
import "sweetalert2/src/sweetalert2.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="max-w-screen-2xl mx-auto">
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<HelmetProvider>
						<RouterProvider router={routes} />
					</HelmetProvider>
				</AuthProvider>
			</QueryClientProvider>
		</div>
	</React.StrictMode>,
);
