// components/EmailForm.tsx
'use client';

import { useState } from 'react';
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
			{ id: 1, name: 'Impulse', price: 0, tier: 'impulse' },
			{ id: 2, name: 'Core', price: 0, tier: 'core' },
			{ id: 3, name: 'Premium', price: 0, tier: 'premium' },
		],
	},
) {
	const [cart, setCart] = useState<Record<number, number>>({});
	const [total, setTotal] = useState(0);
	const [flatTax, setFlatTax] = useState(false);

	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [error, setError] = useState<string | null>(null);

	const sales = useLiveQuery(() => db.sales.toArray());

	const handleTap = (id: number) => {
		setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
	};

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		setStatus('loading');
		setError(null);
	}

	return (
		<>
			<div className="w-full max-w-md mx-auto h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between p-4 select-none font-sans">
				{/* Top Header / Live Totals Node --- needs adjustments*/}
				<div className="flex column width-full gap-small">
					<div>
						<span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
							Live Total
						</span>
						<h1 className="width-full">${total.toFixed(2)}</h1>
					</div>
					<button
						onClick={() => setCart({})}
						className="left-align style-1 lowercase rounded bordered px-1 flex column centered center darken"
					>
						Clear Cart
					</button>
				</div>
			</div>

			<div className={`width-full flex column gap-large center`}>
				<div className={`flex width-full row center`}>
					<div className={`flex column gap-small width-half`}>
						{props.itemData.map((item) => {
							return (
								<div
									className={`flex row gap-small center centered width-half between`}
									key={item.name}
								>
									<button
										id={`${item.name}`}
										value={item.name}
										name={item.name}
										onClick={(e) => handleTap(item.id)}
										className=""
									>
										{item.name}
									</button>
								</div>
							);
						})}
					</div>
				</div>

				<div className={`width-full row center`}>
					<button
						type="submit"
						disabled={status === 'loading'}
						className="py-1 style-1 lowercase thin spaced width-half bg-1 borderless darken"
					>
						{status === 'loading' ? 'submitting...' : 'submit'}
					</button>
				</div>
			</div>
			{status === 'success' && (
				<p className="text-green-600">
					Thanks! You&apos;re already ahead of the curve.
				</p>
			)}

			{status === 'error' && error && <p className="text-red-600">{error}</p>}

			{/*bottom control dock - needs adjustment */}
			<div className="flex row gap-small">
				<button
					onClick={() => setFlatTax(!flatTax)}
					className={`py-3 rounded bg-1 ${flatTax ? 'darkened ' : ''}`}
				>
					Flat Tax: {flatTax ? 'ON' : 'OFF'}
				</button>
				<button className="py-3 bg-1 rounded darken">Generate QR Code</button>
			</div>
		</>
	);
}
