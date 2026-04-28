'use client';
import type { Metadata } from 'next';
import Link from 'next/link';
import Rates from '../components/Rates';

import { services } from './services';
import { categories } from './filters';

export default function Home() {
	return (
		<main className={`main center flex column gap-medium`}>
			{services.map((service, index) => {
				return (
					<section key={index} className={`width-full`}>
						<Rates
							title={service.title}
							services={service.services}
							description={service.description}
						/>
					</section>
				);
			})}
			<section className={`width-full`}>
				<h2 className="lowercase style-1 thin">Want to work with Patrick?</h2>
				<p className={`style-1`}>
					Tip me on{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.paypal.com/ncp/payment/CNTTTX8KJLDRJ"
					>
						Paypal
					</Link>
					.
				</p>

				<p>
					Email me for orders or further questions:{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:patrickyambrick@gmail.com"
					>
						patrickyambrick@gmail.com
					</Link>{' '}
					.
				</p>
				<p>Or DM me through the platform you found me on.</p>
			</section>
		</main>
	);
}
