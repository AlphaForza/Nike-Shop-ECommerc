import React from 'react';
import './productcard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/sliceCart';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { likeToggle } from '../../store/sliceUser';

function ProductCard({ product }) {
	const dispatch = useDispatch();

	const { user, isLogged } = useSelector((state) => state.userStore);

	const addToCartHandler = () => {
		dispatch(addToCart(product));
	};

	return (
		<div className='product-card'>
			<div className='favoriteIcon'>
				{isLogged ? (
					<>
						{user.favorites?.includes(product.id) ? (
							<AiFillHeart
								onClick={() => dispatch(likeToggle(product.id))}
							/>
						) : (
							<AiOutlineHeart
								onClick={() => dispatch(likeToggle(product.id))}
							/>
						)}
					</>
				) : null}
			</div>
			<div className='product-card-image'>
				<img src={product.img} alt='product' />
			</div>
			<div className='product-card-body'>
				<h3>{product.title}</h3>
				<p className='price'>${product.price}</p>
				<p>{product.source}</p>
			</div>
			<div className='product-card-footer'>
				<a
					className='btn btn-primary btn-sm'
					href={product.url}
					target='blank'>
					Details
				</a>
				<button
					className='btn btn-danger btn-sm'
					onClick={addToCartHandler}>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
