import { characterType } from '../characters';
import { complete } from '../characters';
import CharacterSheet from '../../components/CharacterSheet';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | The Resurrectionist',
	description:
		"Patripples | Patrick Other - See yourself mythologized as you've always visualized! SVG animations, character portraits, storytelling, and more.",
};

export default function Character() {
	const morgan: characterType = complete[1];
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
	} = morgan;
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>
				The Resurrectionist Character Card.
			</h1>

			<section className={`flex gap-large center`}>
				<CharacterSheet
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
			</section>
		</main>
	);
}
