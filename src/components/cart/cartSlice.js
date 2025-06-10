import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdaptor = createEntityAdapter();

const initialState = cartAdaptor.getInitialState({
    active: false,
    totalPrice: 0
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        changeVisible: (state, action) => {
            state.active = action.payload;
        },
        addToCart: (state, action) => {
            cartAdaptor.setOne(state, action.payload);            
        },
        changeCount: (state, action) => {
            cartAdaptor.updateOne(state, action.payload);
        },
        deleteFromCart: (state, action) => {
            cartAdaptor.removeOne(state, action.payload);
        },
        changeTotal: (state, action) => {
            state.totalPrice = action.payload;
        }
    }
})

const {reducer, actions} = cartSlice;

export const {changeVisible, addToCart, changeCount, deleteFromCart, changeTotal} = actions;

export const {selectAll} = cartAdaptor.getSelectors(state => state.cart);

export default reducer;