/** @format */
import { FaWallet } from "react-icons/fa";
import "./quantityCard.css";
const QuantityCard = () => {
	return (
		<>
			<div className="cards flex flex-col md:flex-row">
				<div className="card flex items-center justify-center  flex-row gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">
					<div>
						<FaWallet className="text-3xl" />
					</div>
					<div className="gap-0">
						<p className="font-bold font-poppins text-2xl">1000</p>
						<p>Revene</p>
					</div>
				</div>
				<div className="card flex items-center justify-center  flex-row gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">
					<div>
						<FaWallet className="text-3xl" />
					</div>
					<div className="gap-0">
						<p className="font-bold font-poppins text-2xl">1000</p>
						<p>Revene</p>
					</div>
				</div>
				<div className="card flex items-center justify-center  flex-row gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">
					<div>
						<FaWallet className="text-3xl" />
					</div>
					<div className="gap-0">
						<p className="font-bold font-poppins text-2xl">1000</p>
						<p>Revene</p>
					</div>
				</div>
				<div className="card flex items-center justify-center  flex-row gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">
					<div>
						<FaWallet className="text-3xl" />
					</div>
					<div>
						<p className="font-bold font-poppins text-2xl">1000</p>
						<p>Revene</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuantityCard;
