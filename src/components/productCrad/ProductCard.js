import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productFetch, selectAll, activate, desactivate } from './productsSlice';
import ProductCardActive from '../productCardActive/ProductCardActive';
import Spinner from '../spinner/Spinner';

import {activeCardFetch} from '../productCardActive/cardFiltresSlice'

import './productCard.scss'

import store from '../../store';


const ProductCard = () => {

    const dispatch = useDispatch();
    const products = selectAll(store.getState());

    const active = useSelector(state => state.products.active)

    const downloadedId = useSelector(state => state.activeCard.ids)

    const { productsLoadingStatus } = useSelector(state => state.products);
    

    useEffect(() => {
        dispatch(productFetch())
        //eslint-disable-next-line
    }, [])

    const dis = (e, id) => {
         e.stopPropagation()
        if (downloadedId.findIndex(item => item === id) < 0) {
            dispatch(activeCardFetch(id))
        }
        
    }



    const renderCards = (data) => {
        if (productsLoadingStatus === 'loading') {
            return <Spinner/>
        } else if (productsLoadingStatus === 'idle') {
            return data.map(item => {
                const { photo, name, id, price, oldPrice} = item;
                return (
                    <div
                        onMouseEnter={(e) => dispatch(activate(id), dis(e,id))}
                        onMouseLeave={() => dispatch(desactivate())}
                        key={id}
                        style={{ marginTop: '20px' }}
                        className="card card-active">
                        <div className="card-img">
                            <img src={photo} alt=""/>
                        </div>
                        {/* eslint-disable-next-line */}
                        <a href="" className="card-link">
                            <div className="card-title">{name}</div>
                        </a>
                        <div className="card-price d-flex">
                            <div className="price">{price.split('.')[0]}</div>
                            <div className="currency">грн</div>
                            <div className="card-price-old">{oldPrice.split('.')[0]}</div>
                            <div className="currency-old">грн</div>
                        </div>
                        {active === id ? <ProductCardActive id={id} /> : null} 
                        
                    </div>
                ) 
            })
        }
        
    }

    const elems = renderCards(products)

    return (
        <>
            {elems}
        </>
    )
}

export default ProductCard