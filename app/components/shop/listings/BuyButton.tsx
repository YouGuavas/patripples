'use client';

type propsType = {
	id: number;
	price: number;
	image?: string;
	stock: number;
	url: string;
};

export default function BuyButton(props: propsType) {
	const { id, price, image, stock, url } = props;
	const handleAddToCart = () => {
		if (window.Snipcart) {
			window.Snipcart.api.cart.items.add({
				id,
				name,
				price,
				quantity: 1,
			});
		}
	};
	return (
		<button
			data-item-image={image}
			data-item-url={url}
			data-item-max-quantity={stock}
			onClick={handleAddToCart}
		>
			Add to Cart
		</button>
	);
}
