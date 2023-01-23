import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../component/ProductCard/ProductCard';
import './showroom.scss';

function ShowRoom() {
	const { products } = useSelector((state) => state.productStore);
	const { category } = useParams();

	return (
		<section className='showroom container'>
			<aside>
				<h2 className='filter'>Filter Price</h2>
				<div className='low'>
					<p>From lower to bigger</p>
					<input type='checkbox' name='low' id='' />
				</div>
			</aside>
			<article>
				{products[category].map((el, index) => {
					return <ProductCard key={index} product={el} />;
				})}
			</article>
		</section>
	);
}

export default ShowRoom;
