import logo from '../assets/icons/white logo.webp'
import './mainBigBanner.scss';


const MainBigBanner = (props) => {
    const { data } = props;
    return   <div className="main">
                <div className="main__block">
                    <div className="main__block-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="main__block-text">
                        <div className="main__block-title">
                            <h2>{data.title}</h2>
                        </div>
                        <div className="main__block-descr">{data.subtitle}</div>
                        
                            <a href={data.button.href} className="main__block-link">
                                <div className="btn btn-outline-dark">{data.button.text}</div>
                            </a>
                        
                    </div>
                </div>
            </div>
}

export default MainBigBanner