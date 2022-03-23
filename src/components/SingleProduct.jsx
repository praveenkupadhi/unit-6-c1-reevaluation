import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleProductList = () => {
	const { id } = useParams();
	const [singleData, setSingleData] = useState({});

	useEffect(() => {
		axios
			.get(`https://movie-fake-server.herokuapp.com/products/${id}`)
			.then((res) => setSingleData(res.data));
	}, [id]);

	// make a request to get the details
	return (
		<>
			<div key={singleData.id}>
				{/* display the results here */}
				<img src={singleData.image} alt="image" />
				<h3>{singleData.title}</h3>
				<h4>Brand: {singleData.brand}</h4>
				<h5>Category: {singleData.category}</h5>
				<h5>Price: {singleData.price}</h5>
			</div>
		</>
	);
};
