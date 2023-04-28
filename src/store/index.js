import { configureStore } from '@reduxjs/toolkit';
import products from '../components/productCrad/productsSlice';
import activeCard from '../components/productCardActive/cardFiltresSlice';

const store = configureStore({
    reducer: {products, activeCard},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;