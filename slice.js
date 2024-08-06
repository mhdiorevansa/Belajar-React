import { configureStore, createSlice } from "@reduxjs/toolkit";

// ini merupakan inisialisasi state
const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart(state, action) {
			state.push(action.payload);
		},
	},
});

// menampung state
const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

// menampilkan data awal sebelum ada perubahan
console.log("oncreate store : ", store.getState());

// menampilkan data setelah ada perubahan
store.subscribe(() => {
	console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
