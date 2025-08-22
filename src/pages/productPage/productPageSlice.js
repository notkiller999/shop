import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../components/hooks/http.hook";

const productAdaptor = createEntityAdapter();

const initialState = productAdaptor.getInitialState({
	status: null,
	activeColor: null,
	activeSize: null,
	activeTab: "0"
});

export const productFetch = createAsyncThunk("product/productFetch", (id) => {
	const { request } = useHttp();
	return request(`http://localhost:3001/products/${id}`);
});

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		changeActiveColor: (state, action) => {
			state.activeColor = action.payload;
			state.activeTab = "0"
		},
		changeActiveSize: (state, action) => {
			state.activeSize = action.payload;
		},
		changeActiveTab: (state, action) => {
			state.activeTab = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(productFetch.pending, (state) => {
				state.status = null;
			})
			.addCase(productFetch.fulfilled, (state, action) => {
				state.status = action.payload.id;
				productAdaptor.setOne(state, action.payload);
				const color = Object.keys(action.payload.colors)[0];
				state.activeSize = action.payload.colors[color].sizes[0]
				state.activeColor = color;
			})
			.addCase(productFetch.rejected, (state) => {
				state.status = "error";
			});
	},
});

const { reducer, actions } = productSlice;

export const { selectById, selectAll } = productAdaptor.getSelectors(
	(state) => state.product
);

export const {changeActiveColor, changeActiveSize, changeActiveTab } = actions;

export default reducer;
