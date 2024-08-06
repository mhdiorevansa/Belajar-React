import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		data: JSON.parse(localStorage.getItem("cart")) || [],
	},
	reducers: {
		addToCart: (state, action) => {
			// jika cart memiliki id yang sama dengan data yang diperoleh dari payload
			const itemInCart = state.data.find((item) => item.id === action.payload.id);
			if (itemInCart) {
				itemInCart.qty++;
			}
			// jika cart tidak meiliki id yang sama dengan data yang diperoleh dari payload
			else {
				state.data.push(action.payload);
			}
		},
	},
});

// yang di export reducers dari cartSlice
export const { addToCart } = cartSlice.actions;
// export cartSlice juga
export default cartSlice.reducer;
