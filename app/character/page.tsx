import Image from 'next/image';
import Link from 'next/link';
import CharacterSheet from '../components/CharacterSheet';
import pat_full from '../../public/universal/pat_full.svg';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Read',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Character() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>phases of pat.</h1>
			<CharacterSheet
				title={`Phase One`}
				stats={{ strength: '12', intelligence: '18' }}
				image={pat_full}
				alt="Phase One Pat"
			/>
		</main>
	);
}
