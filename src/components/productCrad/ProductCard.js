import { useDispatch, useSelector } from "react-redux";

import { selectAll, activate, desactivate } from "./productsSlice";
import ProductCardActive from "../productCardActive/ProductCardActive";
import Spinner from "../spinner/Spinner";

import { activeCardFetch } from "../productCardActive/cardFiltresSlice";

import "./productCard.scss";

import store from "../../store";
import { Link } from "react-router-dom";
import { productFetch } from "../../pages/productPage/productPageSlice";

const ProductCard = () => {
	const dispatch = useDispatch();
	const products = selectAll(store.getState());

	const active = useSelector((state) => state.products.active);

	const downloadedId = useSelector((state) => state.activeCard.ids);

	const { productsLoadingStatus } = useSelector((state) => state.products);

	const count = 5;

	const dis = (e, id) => {
		e.stopPropagation();
		if (downloadedId.findIndex((item) => item === id) < 0) {
			dispatch(activeCardFetch(id));
		}
	};

	const renderCards = (data) => {
		if (productsLoadingStatus === "loading") {
			return <Spinner />;
		} else if (productsLoadingStatus === "idle") {
			return data.map((item) => {
				const { photo, title, id, price, oldPrice } = item;
				return (
					<div
						onMouseEnter={(e) => dispatch(activate(id), dis(e, id))}
						onMouseLeave={() => dispatch(desactivate())}
						key={id}
						style={{ marginTop: "20px", width: `${window.innerWidth / count}px`}}
						className="card card-active"
					>
						<Link to={`/id=${id}`}
							onClick={() => {
								dispatch(productFetch(id))
								window.scrollTo({top: 0})
							}}
						>
							<div className="card-img">
								<img src={photo} alt="" />
							</div>
						</Link>
						<Link to={`/id=${id}`} className="card-link"
							onClick={() => {
								dispatch(productFetch(id))
								window.scrollTo({top: 0})
							}}
						>
							<div className="card-title">{title}</div>
						</Link>
						<div className="card-price d-flex">
							<div className="price">{price}</div>
							<div className="currency">грн</div>
							<div className="card-price-old">{oldPrice}</div>
							<div className="currency-old">грн</div>
						</div>
						{active === id ? <ProductCardActive id={id} /> : null}
					</div>
				);
			});
		}
	};

	const elems = renderCards(products);

	return <>{elems}</>;
};

export default ProductCard;
