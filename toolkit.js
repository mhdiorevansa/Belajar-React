import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// buat dulu aksinya
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// ini semacam initial state dan setState
const cartReducer = createReducer([], (builder) => {
	builder.addCase(addToCart, (state, action) => {
		state.push(action.payload);
	});
});

const loginReducer = createReducer({ status: false }, (builder) => {
	builder.addCase(login, (state, action) => {
		state.status = true;
	});
});

// disini kita bisa tampung reducer, dan memasukkan lebih dari satu reducer
const store = configureStore({
	reducer: {
		cart: cartReducer,
		login: loginReducer,
	},
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
	console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 5, qty: 10 }));
store.dispatch(login());
