import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../component/ProductCard/ProductCard';
import './favorite.scss';

function Favorite(props) {
	// const { allProducts } = useSelector((state) => state.productStore);
	const { favorite } = useSelector((state) => state.userStore);
	console.log(favorite);

	return (
		<div className='favorite'>
			{favorite?.map((el, index) => {
				return <ProductCard key={index} product={el} />;
			})}
		</div>
	);
}

export default Favorite;
