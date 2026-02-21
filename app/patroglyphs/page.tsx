import type { Metadata } from 'next';
import { glyphs_1 } from './glyphs';

import Carousel from '../components/Carousel';

export const metadata: Metadata = {
	title: 'Patripples | Patroglyphs',
	description: 'You can contact Pat by emailing pat@patripples.com',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className="lowercase style-1 thin">Patroglyphs</h1>
			<p className={`style-1`}>Patroglyphs coming soon.</p>
			<Carousel images={[glyphs_1.glyphs[0].src, glyphs_1.glyphs[1].src]} />
		</main>
	);
}
