import { useEffect } from "react";
import ProductCard from "../productCrad/ProductCard";
import miniSlider from "../utils/miniSlider";
import { changeFilter, productsFetch } from "../../pages/catalogPage/productsSlice";

import "./productSlider.scss";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

const ProductSlider = ({ id, slides }) => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.products.productsLoadingStatus);
    const productIds = useSelector(state => state.products.ids);

	useEffect(() => {
		dispatch(productsFetch(id));
		dispatch(changeFilter(id));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const slide = () => {
		miniSlider({
			container: ".product-slider",
			sliderInner: ".product-slider-inner",
			sliderItems: ".card-active",
			sliderWrapper: ".product-slider-wrapper",
			next: ".product-slider-next",
			prev: ".product-slider-prev",
			numberOfSlides: slides
		});
	};

	const errorMsg = status === "error" ? <div>Elements not found</div> : null;
	const spiner = status === "loading" ? <Spinner /> : null;
	const content = status === "idle" ? <View slide={slide} ids={productIds}/> : null;

	return (
		<>
			{errorMsg}
			{spiner}
			{content}
		</>
	);
};

const View = ({ slide, ids }) => {
	useEffect(() => {
		slide();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const renderCards = (ids) => {
        if (ids.length > 0) {
            return ids.map((id) => <ProductCard key={id} id={id}/>)
        }
    }

    const cards = renderCards(ids);

	return (
		<div className="product-slider">
			<div className="product-slider-prev" data-slider="prev">
				<span className="slider-prev-icon">&lt;</span>
			</div>
			<div className="product-slider-next" data-slider="next">
				<span className="slider-next-icon">&gt;</span>
			</div>
			<div className="product-slider-inner">
				<div className="product-slider-wrapper">
                    {cards}
				</div>
			</div>
		</div>
	);
};

export default ProductSlider;
