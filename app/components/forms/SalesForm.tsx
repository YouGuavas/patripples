// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../../api/lib/supabase';

export default function SalesForm() {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [socialHandle, setSocialHandle] = useState('');

	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [error, setError] = useState<string | null>(null);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!emailRegex.test(email)) {
			setError('Please enter a valid email.');
			return;
		}

		setStatus('loading');
		setError(null);

		const { error } = await supabase
			.from('emails')
			.insert([{ email, source: 'ripple-form' }]);

		if (error) {
			setStatus('error');
			setError(error.message);
		} else {
			setStatus('success');
			setEmail('');
		}
	}

	return (
		<form onSubmit={handleSubmit} className="width-full form center">
			<div className={`width-full flex column gap-large center`}>
				<div className={`flex width-full row center`}>
					<div className={`flex column width-half`}>
						<label htmlFor="email" className="width-half left-align">
							First Name
						</label>
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Your First Name"
							className="py-1 width-full"
							required
						/>
					</div>
					<div className={`flex column width-half`}>
						<label htmlFor="email" className="width-half left-align">
							Last Name
						</label>
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Your Last Name"
							className="py-1 width-full"
							required
						/>
					</div>
				</div>

				<div className={`flex width-full row center`}>
					<div className={`flex column width-half`}>
						<label htmlFor="email" className="width-half left-align">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="your@email.com"
							className="py-1 width-full"
							required
						/>
					</div>
					<div className={`flex column width-half`}>
						<label htmlFor="email" className="width-half left-align">
							Social Handle (optional)
						</label>
						<input
							type="text"
							value={socialHandle}
							onChange={(e) => setSocialHandle(e.target.value)}
							placeholder="@yourhandle (optional Twitter or Instagram)"
							className="py-1 width-full"
						/>
					</div>
				</div>

				<div className={`width-full row center`}>
					<button
						type="submit"
						disabled={status === 'loading'}
						className="py-1 style-1 lowercase thin spaced width-half"
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
