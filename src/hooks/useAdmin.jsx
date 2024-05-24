/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosInstance from "./useAxiosInstance";

const useAdmin = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosInstance();
	const { data: isAdmin } = useQuery({
		queryKey: [user.email, "isAdmin"],
		queryFn: async () => {
			const { data } = await axiosSecure.get(`/users/admin/${user.email}`);
			return data.admin;
		},
	});
	// console.log(isAdmin);
	return [isAdmin];
};

export default useAdmin;
