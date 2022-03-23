import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getproductsData, getProductsSuccess } from "../Redux/actions";

export const Products = () => {
	// to get all products list on component mounts
	const data = useSelector((store) => store.products);
	const loadingStatus = useSelector((store) => store.isLoading);
	const dispatch = useDispatch();
	useEffect(() => {
		//   dispatch an action to the store
		// dont make call here
		// handle it as thunk call in actions.js
		axios
			.get("https://movie-fake-server.herokuapp.com/products")
			.then((res) => {
				dispatch(getProductsSuccess(true));
				dispatch(getproductsData(res.data));
				dispatch(getProductsSuccess(false));
			});
	}, [dispatch]);

	//    sort by price
	const handleSort = (e) => {
		// dispach handle sort action to the store
		let sortData = [];
		if (e.target.value === "asc") {
			sortData = data.sort((a, b) => {
				return a.price - b.price;
			});
			dispatch(getProductsSuccess(true));
			dispatch(getproductsData(sortData));
			dispatch(getProductsSuccess(false));
		} else if (e.target.value === "desc") {
			sortData = data.sort((a, b) => {
				return b.price - a.price;
			});
			dispatch(getProductsSuccess(true));
			dispatch(getproductsData(sortData));
			dispatch(getProductsSuccess(false));
		}
	};
	return (
		<>
			<h2>Products</h2>
			<select onChange={handleSort}>
				<option>--sort by --</option>
				<option value="asc">low to high</option>
				<option value="desc">high to low</option>
			</select>
			<div className="products-list">
				{/* map throught th products  list and display the results */}
				{!loadingStatus ? (
					data.map((e) => {
						return (
							<NavLink to={`${e.id}`} key={e.id}>
								<div>
									{/* display the results here */}
									<img src={e.image} alt="image" />
									<h3>{e.title}</h3>
									<h4>Brand: {e.brand}</h4>
									<h5>Category: {e.category}</h5>
									<h5>Price: {e.price}</h5>
								</div>
							</NavLink>
						);
					})
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		</>
	);
};
