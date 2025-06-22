import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import glyph_1 from '../../public/patroglyphs/glyph_1.svg';

export const metadata: Metadata = {
	title: 'Patripples | Contact',
	description: 'You can contact Pat by emailing pat@patripples.com',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className="lowercase style-1 thin">
				Want Pat to make you a website?
			</h1>
			<p className={`style-1`}>Patroglyphs coming soon.</p>
			<div className={`image-container centered bg-2 z5`}>
				<Image src={glyph_1} fill alt={`Ascension Glyph`} />
			</div>{' '}
		</main>
	);
}
