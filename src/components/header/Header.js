/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, headerFetch } from "./headerSlice";
import store from "../../store";

import "./header.scss";
import {
	BasketIcon,
	FacebookIcon,
	FavoriteIcon,
	GlobeIcon,
	InstagramIcon,
	ProfileIcon,
	SearchIcon,
	YoutubeIcon,
} from "../assets/icons/icons";
import logo from "../assets/icons/logo.webp";
import { changeFilter, productsFetch } from "../productCrad/productsSlice";
import { Link } from "react-router-dom";
import { changeVisible } from "../cart/cartSlice";

const Header = () => {
	const dispatch = useDispatch();
	const categories = selectAll(store.getState());
	const mainCategories = categories.filter((cat) => cat.parent_id === null);
	const subCategories = categories.filter((cat) => cat.parent_id !== null);
	const status = useSelector((state) => state.header.loadingStatus);
	const counter = useSelector(state => state.cart.ids.length);	

	const [active, setActive] = useState(null);
	

	const onChangeFilter = (id) => {
		dispatch(changeFilter(id));
		dispatch(productsFetch());
	};

	const renderCategories = () => {
		return mainCategories.map((item) => {
			const subCat = subCategories.filter((i) => i.parent_id === item.id);
			// eslint-disable-next-line array-callback-return
			const elems = subCat.map((item) => {
				if (subCat.length > 0) {
					return (
						<div className="dropdown__menu-item" key={item.id}>
							<a href="#">{item.title}</a>
						</div>
					);
				}
			});

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
		});
	};

	useEffect(() => {
		dispatch(headerFetch());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const elems = renderCategories();

	return (
		<header className="header">
			<div className="header-technical">
				<div className="header-social">
					<a href="instagram.com">
						<InstagramIcon />
					</a>
					<a href="facebook.com">
						<FacebookIcon />
					</a>
					<a href="youtube.com">
						<YoutubeIcon />
					</a>
				</div>
				<div className="header-info thin">
					<div className="header-info-item">
						<Link to="/">Главная</Link>
					</div>
					<div className="header-info-item">
						<Link to="catalog">Каталог</Link>
					</div>
					<div className="header-info-item">
						<a href="#">О нас</a>
					</div>
					<div className="header-info-item">
						<a href="#">Оплата и доставка</a>
					</div>
					<div className="header-info-item">
						<a href="#">Обмен и возврат</a>
					</div>
					<div className="header-info-item">
						<a href="#">Контактная информация</a>
					</div>
					<div className="header-info-item">
						<a href="#">Блог</a>
					</div>
					<div className="header-info-item">
						<a href="#">Пользовательское соглашение</a>
					</div>
					<div className="header-info-item">
						<a href="#">Отзывы</a>
					</div>
					<div className="header-info-item">
						<a href="#">Оферта</a>
					</div>
				</div>
				<div className="header-right">
					<div className="header-lang">
						<GlobeIcon />
						<a href="#" className="header-lang-item header-lang-item-active">
							Укр
						</a>
						<a href="#" className="header-lang-item">
							Рус
						</a>
					</div>
					<div className="header-favorite">
						<a href="#">
							<FavoriteIcon />
							<span>Желания</span>
						</a>
					</div>
				</div>
			</div>
			<div className="header-main">
				<Link to="/">
					<div className="header-logo">
						<img src={logo} alt="logo" />
					</div>
				</Link>
				<div className="header-category d-flex f-centered">
					{status ? elems : null}
				</div>
				<div className="header-search">
					<SearchIcon />
					<input
						className="header-search-panel"
						type="search"
						autoComplete="off"
						name="search"
						placeholder="Поиск товаров"
					/>
				</div>
				<div className="header-profile">
					<div className="header-profile-panel">
						<ProfileIcon />
						<span>Вход</span>
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
		</header>
	);
};

export default Header;
