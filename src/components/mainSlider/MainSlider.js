import { useEffect, useMemo} from 'react';
import mainSlider from '../utils/mainSlider';
import './mainSlider.scss';

const MainSlider = () => {

    const slidesArray = ['https://wallscloud.net/img/resize/1920/1080/MM/2023-04-21-hills-1-58849.jpg',
        'https://wallscloud.net/img/resize/1920/1080/MM/2023-04-21-boat-1-58846.jpg',
        'https://wallscloud.net/img/resize/1920/1080/MM/2023-04-20-surf-1-58844.jpg',
        'https://wallscloud.net/img/resize/1920/1080/MM/2023-04-17-coast-1-58792.jpg'];
    
    const renderSlides = (arr) => {
        return arr.map((item, i) => {
            return <div
                key={i}
                className="main-slider-item"
                style={{ width: '100%' }}
            >
                        <img src={item}
                            alt={`slide${i + 1}`}/>
                    </div>
        })
    }
    
    const elems = useMemo(() => {
        return renderSlides(slidesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    
    useEffect(() => {
        mainSlider({
            sliderInner: '.main-slider-inner',
            sliderItems: '.main-slider-item',
            sliderWrapper: '.main-slider-wrapper',
            autoSlide: 6,
            addDots: true,
            indicate: true
        })        
    }, [])   

    return (
        <div className="main-slider">
            <div className="main-slider-inner">
                <div className="main-slider-wrapper">
                    {elems}
                </div>
            </div>
        </div>
    )
}

export default MainSlider