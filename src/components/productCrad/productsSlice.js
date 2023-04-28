import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
    productsLoadingStatus: 'idle',
    active: false
});

export const productFetch = createAsyncThunk(
    'products/productsFetch',
    () => {
        const { request } = useHttp()
        return request('http://localhost:3001/hits')
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        activate: (state, action) => {
            state.active = action.payload;
        },
        desactivate: state => { state.active = false },
        changePhoto: productsAdapter.updateOne 
    },
    extraReducers: (builder) => {
        builder
            .addCase(productFetch.pending, state => { state.productsLoadingStatus = 'loading' })
            .addCase(productFetch.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                productsAdapter.setAll(state, action.payload)
            })
            .addCase(productFetch.rejected, state => { state.productsLoadingStatus = 'error' })
        .addDefaultCase(() => {})
    }
})

const { reducer, actions} = productsSlice;

export const { selectAll } = productsAdapter.getSelectors(state => state.products);

export const {activate, desactivate,changePhoto} = actions

export default reducer;
