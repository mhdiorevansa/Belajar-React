import { createContext, useContext, useReducer } from "react";

// menyimpan state
const TotalPriceContext = createContext(null);

// menyimpan action
const TotalPriceDispacthContext = createContext(null);

const totalPriceReducer = (state, action) => {
	switch (action.type) {
		case "update": {
			return {
				total: action.payload.total,
			};
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
};

export const TotalPriceProvider = ({ children }) => {
	const { totalPrice, dispatch } = useReducer(totalPriceReducer, { total: 0 });
	return (
		<TotalPriceContext.Provider value={totalPrice}>
			<TotalPriceDispacthContext value={dispatch}>{children}</TotalPriceDispacthContext>
		</TotalPriceContext.Provider>
	);
};

export function useTotalPrice() {
	return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
	return useContext(TotalPriceDispacthContext);
}
