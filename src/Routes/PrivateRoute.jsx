/** @format */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useAuth();
	if (loading) {
		return (
			<div className="flex flex-col gap-4 w-11/12 mx-auto">
				<div className="skeleton h-32 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
		);
	}
	if (user) {
		return children;
	}
	if (!user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
};

export default PrivateRoute;
