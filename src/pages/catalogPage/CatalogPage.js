import { productsFetch } from "../../components/productCrad/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import CatalogNavigation from "../../components/catalogNavigation/CatalogNavigation";
import ProductCard from "../../components/productCrad/ProductCard";

import "./catalogPage.scss";

const CatalogPage = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsFetch("products"));
	}, []);

	return (
		<>
			<CatalogNavigation />
			<div className="card-wrapper">
				<ProductCard />
			</div>
		</>
	);
};

export default CatalogPage;
