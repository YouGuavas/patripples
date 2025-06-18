import Image from 'next/image';
import Link from 'next/link';
import CharacterSheet from '../components/CharacterSheet';
import pat from '../../public/universal/pat.svg';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Read',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>phases of pat.</h1>
			<CharacterSheet
				title={`Phase One`}
				stats={{ strength: '1', intelligence: '9' }}
				image={pat}
			/>
		</main>
	);
}
