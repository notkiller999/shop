import { useDispatch, useSelector } from "react-redux";
import { activate, desactivate, selectById } from "./productsSlice";
import ProductCardActive from "../productCardActive/ProductCardActive";
import { activeCardFetch } from "../productCardActive/cardFiltresSlice";
import store from "../../store";
import { Link } from "react-router-dom";

import "./productCard.scss";

const ProductCard = ({id}) => {    

	const dispatch = useDispatch();
	const active = useSelector((state) => state.products.active);
	const downloadedIds = useSelector((state) => state.activeCard.ids);
    const product = selectById(store.getState(), id);
	const count = 5;

	const makeCardActive = (e, id) => {
		e.stopPropagation();
		if (downloadedIds.findIndex((item) => item === id) < 0) {
			dispatch(activeCardFetch(id));
		}
	};

    const renderCard = (item) => {
        const { photo, title, id, price, oldPrice } = item;
        return (
            <div
                onMouseEnter={(e) => dispatch(activate(id), makeCardActive(e, id))}
                onMouseLeave={() => dispatch(desactivate())}
                key={id}
                style={{ marginTop: "20px", width: `${window.innerWidth / count}px`}}
                className="card card-active"
            >
                <Link to={`/id=${id}`}
                    onClick={() => {
                        window.scrollTo({top: 0})
                    }}
                >
                    <div className="card-img">
                        <img src={photo} alt="" />
                    </div>
                </Link>
                <Link to={`/id=${id}`} className="card-link"
                    onClick={() => {
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
    }

    return renderCard(product);
};

export default ProductCard;
