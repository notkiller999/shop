import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CatalogPage from "../pages/catalogPage/CatalogPage";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainPage from "../pages/mainPage/MainPage";
import ProductPage from "../pages/productPage/ProductPage";
import Cart from "../components/cart/cart";
import Order from "../pages/orderPage/Order";

import "../styles/lib.css";

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
