import './banner.scss'

const Banner = (props) => {

    const { data } = props;

    const renderItems = (data) => {
        return data.map((item, i) => {
            const {href,logo, title, background} = item
            const width = `${100 / data.length}%`
            return (
                <div key={i} className="banner__item"
                    style={{ width }}>
                    <a href={href} className="banner__item-link">
                        <div className="banner__mask">
                            <div>
                                {
                                    logo ? 
                                    <div className="banner__mask-logo">
                                        <img src={logo} alt=""/>
                                    </div> 
                                    : null
                                }
                                
                                <div className="banner__mask-descr">{title}</div>
                            </div>
                        </div>
                        <img src={background} alt={title}
                            className="second-banner-item-img"/>
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