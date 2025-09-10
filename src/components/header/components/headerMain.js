import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "../../cart/cartSlice";
import { useEffect} from "react";
import { selectAll, headerFetch } from "../headerSlice";
import { changeFilter, productsFetch } from "../../productCrad/productsSlice";

import logo from "../../assets/icons/logo.webp";
import { BasketIcon, ProfileIcon, SearchIcon } from "../../assets/icons/icons";
import CategoryItem from "./categoryItem";



const HeaderMain = ({mainData}) => {
    
    const dispatch = useDispatch();
    const status = useSelector(state => state.header.loadingStatus);
    const counter = useSelector(state => state.cart.ids.length);
    const categories = useSelector(selectAll);

    useEffect(() => {
        dispatch(headerFetch());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const onChangeFilter = (id, category) => {
        dispatch(changeFilter(id));
        dispatch(productsFetch(category));
    };

    const renderCategories = (data) => {

        if (mainData.categoryes) {
            return data.map((item) => {
                return <CategoryItem
                    key={item.id}
                    item={item}
                    onChangeFilter={onChangeFilter}
                />       
		    });
        } else return null;
	};

    const elems = renderCategories(categories)
    // const elems = useMemo(() => renderCategories(categories), [categories]);

    if (mainData.visible) {
        return (
            <div className="header-main">
                <Link to="/">
                    <div className="header-logo">
                        <img src={mainData.logo ? mainData.logo : logo} alt="logo" />
                    </div>
                </Link>
                <div className="header-category d-flex f-centered">
                    {status ? elems : null}
                </div>
                {mainData.search.visible ? 
                    <div className="header-search">
                        {mainData.search.icon ? 
                            <img src={mainData.search.icon} alt="search" className="header-search-icon"/> :
                            <SearchIcon />
                        }
                        <input
                            className="header-search-panel"
                            type="search"
                            autoComplete="off"
                            name="search"
                            placeholder={mainData.search.text}
                        />
                    </div> : null
                }
                <div className="header-profile">
                    <div className="header-profile-panel">
                        <ProfileIcon />
                        <span>Вхід</span>
                    </div>
                    <div
                        className="header-profile-basket" 
                        onClick={() => dispatch(changeVisible(true))}	
                    >
                        <div className="header-profile-basket-count"
                            style={counter > 0 ? {display: "block"} : {display: "none"}}
                        >
                            {counter}
                        </div>
                        <BasketIcon />
                    </div>
                </div>
            </div>
        )
    } else return null;
}

export default HeaderMain;