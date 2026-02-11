import { characterType } from '../characters';
import { complete } from '../characters';
import Image from 'next/image';
import BarterTicker from '@/app/components/widgets/BarterTicker';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | The Cartographer',
	description:
		"Patripples | Patrick Other - See yourself mythologized as you've always visualized! SVG animations, character portraits, storytelling, and more.",
};

export default function Character() {
	const empaths: characterType = complete[0];
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
	} = empaths;
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>{title} Dossier.</h1>

			<section className={`flex gap-large center`}>
				{standard_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}
				<div className="portrait-container bg-6">
					<Image src={portrait} alt={alt} fill />
				</div>
				{mythic_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}
				<div className="portrait-container bg-6">
					<Image src={mythic} alt={alt} fill />
				</div>
			</section>
		</main>
	);
}
