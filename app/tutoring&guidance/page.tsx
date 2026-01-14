import Image from 'next/image';

import Card from '@/app/components/Card';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Patripples | Tutoring & Guidance',
	description:
		'About tutoring and guidance from Patrick Yambrick at patripples.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<Card
				title={'GED English'}
				body={'What Patrick did:'}
				footer={'Result:'}
			/>
		</main>
	);
}
