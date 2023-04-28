import { useEffect } from 'react';
import ProductCard from '../productCrad/ProductCard';
import miniSlider from '../utils/miniSlider';

import './productSlider.scss'



const ProductSlider = () => {

    useEffect(() => {
        setTimeout(() => {
            miniSlider({
                container: ".product-slider",
                sliderInner: ".product-slider-inner",
                sliderItems: ".card-active",
                sliderWrapper: ".product-slider-wrapper",
                next: ".product-slider-next",
                prev: ".product-slider-prev"
            })
        }, 1000)
    }, [])



    return (
        <div className="product-slider">
            <a href="#" className="product-slider-prev" data-slider="prev">
                <span className="slider-prev-icon">&lt;</span>
            </a>
            <a href="#" className="product-slider-next" data-slider="next">
                <span className="slider-next-icon">&gt;</span>
            </a>
            <div className="product-slider-inner">
                <div className="product-slider-wrapper">
                    <ProductCard/>                    
                </div>
            </div>
        </div>
    )
}

export default ProductSlider