import { productsFetch } from "../../components/productCrad/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CatalogNavigation from "../../components/catalogNavigation/CatalogNavigation";
import ProductCard from "../../components/productCrad/ProductCard";
import Spinner from "../../components/spinner/Spinner";

import "./catalogPage.scss";

const CatalogPage = () => {
    
	const productsLoadingStatus = useSelector((state) => state.products.productsLoadingStatus);
	const dispatch = useDispatch();
    
    const productIds = useSelector(state => state.products.ids);
    
	useEffect(() => {
		dispatch(productsFetch());
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const renderCards = (ids) => {
        if (ids.length > 0) {
            return ids.map((id) => <ProductCard key={id} id={id}/>)
        }
    }

    const cards = renderCards(productIds);

	return (
		<>
			<CatalogNavigation />
			<div className="card-wrapper">
                {productsLoadingStatus === "loading" ? <Spinner/> : cards}
			</div>
		</>
	);
};

export default CatalogPage;
