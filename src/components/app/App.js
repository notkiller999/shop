import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import CatalogPage from "../catalogPage/CatalogPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import ProductPage from "../productPage/ProductPage";
import Cart from "../cart/cart";
import Order from "../order/Order";

import "../../styles/lib.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Cart/>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/:id" element={<ProductPage />} />
					<Route path="/order" element={<Order />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
