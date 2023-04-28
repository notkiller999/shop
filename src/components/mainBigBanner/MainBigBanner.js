import logo from '../assets/icons/white logo.webp'
import './mainBigBanner.scss';


const MainBigBanner = () => {
    return   <div className="main">
                <div className="main__block">
                    <div className="main__block-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="main__block-text">
                        <div className="main__block-title">
                            <h2>YOUR STYLE</h2>
                        </div>
                        <div className="main__block-descr">БЕЗУПРЕЧНОСТЬ НАЧИНАЕТСЯ С ТЕБЯ</div>
                        
                            <a href="#" className="main__block-link">
                                <div className="btn btn-outline-dark">ПЕРЕЙТИ В КАТАЛОГ</div>
                            </a>
                        
                    </div>
                </div>
            </div>
}

export default MainBigBanner