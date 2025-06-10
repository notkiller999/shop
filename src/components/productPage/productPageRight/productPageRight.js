import { Link } from "react-router-dom";
import classNames from "classnames";
import { changeActiveColor, changeActiveSize } from "../productPageSlice";
import { useDispatch, useSelector } from "react-redux";
import Description from "./components/description";
import Characters from "./components/characters";
import DeliveryInfo from "./components/deliveryInfo";
import { addToCart, changeVisible } from "../../cart/cartSlice";

const ProductPageRight = ({product, activeColor, activeSize}) => {

    const {id, title, section, avaiability, price, currency, description, characters} = product;

    const dispatch = useDispatch();

    const ids = `${id}/${activeSize}/${activeColor}`;

    const cartIds = useSelector(state => state.cart.ids);    

    const renderColors = () => {
        const colorsObj = Object.keys(product.colors)
        return colorsObj.map(item => {

            return (
                <div 
                    key={item} 
                    id={item} 
                    className={classNames("product-color-item", {
                        "product-color-item--active" : item === activeColor
                    })}
                    onClick={() => {
                        dispatch(changeActiveColor(item))
                        if (!product.colors[item].sizes.includes(activeSize)) {
                            dispatch(changeActiveSize(product.colors[item].sizes[0]))
                        }                        
                    }}
                >
                        <img
                            src={product.colors[item].mainPhoto}
                            alt="not your deal"
                            className="product-tab-item-img"
                        />
                </div>
            )
        })
    }

    const renderSizes = () => {
        return product.colors[activeColor].sizes.map(item => {
            return (
                <div
                    id={item}
                    key={item}
                    className={
                        classNames("product-size-item", 
                            {"product-size-item-active" : item === activeSize})}
                    onClick={() => 
                        dispatch(changeActiveSize(item))
                    }
                >
                    {item}
                </div>
            )
        })
    }
    
    
    return (
        <div className="product-right">
            <div className="nav-menu">
                <Link to='/' className="nav-menu-link">
                    Главная
                </Link>
                <span>&gt;</span>
                <Link to='/catalog' className="nav-menu-link">
                    {section}
                </Link>
                <span>&gt;</span>
                <div className="nav-menu-link">{id}</div>
            </div>
            <div className="product-title">{title}</div>
            <div className="product-header">
                <div className="product-header-availbility">{avaiability}</div>
                <div className="product-header-code">Артикул: {id}</div>
                <div className="product-header-rating">
                    <a href="/">Оставить отзыв</a>
                </div>
            </div>
            <div className="product-price">
                <div className="product-price-current">
                    {price.slice(0, price.indexOf('.'))} <span className="product-currency">{currency}</span>
                </div>
                <div className="product-favorite">
                    <svg
                        className="product-favorite-heart"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                    </svg>
                    <div className="product-favorite-title">В желания</div>
                </div>
            </div>

            <div className="product-choice">
                <div className="product-color">
                    <div className="product-color-title">Цвет</div>
                    <div className="product-color-panel">
                        {renderColors()}
                    </div>
                </div>
                <div className="product-size">
                    <div className="product-size-title">Размер</div>
                    <div className="product-size-panel">
                        {renderSizes()}
                    </div>
                </div>
            </div>
            <div className="product-order">
                {cartIds.includes(ids) ? 
                    <div 
                        className="product-order-buy btn btn-outline-dark"
                        onClick={() => dispatch(changeVisible(true))}	
                    >
                        В корзине
                    </div> :
            
                    <div
                    className="product-order-buy btn btn-dark"
                    onClick={() => {
                        
                        dispatch(addToCart({
                        id: ids, 
                        title, 
                        price, 
                        currency, 
                        activeColor, 
                        activeSize, 
                        photo: product.colors[activeColor].mainPhoto, 
                        count: 1
                    }))}}
                    >
                        Купить
                    </div>
                }
                    
                <div className="product-order-fastbuy btn btn-outline-dark">
                    Быстрый заказ
                </div>
            </div>

            <Description description={description}/>

            <Characters characters={characters}/>

            <div className="product-group">
                <DeliveryInfo/>
                {/* <div className="product-group">
                    <div className="product-complect">
                        <div className="product-complect-title product-group-title">
                            Вместе дешевле
                        </div>
                        <div className="product-group-devider"></div>
                        <div className="product-complect-wrapper">
                            <div className="product-complect-cards">
                                <div className="product-complect-card">
                                    <div className="product-complect-card-img">
                                        <img
                                            src="https://design119.horoshop.ua/content/images/17/83x110l80nn0/56238174994398.webp"
                                            alt="not your deal"
                                        />
                                    </div>
                                    <div className="product-complect-card-title">
                                        Бюстгальтер Dimanche
                                    </div>
                                    <div className="product-complect-card-price">
                                        549 <span className="curancy">грн</span>
                                    </div>
                                </div>
                                <div className="product-complect-card product-complect-active">
                                    <div className="product-complect-card-img">
                                        <img
                                            src="https://design119.horoshop.ua/content/images/23/83x110l80nn0/33289959880269.webp"
                                            alt="not your deal"
                                        />
                                    </div>
                                    <a href="/" className="product-complect-card-link">
                                        <div className="product-complect-card-title">
                                            Трусики Innamore
                                        </div>
                                    </a>
                                    <div className="product-complect-card-price">
                                        555 <span className="curancy">грн</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-complect-price">
                                <div className="product-complect-price-new">
                                    999 <span className="curancy">грн</span>
                                </div>
                                <div className="product-complect-price-old">
                                    1499 <span className="curancy">грн</span>
                                </div>
                                <button className="product-complect-btn btn btn-dark">
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProductPageRight