import type { Metadata } from 'next';
import { glyphs_1 } from './glyphs';

import Glyphousel from '../components/glyph-ousel';

export const metadata: Metadata = {
	title: 'Patripples | Patroglyphs',
	description: 'You can contact Pat by emailing pat@patripples.com',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className="lowercase style-1 thin">Patroglyphs</h1>
			<p className={`style-1`}>Patroglyphs coming soon.</p>
			<Glyphousel
				title={`${glyphs_1.title}`}
				glyphs={glyphs_1.glyphs}
				description={`${glyphs_1.description}`}
			/>
		</main>
	);
}
