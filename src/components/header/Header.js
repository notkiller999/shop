import './header.scss';
import { BasketIcon, FacebookIcon, FavoriteIcon, GlobeIcon, InstagramIcon, ProfileIcon, SearchIcon, YoutubeIcon } from '../assets/icons/icons';
import logo from '../assets/icons/logo.webp'

const Header = () => {
    return (
        <header  className="header"> 
            <div className="header-technical">
                <div className="header-social">
                    <a href="#">
                        <InstagramIcon/>
                    </a>
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><YoutubeIcon/></a>

                </div>
                <div className="header-info thin">
                    <div className="header-info-item"><a href="./index.html">Главная</a></div>
                    <div className="header-info-item"><a href="./catalog.html">Каталог</a></div>
                    <div className="header-info-item"><a href="#">О нас</a></div>
                    <div className="header-info-item"><a href="#">Оплата и доставка</a></div>
                    <div className="header-info-item"><a href="#">Обмен и возврат</a></div>
                    <div className="header-info-item"><a href="#">Контактная информация</a></div>
                    <div className="header-info-item"><a href="#">Блог</a></div>
                    <div className="header-info-item"><a href="#">Пользовательское соглашение</a></div>
                    <div className="header-info-item"><a href="#">Отзывы</a></div>
                    <div className="header-info-item"><a href="#">Оферта</a></div>
                </div>
                <div className="header-right">
                    <div className="header-lang">
                        <GlobeIcon/>
                        <a href="#" className="header-lang-item header-lang-item-active">Укр</a>
                        <a href="#" className="header-lang-item">Рус</a>
                    </div>
                    <div className="header-favorite">
                        <a href="#">                            
                            <FavoriteIcon/>
                            <span>Желания</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-main">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header-category d-flex f-centered">
                    <div className="header-category-item"><a href="#">Платья</a></div>
                    <div className="header-category-item"><a href="#">Костюмы</a></div>
                    <div className="header-category-item"><a href="#">Туники и блузки</a></div>
                    <div className="header-category-item"><a href="#">Верхняя одежда</a></div>
                    <div className="header-category-item"><a href="#">Акции</a></div>
                    <div className="header-category-item"><a href="#">Большая распродажа</a></div>
                </div>
                <div className="header-search">
                    <SearchIcon/>
                    <input className="header-search-panel" type="search" autoComplete="off" name="search"
                        placeholder="Поиск товаров"/>
                </div>
                <div className="header-profile">
                    <div className="header-profile-panel">
                        <ProfileIcon/>
                        <span>Вход</span>
                    </div>
                    <div className="header-profile-basket" data-target="#buy_modal">
                        <div className="header-profile-basket-count">1</div>
                        <BasketIcon/>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header