/** @format */

import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const baseURL = "http://localhost:999";
const instance = axios.create({
	baseURL: "http://localhost:999",
});
const useAxiosInstance = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();
	// this interceptor for when we need send something with headers
	instance.interceptors.request.use(
		function (config) {
			// console.log(config, "hitting interceptor");
			// Do something before request is sent
			config.headers.authorization = `bearer ${localStorage.getItem(
				"access-token",
			)}`;
			return config;
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error);
		},
	);
	// when we find the response & apply do something or verify or authenticate & status verify
	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			const status = error.response.status;
			if (status === 401 || status === 403) {
				logOut();
				navigate("/login");
			}
			return Promise.reject(error);
		},
	);

	return instance;
};

export default useAxiosInstance;
