import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: null,
};

export const productsFetch = createAsyncThunk(
	"products/productsFetch",
	async () => {
		const response = await axios.get(
			"https://63365a4e8aa85b7c5d2b5551.mockapi.io/api/v1/products/products"
		);
		return response.data;
	}
);

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[productsFetch.pending]: (state, action) => {
			state.status = "pending";
		},
		[productsFetch.fulfilled]: (state, action) => {
			state.status = "success";
			state.items = action.payload;
		},
		[productsFetch.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export default productsSlice.reducer;
