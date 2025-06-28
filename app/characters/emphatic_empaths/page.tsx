import { characterType } from '../characters';
import { complete } from '../characters';
import Image from 'next/image';
import Link from 'next/link';
import the_banana from '../../../public/characters/the_banana.svg';
import the_girls from '../../../public/characters/the_girls.svg';
import the_bloomkeeper from '../../../public/characters/the_bloomkeeper.svg';
import alloy_alchemist from '../../../public/characters/alloy_alchemist.svg';
import the_foretold from '../../../public/characters/the_foretold.svg';
import tiny_mushroom from '../../../public/universal/tiny_mushroom.svg';

import CharacterSheet from '../../components/CharacterSheet';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | The Empaths',
	description:
		"Patripples | Patrick Other - See yourself mythologized as you've always visualized! SVG animations, character portraits, storytelling, and more.",
};

export default function Character() {
	const empaths: characterType = complete[0];
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
	} = empaths;
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>
				The Emphatic Empaths Character Page.
			</h1>

			<section className={`flex gap-large center`}>
				<div className="jumbo-container bg-6">
					<Image src={photo} alt={alt} fill />
				</div>
				{standard_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}
				<div className="jumbo-container bg-6">
					<Image src={portrait} alt={alt} fill />
				</div>
				{mythic_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}
				<div className="jumbo-container bg-6">
					<Image src={mythic} alt={alt} fill />
				</div>
				<div className="flex gap-small center">
					<div className="image-container bg-6">
						<Image src={the_girls.src} alt={alt} fill />
					</div>
					<div className="image-container bg-6">
						<Image src={the_bloomkeeper.src} alt={alt} fill />
					</div>
					<div className="image-container bg-6">
						<Image src={alloy_alchemist.src} alt={alt} fill />
					</div>
					<div className="image-container bg-6">
						<Image src={the_foretold.src} alt={alt} fill />
					</div>
					<div className="image-container bg-6">
						<Image src={the_banana.src} alt={alt} fill />
					</div>
				</div>
			</section>
			<section className={`flex gap-large center`}>
				<p className={`width-full left-align paragraph`}>
					Like these? Don&apos;t forget to check out the rest of my{' '}
					<Link className={`no-deco spaced thin lowercase`} href="./characters">
						Characters
					</Link>
				</p>
				<p className={`width-full left-align paragraph`}>
					Low on funds, but have something delightful or transformative to swap
					for my spellwork? I get down to alchemy. I did The Empaths&apos; page
					in trade for a tiny mushroom, plus some good company:
				</p>
				<div className="image-container">
					{' '}
					<Image
						src={tiny_mushroom.src}
						alt={'A tiny, 3D-printed mushroom.'}
						fill
					/>
				</div>
				<p className={`width-full left-align paragraph`}>
					What will we exchange?
				</p>
			</section>
		</main>
	);
}
