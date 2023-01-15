import React from 'react';
import { useSelector } from 'react-redux';

function Favorite(props) {
	const { allProducts } = useSelector((state) => state.productStore);
	// const { user } = useSelector((state) => state.userStore);

	let favoriteCurretn = allProducts.filter(
		(product) => product.id === 1
	);

	return <div>Favorite Page</div>;
}

export default Favorite;
