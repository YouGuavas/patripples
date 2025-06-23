import Image from 'next/image';
import Link from 'next/link';
import { complete, incomplete } from './characters';
import CharacterSheet from '../components/CharacterSheet';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Characters',
	description:
		"Patripples | Patrick Other - See yourself mythologized as you've always visualized! SVG animations, character portraits, storytelling, and more.",
};
export default function Character() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>characters of patripples.</h1>
			<section className={`flex gap-large center`}>
				<h2 className={`style-1 thin lowercase width-full`}>Complete</h2>
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
						/>
					);
				})}
			</section>

			<section className={`flex gap-large center`}>
				<h2 className={`style-1 thin lowercase width-full`}>Incomplete</h2>
				{incomplete.map((character, index) => {
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
						/>
					);
				})}
			</section>
		</main>
	);
}
