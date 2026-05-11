'use client';
import type { Metadata } from 'next';
import Link from 'next/link';
import Rates from '../components/Rates';

import { services } from './services';
import { categories } from './filters';
import { Collapsible } from '../components/blog/Collapsible';

export default function Home() {
	fetch('./api/db/products')
		.then((response) => response.json())
		.then((data) => console.log(data));
	async function postProduct(url = '', data = {}) {
		const response = await fetch(url, {
			method: 'POST', // Specify the method
			headers: {
				'Content-Type': 'application/json', // Tell the server you're sending JSON
			},
			body: JSON.stringify(data), // Convert data to string
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json(); // Parse the response body as JSON
	}

	return (
		<main className={`main center flex column gap-medium`}>
			<button
				onClick={() =>
					postProduct('./api/db/products', {
						title: 'test',
						price: 10,
						type: 'test',
					})
				}
			>
				Post
			</button>
			{services.map((service, index) => {
				return (
					<Collapsible key={index} title={service.title} orientation="center">
						<Rates
							title={service.title}
							services={service.services}
							description={service.description}
						/>
					</Collapsible>
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
