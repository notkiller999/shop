import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const headerAdapter = createEntityAdapter();

const initialState = headerAdapter.getInitialState({
	active: null,
	loadingStatus: "idle",
});

export const headerFetch = createAsyncThunk("header/headerFetch", () => {
	const { request } = useHttp();
	return request("http://localhost:3001/categories");
});

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(headerFetch.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(headerFetch.fulfilled, (state, action) => {
				state.loadingStatus = "done";
				headerAdapter.setAll(state, action.payload);
			})
			.addCase(headerFetch.rejected, (state) => {
				state.loadingStatus = "false";
			});
	},
});

const { reducer, actions } = headerSlice;

export const { selectAll } = headerAdapter.getSelectors(
	(state) => state.header
);

export default reducer;
