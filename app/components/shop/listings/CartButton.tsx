'use client';
import Image from 'next/image';
import cart from '@/public/icons/cart.svg';

export default function CartButton() {
	return (
		<button
			id="snipcart-link"
			className={`snipcart-checkout snipcart-summary cart-button fixed`}
		>
			<Image alt="Shopping Cart" src={cart.src} height={35} width={35} />
			<span className="snipcart-total-items"></span>
		</button>
	);
}
