import Image from 'next/image';
import BuyButton from './BuyButton';

interface ProductProps {
	id: number;
	name: string;
	price: number;
	image: string;
	url: string;
	stock: number;
}
const Product: React.FC<ProductProps> = ({
	id,
	name,
	price,
	image,
	url,
	stock,
}) => {
	const renderStock = () => {
		if (stock < 2) {
			return <p className={``}>Hurry! Only {stock} left!</p>;
		} else {
			return <p></p>;
		}
	};

	return (
		<div className={``}>
			<h3>{name}</h3>
			<Image src={image} alt={`Preview of ${image}`} height={200} width={150} />
			<p>Price: ${price}</p>
			{renderStock()}
			<BuyButton id={id} title={name} price={price} stock={stock} url={url} />
		</div>
	);
};

export default Product;
