import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { 
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import header from "../components/header/headerSlice";
import products from "../components/productCrad/productsSlice";
import activeCard from "../components/productCardActive/cardFiltresSlice";
import product from "../pages/productPage/productPageSlice";
import cart from "../components/cart/cartSlice";



const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	products, activeCard, header, product, cart
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store)

export default store;

// const store = configureStore({
// 	reducer: { products, activeCard, header, product, cart },
// 	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// 	devTools: process.env.NODE_ENV !== "production",
// });

// export default store;
