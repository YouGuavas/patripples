import Image from 'next/image';
import Link from 'next/link';
import { complete } from './characters';
import CharacterSheet from '../components/CharacterSheet';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Characters',
	description:
		'SVG character portraits, storytelling, and more by Patrick Yambrick.',
};
export default function Character() {
	complete.reverse();
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>Character Files.</h1>
			<p>This is a side project that I am updating as I go along.</p>
			<section className={`flex gap-large center`}>
				{complete.map((character, index) => {
					const {
						phase,
						title,

						portrait,
						mythic,
						standard_bio,
						mythic_bio,
						href,
						alt,
						tier,
					} = character;
					return (
						<CharacterSheet
							key={index}
							phase={phase}
							title={title}
							portrait={portrait}
							mythic={mythic}
							standard_bio={standard_bio}
							mythic_bio={mythic_bio}
							href={href}
							alt={alt}
							tier={tier}
						/>
					);
				})}
			</section>
		</main>
	);
}
