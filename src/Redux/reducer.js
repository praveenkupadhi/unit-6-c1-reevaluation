import { GET_PRODUCTS_DATA, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initState = {
	products: [],
	isLoading: false,
	isError: false,
};

export const Reducer = (store = initState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_DATA:
			return { ...store, products: action.payload };
		case GET_PRODUCTS_SUCCESS:
			return { ...store, isLoading: action.payload };
		default:
			return { ...store };
	}
	// add the switch statement for different actions
};
