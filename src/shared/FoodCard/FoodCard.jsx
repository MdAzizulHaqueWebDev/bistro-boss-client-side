/** @format */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../hooks/useAxiosInstance";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({ item }) => {
	const { image, price, name, recipe } = item || {};
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useAuth();
	const [, refetch] = useCarts();
	const handleAddCart = (food) => {
		const foodItem = {
			foodId: food._id,
			userEmail: user?.email,
			name: food.name,
			price: food.price,
			image: food.image,
		};
		if (user && user.email) {
			//send data in database
			axios.post(`${baseURL}/carts`, foodItem).then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: food.name + "added your cart",
						showConfirmButton: false,
						timer: 1500,
					});
					refetch();
				}
			});
		} else {
			Swal.fire({
				title: "Pls login first",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, login ",
			}).then((result) => {
				if (result.isConfirmed) {
					//send login page
					navigate("/login", { state: { from: location } });
				}
			});
		}
		// console.log(food);
	};
	return (
		<div>
			<div className="card relative border-2 rounded-none w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={image} className="w-full" />
				</figure>
				<p className="bg-black text-white right-3 px-2 top-2 absolute">
					${price}
				</p>
				<div className="card-body items-center text-center">
					<h2 className="card-title ">{name}</h2>
					<p> {recipe.slice(0, 50)}.....</p>
					<div className="card-actions">
						<button
							onClick={() => handleAddCart(item)}
							className="btn btn-accent"
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
