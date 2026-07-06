'use client';

import Link from 'next/link';

export default function Nav() {
	return (
		<header
			className={`width-full top py-1 left flex z10 center`}
			id="menu-full"
		>
			<p>
				Like something you see here?{' '}
				<Link className={`spaced thin no-deco`} href={`./marketing/contact`}>
					Contact
				</Link>{' '}
				-{' '}
				<Link
					className={`spaced thin no-deco`}
					href={`https://www.paypal.com/ncp/payment/CNTTTX8KJLDRJ`}
				>
					Paypal
				</Link>{' '}
				-{' '}
				<Link className={`spaced thin no-deco`} href={`./marketing/market`}>
					Market
				</Link>{' '}
			</p>
		</header>
	);
}
