import { createSlice } from "@reduxjs/toolkit";
import { getCookies, setCookies } from "cookies-next";
import { toast } from "react-toastify";

const initialState = {
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					cartQuantity:
						state.cartItems[existingIndex].cartQuantity + 1,
				};
				toast.info("Increased product quantity", {
					position: "bottom-left",
				});
			} else {
				let tempProductItem = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProductItem);
				toast.success("Product added to cart", {
					position: "bottom-left",
				});
			}
			setCookies("cart", JSON.stringify(state.cartItems));
		},
	},
});

export const { addToCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
