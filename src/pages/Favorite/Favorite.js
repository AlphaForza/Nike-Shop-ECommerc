import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../component/ProductCard/ProductCard';
import './favorite.scss';

function Favorite(props) {
	const { allProducts } = useSelector((state) => state.productStore);
	const { user } = useSelector((state) => state.userStore);
	let favoriteCurretn = null;
	if (user.favorites) {
		favoriteCurretn = allProducts.filter(
			(product, index) => product.id === user.favorites[index]
		);
		console.log(favoriteCurretn);
	}

	return (
		<div className='favorite'>
			{favoriteCurretn?.map((el, index) => {
				return <ProductCard key={index} product={el} />;
			})}
		</div>
	);
}

export default Favorite;
