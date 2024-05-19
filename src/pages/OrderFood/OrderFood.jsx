/** @format */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "./tabs.css";
import orderPageCover from "../../assets/shop/banner2.jpg";
import Cover from "../OurMenu/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SingleTabs from "./SingleTabs";
import { ScrollRestoration, useParams } from "react-router-dom";
import { useState } from "react";
const OrderFood = () => {
	const [menu, loading] = useMenu();
	const { category } = useParams();
	const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
	const intialTabindex = categories.indexOf(category)
	const [tabIndex, setTabIndex] = useState(intialTabindex);

	// for tabs
	// useEffect(() => {
	// 	if (category == "salad") {
	// 		setTabIndex(0);
	// 	} else if (category == "pizza") {
	// 		setTabIndex(1);
	// 	}
	// }, []);
	console.log(category);
	const dessert = menu.filter(
		(item) => item.category.toLowerCase() === "dessert",
	);
	const soup = menu.filter((item) => item.category.toLowerCase() === "soup");
	const salad = menu.filter((item) => item.category.toLowerCase() === "salad");
	const pizza = menu.filter((item) => item.category.toLowerCase() === "pizza");
	const drinks = menu.filter(
		(item) => item.category.toLowerCase() === "drinks",
	);
	return (
		<div>
			<ScrollRestoration/>
			<Cover
				img={orderPageCover}
				title={"Your Orders"}
				subtitle={"Explore Your Orders"}
			/>
			<Tabs
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
				role="tablist"
			>
				<TabList className="text-2xl tabs justify-center border-0 font-bold">
					<Tab role="tab" className="tab">
						Salad
					</Tab>
					<Tab role="tab" className="tab">
						Pizza
					</Tab>
					<Tab role="tab" className="tab">
						Soups
					</Tab>
					<Tab role="tab" className="tab">
						Dessert
					</Tab>
					<Tab role="tab" className="tab">
						Drinks
					</Tab>
				</TabList>

				<TabPanel>
					<SingleTabs items={salad} />
				</TabPanel>
				<TabPanel>
					<SingleTabs items={pizza} />
				</TabPanel>
				<TabPanel>
					<SingleTabs items={soup} />
				</TabPanel>
				<TabPanel>
					<SingleTabs items={dessert} />
				</TabPanel>
				<TabPanel>
					<SingleTabs items={drinks} />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default OrderFood;
