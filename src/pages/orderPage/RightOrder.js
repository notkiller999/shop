import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { changeCount, changeTotal, deleteFromCart} from "../../components/cart/cartSlice";



const RightOrder = ({totalPrice, products}) => {

    const dispatch = useDispatch();

    const total = products.length > 0 ? products.map(item => item.count * item.price).reduce((acc, cur) => acc + cur) : 0

    dispatch(changeTotal(total))

    const render = () => {
        return products.map(item => {
            const {id, title, price, currency, photo, count} = item;
            const i = id.slice(0, id.indexOf('/'))
            
            return (

                <div key={id} className="order-cart-item">
                    <div 
                        className="order-cart-delete"
                        onClick={() => {
                            dispatch(deleteFromCart(id))
                        }}
                    >
                        &times;
                    </div>
                    <Link to={`/id=${i}`}>
                        <div className="order-cart-img">
                            <img src={photo} alt={title} />
                        </div>
                    </Link>
                    <div className="order-cart-info">
                        <div className="order-cart-title">
                            <Link to={`/id=${i}`}>
                                {title}
                            </Link>
                        </div>
                        <div className="order-cart-price">
                            <div className="price">{price} {currency}</div>
                        </div>
                        <div className="order-cart-counter">
                            <button 
                                className="counter-minus counter-btn btn btn-outline-dark"
                                onClick={() => 
                                    count > 1 ? 
                                    dispatch(changeCount({id, changes: {count: count - 1}})) : null}
                            >
                                &ndash;
                            </button>
                            <input 
                                type="text" className="counter-input" readOnly value={count}
                            />
                            <button 
                                className="counter-plus counter-btn btn btn-outline-dark"
                                onClick={() => 
                                    dispatch(changeCount({id, changes: {count: count + 1}}))
                                }
                            >
                                +
                            </button>
                        </div>
                        <div className="order-cart-right">
                            
                            <div className="order-cart--price">{price * count} {currency}</div>
                        </div>
                    </div>
                </div>
               
            )
        })
    } 

    return(
        <div className="order-right">
           
            <div className="order-cart-head">
                <div className="order-cart-header">Ваш заказ</div>
            </div>
            <div className="order-cart-wrapper">
                {render()}
                <div className="order-cart-price-total"><span>Всего: </span> {totalPrice} UAH</div>
            </div>

        </div>
    )
}

export default RightOrder;