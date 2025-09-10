import { productFetch, selectById } from "./productPageSlice";
import store from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";

import ProductPageLeft from "./productPageLeft/ProductPageLeft";
import ProductPageRight from "./productPageRight/productPageRight";
import ProductSlider from "../../components/productSlider/ProductSlider";

import "./productPage.scss";
import "./slider.scss";

const ProductPage = () => {

	const id = window.location.href.slice(        
		window.location.href.indexOf("id=") + 3
	);    
	

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productFetch(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { status, activeColor, activeSize, activeTab } = useSelector((state) => state.product);

	const render = () => {
		const product = selectById(store.getState(), id)
		const photos = product.colors[activeColor].photos;

		return (
			<>
				<ProductPageLeft photos={photos} activeTab={activeTab} />
				<ProductPageRight product={product} activeColor={activeColor} activeSize={activeSize}/>
			</>
		)
		
	};

	return (
		<div className="product">
			<div className="product-main">
				{status === id ? render() : "loading"}
			</div>
			<div className="more-products">
				<div className="more-products-title product-group-title">Смотрите также</div>
				<div className="product-group-devider"></div>
				<ProductSlider slides={8}/>
			</div>
		</div>
	);
};

export default ProductPage;
