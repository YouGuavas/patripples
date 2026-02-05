import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/app/components/shop/listings/ProductGallery';

import products from './products';

export const metadata: Metadata = {
	title: 'Patripples | Hire Patrick',
	description:
		"Services offered by Patrick Yambrick. Based in Flint, Michigan, Patrick's offerings include web development and design with react and nextjs, content writing, tutoring, and mechanical and electrical repair. Centered in Genesee county and surrounding, with digital services available nationwide.",
};

export default function Home() {
	return (
		<main className={`main center flex column gap-medium`}>
			<section className={`width-full`}>
				<h2 className="lowercase style-1 thin">Want to work with Patrick?</h2>
				<Gallery products={products} />
			</section>
		</main>
	);
}
