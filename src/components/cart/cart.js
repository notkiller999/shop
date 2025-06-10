import { useSelector, useDispatch } from "react-redux";
import "./cart.scss"
import { changeCount, changeTotal, changeVisible, deleteFromCart, selectAll } from "./cartSlice";
import store from "../../store";
import { Link } from "react-router-dom";
import { productFetch } from "../productPage/productPageSlice";

const Cart = () => {

    const {active} = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const products = selectAll(store.getState());
    

    const total = products.length > 0 ? products.map(item => item.count * item.price).reduce((acc, cur) => acc + cur) : 0;
    
    const render = () => {
       return products.map(item => {
            const {id, title, price, currency, activeColor, activeSize, photo, count} = item;
            return (
                <tr key={id} className="cart-item">
                    <td className="cart-item-img">
                        <div className="cart-item-image">
                            <a className="cart-item-link" href="product.html">
                            <img src={photo}
                                alt={title}/>
                            </a>
                        </div>
                    </td>
                    <td className="cart-item-info">
                        <Link 
                            to={`id=${id}`} 
                            className="cart-item-link"
                            onClick={() => {
								dispatch(productFetch(id))
								window.scrollTo({top: 0})
                                dispatch(changeVisible(false))
							}}
                        >
                                <div className="cart-item-name">{title}</div>
                        </Link>
                        <div className="cart-item-character">
                            <div className="cart-item-size">Артикул: {id}</div>
                            <div className="cart-item-size">Размер: {activeSize}</div>
                            <div className="cart-item-color">Цвет: {activeColor}</div>
                        </div>
                        <div className="cart-item-price">{price} {currency}</div>
                    </td>
                    <td className="cart-item-count">
                        <div className="cart-item-counter">
                            <button 
                                className="counter-minus counter-btn btn btn-outline-dark"
                                onClick={() => count > 1 ? 
                                    dispatch(changeCount({id, changes: {count: count - 1}})) : null}
                            >
                                &ndash;
                            </button>
                            <input 
                                type="text" className="counter-input" readOnly value={count}
                            />
                            <button 
                                className="counter-plus counter-btn btn btn-outline-dark"
                                onClick={() => dispatch(changeCount({id, changes: {count: count + 1}}))}
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td className="cart-item-total">
                        <div className="cart-item-total-price">{price * count} {currency}</div>
                    </td>
                    <td className="cart-item-delete">
                        <div 
                            className="cart-item-delete-trigger"
                            onClick={() => dispatch(deleteFromCart(id))}
                        >
                            &times;
                        </div>
                    </td>
                </tr>
            )
        })
    } 
    
    return (
        <div className="modal" id="buy_modal"
            style={active ? {display: "block"} : {display: "none"}}
            onClick={(e) => {if(e.target.id === "buy_modal") {dispatch(changeVisible(false))}} }
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <button
                        className="close" data-close
                        onClick={() => dispatch(changeVisible(false))}
                    >
                        <span>&times;</span>
                    </button>
                    <div className="modal-header">
                        <div className="modal-title">Корзина</div>
                    </div>
                    <div className="modal-body">
                        <table className="cart">
                            <thead>
                                <tr className="cart-header">
                                    <td>
                                        <div className="cart-header-title">Фото</div>
                                    </td>
                                    <td>
                                        <div className="cart-header-title">Название</div>
                                    </td>
                                    <td className="cart-header-count">
                                        <div className="cart-header-title">Количество</div>
                                    </td>
                                    <td className="cart-header-price">
                                        <div className="cart-header-title">Стоимость</div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="cart-items">
                                {render()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">
                                        <div className="divider"></div>
                                    </td>
                                </tr>
                                <tr className="cart-footer">
                                    <td colSpan="5">
                                        <div className="cart-footer-total">
                                            <div className="cart-footer-total-title">Итого:</div>
                                            <div
                                                onChange={() => dispatch(changeTotal(total))} 
                                                className="cart-footer-total-count">{total} грн</div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                    <div className="modal-footer">
                        <div className="btn btn-outline-dark btn-back" data-close>
                            <div className="btn-back-arrow">&#8592;</div>
                            <div 
                                className="btn-back-title"
                                onClick={() => dispatch(changeVisible(false))}
                            >
                                Вернуться к покупкам
                            </div>
                        </div>
                        <Link to={"/order"}>
                            <div 
                                className="btn btn-dark btn-buy"
                                onClick={() => dispatch(changeVisible(false))}
                            >
                                    Оформить заказ
                                </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;