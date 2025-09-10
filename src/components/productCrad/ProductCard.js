import { useDispatch, useSelector } from "react-redux";
import { selectById } from "../../pages/catalogPage/productsSlice";
import ProductCardActive from "../productCardActive/ProductCardActive";
import { activeCardFetch } from "../productCardActive/cardFiltresSlice";
import { Link } from "react-router-dom";

import "./productCard.scss";
import { useState } from "react";

const ProductCard = ({id}) => {    
    
    const [active, setActive] = useState(false);

	const dispatch = useDispatch();
	const downloadedIds = useSelector((state) => state.activeCard.ids);
    const product = useSelector(state => selectById(state, id));
	const count = 5;    

	const makeCardActive = (e, id) => {
		e.stopPropagation();
        setActive(true)
		if (downloadedIds.findIndex((item) => item === id) < 0) {
			dispatch(activeCardFetch(id));
		}
	};

    const renderCard = (item) => {
        const { photo, title, id, price, oldPrice } = item;
        return (
            <div
                onMouseEnter={(e) => {makeCardActive(e, id)}}
                onMouseLeave={() => setActive(false)}
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
                {active ? <ProductCardActive id={id} /> : null}
            </div>
        );
    }

    return renderCard(product);
};

export default ProductCard;
