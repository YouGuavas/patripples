import Image from 'next/image';
import Link from 'next/link';
import { complete } from './characters';
import CharacterSheet from '../components/CharacterSheet';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Characters',
	description:
		"Patripples | Patrick Other - See yourself mythologized as you've always visualized! SVG animations, character portraits, storytelling, and more.",
};
export default function Character() {
	complete.reverse();
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>mythic dossiers.</h1>

			<section className={`flex gap-large center`}>
				{complete.map((character, index) => {
					const {
						phase,
						title,
						archetype,
						stats,
						photo,
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
							archetype={archetype}
							stats={stats}
							photo={photo}
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
