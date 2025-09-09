import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({item, onChangeFilter}) => {

    const [active, setActive] = useState(null);


    const elems = item.subCategories.map(subCategory => (
        <div className="dropdown__menu-item" key={subCategory.id}>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    onChangeFilter(subCategory.title)}}>
                {subCategory.title}
            </div>
        </div>
    ));
    return (
        <div
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            onClick={() => onChangeFilter(item.title)}
            className="dropdown"
            key={item.id}
            id={item.id}
        >
            <div className="header-category-item">
                <Link to="catalog">{item.title}</Link>
            </div>
            {elems.length > 0 ? (
                <div
                    className="dropdown__menu"
                    style={{ display: active === item.id ? "block" : "none" }}
                >
                    {elems}
                </div>
            ) : null}
        </div>
    );
}

export default CategoryItem