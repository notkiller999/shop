import { useState } from "react";
import classNames from "classnames";

    
const data = {
    "Доставка": ["Новой почтой по Украине — 30 грн.", "Курьером к двери по Киеву — 40 грн."],
    "Оплата": [" Наличными при получении.", "Кредитной картой в privat24, LiqPay.", "Через кассу или терминал самообслуживания Приватбанк."],
    "Гарантия": ["Гарантия от производителя 12 месяцев"]
}

const DeliveryInfo = () => {

    const [active, setActive] = useState(0);

    const renderTabs = () => {
        return Object.keys(data).map((item, i) => 
            <div key={i}
                className={classNames("tab-item", {"tab-item--active" : active === i})}
                onClick={() => setActive(i)}
            >
                    {item}
            </div>
        
        )
    }

    const renderContent = () => {
        return Object.keys(data).map((item, i) => 
            <div key={i} className={classNames("tab-content", "product-group-descr", 
                {"tab-content--active" : active === i})}
            >
                <ul className="product-group-ul">
                    { data[item].map((name, k) => 
                            <li key={k} className="product-group-li">
                               {name}
                            </li>
                    )}
                </ul>
            </div>
        )
    }


    return (
        <div className="product-info">
            <div className="tab">
                <div className="tab-panel">
                    {renderTabs()}
                    <div className="tab-devider"></div>
                </div>

                <div className="tab-wrapper">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default DeliveryInfo;