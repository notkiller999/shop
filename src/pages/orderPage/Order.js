

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../components/cart/cartSlice";
import store from "../../store";
import LeftOrder from "./LeftOrder";
import "./order.scss"
import RightOrder from "./RightOrder";

const Order = () => {

    const {totalPrice} = useSelector((state) => state.cart);
    const products = selectAll(store.getState())    

    const [active, setActive] = useState("new");

    return(
        <div className="order">
            <LeftOrder 
                active={active} 
                setActive={setActive}
                totalPrice={totalPrice}
                products={products}
            />
            <RightOrder
                totalPrice={totalPrice}
                products={products}
            />
        </div>
    )
}

export default Order;