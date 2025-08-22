import classNames from "classnames"
import { FastOrderForm, LoginForm, NewUserOrderForm } from "../../components/forms/Forms";

const LeftOrder = ({active, setActive, totalPrice, products}) => {

    return(
        <div className="order-left">
            <h1 className="order-left-title">
                Оформление заказа
            </h1>
            <div className="order-left-tab">
                <div className="tab">
                    <div className="tab-panel">
                        <div className={classNames("tab-item", {"tab-item--active": active === "new"})}
                            onClick={() => setActive("new")}
                        >
                            Я новый покупатель
                        </div>
                        <div className={classNames("tab-item", {"tab-item--active": active === "old"})}
                            onClick={() => setActive("old")}
                        >
                            Я зарегестрировный покупатель
                        </div>
                        <div className={classNames("tab-item", {"tab-item--active": active === "fast"})}
                            onClick={() => setActive("fast")}
                        >
                            Быстрый заказ
                        </div>
                    </div>
                    <div className="tab-wraper">
                        <div 
                            className={classNames("tab-content", {"tab-content--active": active === "new"})}
                        >
                            <h3 className="form-title">Получатель заказа</h3>
                            <NewUserOrderForm totalPrice={totalPrice} products={products}/>
                        </div>
                        <div className={classNames("tab-content", {"tab-content--active": active === "old"})}>
                            <LoginForm/>
                        </div>
                        <div className={classNames("tab-content", {"tab-content--active": active === "fast"})}>
                            <FastOrderForm totalPrice={totalPrice} products={products}/>
                            {/* <form>
                                <table>
                                    <tbody>
                                        <tr className="form-delivery">
                                            <td className="form-label">
                                                ФИО
                                            </td>
                                            <td>
                                                <input type="text" name="name" className="form-input" />
                                            </td>
                                        </tr>
                                        <tr className="form-delivery">
                                            <td className="form-label">
                                                Email
                                            </td>
                                            <td>
                                                <input type="email" name="email" className="form-input" />
                                            </td>
                                        </tr>
                                        <tr className="form-delivery">
                                            <td className="form-label">
                                                Телефон
                                            </td>
                                            <td>
                                                <input type="tel" name="phone" className="form-input" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-dark">Оформить заказ</button>
                                    <div className="form-terms">Подтверждая заказ я принимаю условия 
                                        <br />
                                        <a href="#">согласия пользователя</a>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftOrder;