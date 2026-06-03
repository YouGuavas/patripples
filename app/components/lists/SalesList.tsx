// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/app/lib/db';

type item = {
	name: string;
	price: number;
	tier: string;
	time?: string;
};

type propsType = {
	itemData: item[];
};

export default function SalesList(
	props: propsType = {
		itemData: [
			{ name: 'Impulse', price: 0, tier: 'impulse' },
			{ name: 'Core', price: 0, tier: 'core' },
			{ name: 'Premium', price: 0, tier: 'premium' },
		],
	},
) {
	const [name, setName] = useState('');
	const [tier, setTier] = useState('');
	const [time, setTime] = useState('');
	const [price, setPrice] = useState(0);

	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [error, setError] = useState<string | null>(null);

	const sales = useLiveQuery(() => db.sales.toArray());

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		setStatus('loading');
		setError(null);
	}

	return (
		<form onSubmit={handleSubmit} className="width-full form center">
			<div className={`width-full flex column gap-large center`}>
				<div className={`flex width-full row center`}>
					<div className={`flex column width-half`}>
						{props.itemData.map((item) => {
							return (
								<div className={`flex row gap-small center`} key={item.name}>
									<label
										htmlFor={item.name}
										className="width-half left-align centered"
									>
										{item.name}
									</label>
									<input
										type="checkbox"
										value={item.name}
										name={item.name}
										onChange={(e) => setName(e.target.value)}
										className="width-half"
									/>
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
		</form>
	);
}
