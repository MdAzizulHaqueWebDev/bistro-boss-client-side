/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosInstance, { baseURL } from "../../../../hooks/useAxiosInstance";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import { FaUser } from "react-icons/fa";

const AllUsers = () => {
	const axiosSecure = useAxiosInstance();
	const {
		data: users = [],
		isPending,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const { data } = await axiosSecure.get("/users");
			return data;
		},
	});

	if (isPending || isLoading) return <p className="text-9xl">Loading .....</p>;

	const handleMakeAdmin = (userId) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Do Admin!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios.patch(`${baseURL}/users/admin/${userId}`).then((res) => {
					if (res.data.modifiedCount > 0) {
						refetch();
						Swal.fire({
							title: "Done!",
							text: "Your users has been Admin.",
							icon: "success",
						});
					}
				});
			}
		});
	};

	const handleDeleteUser = (email) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios.delete(`${baseURL}/users/${email}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Delete success",
							showConfirmButton: false,
							timer: 800,
						});
					}
				});
			}
		});
	};

	return (
		<>
			<div className="text-center space-y-3 mt-5 ">
				<h4 className="text-[#D99904] ">---All User---</h4>
				<h2 className="border-y-2 w-1/3 mx-auto py-2 text-xl uppercase font-bold font-poppins">
					Manage All users
				</h2>
			</div>
			<div className="bg-white font-bold p-5">
				<header className="flex justify-start uppercase items-center">
					<h3 className="text-3xl">Users: {users.length}</h3>
				</header>
				<div className="overflow-x-auto rounded-t-2xl mt-6">
					<table className="table ">
						{/* head */}
						<thead>
							<tr className="bg-orange-200 ">
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{users?.map((user, index) => (
								<tr key={user._id}>
									<td>{index + 1}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											<button className="btn btn-sm">Admin</button>
										) : (
											<button
												onClick={() => handleMakeAdmin(user._id)}
												className="p-3 btn btn-sm"
											>
												<FaUser />
											</button>
										)}
									</td>
									<td>
										<button
											onClick={() => handleDeleteUser(user.email)}
											className="btn btn-ghost btn-sm bg-error text-2xl"
										>
											<MdDelete />{" "}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AllUsers;
