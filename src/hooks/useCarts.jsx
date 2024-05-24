/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import useAuth from "./useAuth";

const useCarts = () => {
	const axiosSecure = useAxiosInstance();
	const { user } = useAuth();
	const { data: carts = [], refetch } = useQuery({
		queryKey: ["carts"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/carts?email=${user.email}`);
			return res.data;
		},
	});
	return [carts, refetch];
};

export default useCarts;
