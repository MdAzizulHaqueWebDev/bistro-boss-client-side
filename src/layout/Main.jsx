/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
	return (
	<>
    <section>
        <Navbar/>
    </section>
    <div>
        <Outlet/>
    </div>
    <section>
        <Footer/>
    </section>
    </>
	);
};

export default Main;
