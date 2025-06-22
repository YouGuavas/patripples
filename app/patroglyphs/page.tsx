import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import glyphs from './glyphs';

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
			<Glyphousel glyphs={glyphs} />
		</main>
	);
}
