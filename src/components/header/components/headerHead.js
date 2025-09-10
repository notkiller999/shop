import { Link } from "react-router-dom";
import { FacebookIcon, GlobeIcon, InstagramIcon, YoutubeIcon } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import { changeFilter, productsFetch } from "../../../pages/catalogPage/productsSlice";

const HeaderHead = (props) => {
    const {headData} = props;  
    const dispatch = useDispatch();

    const headerLinks = () => {
        if (headData && headData.visible) {
            return headData.links.map((item, i) => (
                <div className="header-info-item" key={i}>
                    <Link to={item.href ? item.href : "/"}
                        onClick={ () => {  
                            if(item.href === "/catalog") {
                                dispatch(changeFilter(null));
                                dispatch(productsFetch());
                            }
                        }
                        }
                    >{item.title}</Link>
                </div>
            ))
        }
    }

    const headerLanguage = () => {
        if (headData && headData.availableLanguages){
            const activeLang = headData.language;
            return headData.availableLanguages.map((item) => {
                return (
                    <a href="/" key={item} 
                        className={`header-lang-item ${activeLang === item ? 'header-lang-item-active' : ''}`}>
                        {item}
                    </a>
                )
            })
        }
    }

    return (
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
                {headerLinks()}
            </div>
            <div className="header-right">
                <div className="header-lang">
                    <GlobeIcon />
                    {headerLanguage()}
                </div>
            </div>
        </div>
    )
};

export default HeaderHead;