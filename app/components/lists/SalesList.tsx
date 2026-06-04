// components/lists/SalesList.tsx
'use client';

import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/app/lib/db';

type item = {
	id: number;
	name: string;
	price: number;
	tier: string;
	time?: string;
	count?: number;
};

type propsType = {
	itemData: item[];
};

export default function SalesList(
	props: propsType = {
		itemData: [
			{ id: 1, name: 'Impulse', price: 15, tier: 'impulse' }, // Added example base prices for logic verification
			{ id: 2, name: 'Core', price: 45, tier: 'core' },
			{ id: 3, name: 'Premium', price: 85, tier: 'premium' },
		],
	},
) {
	const [cart, setCart] = useState<Record<number, number>>({});
	const [flatTax, setFlatTax] = useState(false);
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [error, setError] = useState<string | null>(null);

	const sales = useLiveQuery(() => db.sales.toArray());

	// FIXED: Derive total instantly on every render from the current cart state
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = Object.entries(cart).reduce((sum, [itemIdStr, qty]) => {
			const itemId = Number(itemIdStr);
			const item = props.itemData.find((i) => i.id === itemId);
			return sum + (item ? item.price * qty : 0);
		}, 0);
		setTotal(newTotal);
	}, [cart, props.itemData]);

	const handleTap = (id: number) => {
		setCart((prev) => ({
			...prev,
			[id]: (prev[id] ?? 0) + 1,
		}));
	};

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus('loading');
		setError(null);

		try {
			// Future IndexedDB write logic goes here
			setStatus('success');
		} catch (err) {
			setError('Sync failed');
			setStatus('error');
		}
	}

	return (
		<div className="width-full flex column between py-2 px-1 gap-large">
			{/* Top Header / Live Totals Node */}
			<div className="flex column width-full gap-small">
				<div>
					<span className="">Live Total</span>
					{/* FIXED: Uses the dynamically calculated total variable */}
					<h1 className="width-full">${total.toFixed(2)}</h1>
				</div>
				<button
					onClick={() => setCart({})}
					className="left-align style-1 lowercase rounded bordered px-2 py-2 flex column centered center darken"
				>
					Clear Cart
				</button>
			</div>

			{/* Main Grid Section */}
			<div className="width-full flex column gap-large center">
				<div className="flex width-full row center">
					<div className="flex row gap-small width-half">
						{props.itemData.map((item) => {
							const qty = cart[item.id] ?? 0;
							const hasItems = qty > 0;

							return (
								<button
									key={item.id} // Fixed: Use unique item.id for key instead of name string
									id={item.name}
									value={item.name}
									name={item.name}
									onClick={() => handleTap(item.id)}
									className={`py-2 px-2 rounded borderless ${hasItems ? 'active-item-style' : ''}`} // Toggle your custom active styles here
								>
									{item.name} {hasItems && `(${qty})`}
								</button>
							);
						})}
					</div>
				</div>

				<div className="width-full row center">
					<button
						onClick={handleSubmit}
						disabled={status === 'loading'}
						className="py-1 style-1 lowercase thin spaced width-half bg-1 borderless darken"
					>
						{status === 'loading' ? 'submitting...' : 'submit'}
					</button>
				</div>

				{status === 'success' && (
					<p className="style-1 lowercase thin spaced width-full center">
						Thanks! You&apos;re already ahead of the curve.
					</p>
				)}

				{status === 'error' && error && (
					<p className="style-1 lowercase thin spaced width-full center">
						{error}
					</p>
				)}
			</div>

			{/* Bottom Control Dock */}
			<div className="flex row gap-small width-full center">
				<button
					onClick={() => setFlatTax(!flatTax)}
					className={`py-2 rounded bg-1 borderless ${
						flatTax ? 'darkened bordered' : ''
					}`}
				>
					Flat Tax: {flatTax ? 'ON' : 'OFF'}
				</button>
				<button className="py-2 bg-1 rounded darken borderless">
					Generate QR Code
				</button>
			</div>
		</div>
	);
}
