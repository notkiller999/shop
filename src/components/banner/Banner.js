import './banner.scss'
import logo from '../assets/icons/white_logo.png';

const Banner = (props) => {

    const { data } = props;

    const renderItems = (data) => {
        return data.map((item, i) => {
            const { name, img } = item
            const width = `${100 / data.length}%`
            return (
                <div key={i} className="banner__item"
                    style={{ width }}>
                    <a href="#" className="banner__item-link">
                        <div className="banner__mask">
                            <div>
                                <div className="banner__mask-logo">
                                    <img src={logo} alt=""/>
                                </div>
                                <div className="banner__mask-descr">{name}</div>
                            </div>
                        </div>
                        <img src={img} alt={name}
                            className="second-banner-item-img"/>
                        <h2 className="second-banner-item-title"></h2>
                    </a>
                </div>
            )
        })
    }

    const elems = renderItems(data)

    return ( 
        <div className="banner">
            {elems}
        </div>
    )
}

export default Banner