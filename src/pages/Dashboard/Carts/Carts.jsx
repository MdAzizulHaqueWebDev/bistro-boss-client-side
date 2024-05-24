/** @format */

import { MdDelete } from "react-icons/md";
import useCarts from "../../../hooks/useCarts";
import axios from "axios";
import { baseURL } from "../../../hooks/useAxiosInstance";
import Swal from "sweetalert2";

const Carts = () => {
	const [carts, refetch] = useCarts();
	const totalPrice = carts.reduce((total, item) => total + item.price, 0);
	const handleDelete = (id) => {
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
				axios.delete(`${baseURL}/carts/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Delete success",
							showConfirmButton: false,
							timer: 500,
						});
					}
				});
			}
		});
	};
	return (
		<>
			<div className="text-center space-y-3 mt-5 ">
				<h4 className="text-[#D99904] ">--- My cart ---</h4>
				<h2 className="border-y-2 w-1/3 mx-auto py-2 text-xl uppercase font-bold font-poppins">
					{"Wanna order more"}
				</h2>
			</div>
			<div className="bg-white font-bold p-5">
				<header className="flex justify-between uppercase items-center">
					<h3 className="text-3xl">Items: {carts.length}</h3>
					<h3 className="text-3xl">Total Price: {totalPrice} $</h3>
					<button className="btn md:btn-md btn-sm btn-accent btn-square">
						pay
					</button>
				</header>
				<div className="overflow-x-auto rounded-t-2xl mt-6">
					<table className="table ">
						{/* head */}
						<thead>
							<tr className="bg-orange-200 ">
								<th></th>
								<th>Item Image</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{carts.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img src={item.image} alt="food img not found" />
												</div>
											</div>
										</div>
									</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<th>
										<button
											onClick={() => handleDelete(item._id)}
											className="btn btn-ghost btn-sm bg-error text-2xl"
										>
											<MdDelete />{" "}
										</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Carts;
