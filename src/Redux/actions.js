import { GET_PRODUCTS_DATA, GET_PRODUCTS_SUCCESS } from "./actionTypes";

// action for get products request
const getProductsReq = () => ({});

// action for get products success

export const getProductsSuccess = (payload) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload,
});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
export const getproductsData = (payload) => ({
	type: GET_PRODUCTS_DATA,
	payload,
});

// action object for sort  feature

export const sortProducts = () => ({});
