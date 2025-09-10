import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
	productsLoadingStatus: "idle",
	active: false,
	filter: null,
});

export const productsFetch = createAsyncThunk("products/productsFetch", async (args) => {
	const { request } = useHttp();
    
    if (args) {        
        // return request(`http://localhost:3001/products?section=${args}`);
        return await request(`/products?section=${args}`);
    }
    
	// return request(`http://localhost:3001/products`);
    return await request(`/products`);
});

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		activate: (state, action) => {
			state.active = action.payload;
		},
		desactivate: (state) => {
			state.active = false;
		},
		changePhoto: productsAdapter.updateOne,
		changeFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(productsFetch.pending, (state) => {
				state.productsLoadingStatus = "loading";
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.productsLoadingStatus = "idle";
				if (state.filter) {
					productsAdapter.setAll(
						state,
						action.payload.filter((item) => item.section === state.filter || 
                        item.aditional_section.find(i => i === state.filter))
					);
				} else {
					productsAdapter.setAll(state, action.payload);
				}
			})
			.addCase(productsFetch.rejected, (state) => {
				state.productsLoadingStatus = "error";
			})
			.addDefaultCase(() => {});
	},
});

const { reducer, actions } = productsSlice;

export const { selectAll, selectById} = productsAdapter.getSelectors(
	(state) => state.products
);

export const { activate, desactivate, changePhoto, changeFilter } = actions;

export default reducer;
