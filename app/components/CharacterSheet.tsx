'use client';
import Image from 'next/image';
import { useState } from 'react';
import stats from '../../public/icons/graph_icon.svg';

type propsType = {
	phase: string;
	title: string;
	archetype: string[];
	age: number[];
	stats: statsType;
	image: string;
	photo: string;
	fantasy: string;

	alt: string;
};
interface statsType {
	strength: number;
	intelligence: number;
	dexterity: number;
	constitution: number;
	wisdom: number;
	charisma: number;
}

export default function CharacterSheet(props: propsType) {
	const [active, setActive] = useState(props.image);
	const [image, setImage] = useState(props.image);
	const cap = 20;

	return (
		<div className={`center width-half`}>
			<h3 className={`style-1 uppercase spaced`}>{props.phase}:</h3>
			<h4 className={`style-1 thin lowercase spaced font-large`}>
				&quot;{props.title}&quot;
			</h4>
			<div className={`image-container centered bg-2 z5`}>
				<Image src={image} fill alt={`${props.alt}`} />
			</div>{' '}
			<h5 className={`style-1 thin lowercase spaced`}>
				{props.archetype[0]} / / {props.archetype[1]}
			</h5>
			<p>
				Age: {props.age[0]} - {props.age[1]}
			</p>
			<div className={`icon-container pointer darken`}>
				<Image src={stats.src} fill alt={`Stats Icon`} />
			</div>
			<div className={`flex center gap-small`}>
				<div
					className={`lowercase thin spaced pointer darken bordered px-1 py-1`}
					onClick={() => {
						setImage(props.photo);
					}}
				>
					Photo
				</div>

				<div
					className={`lowercase thin spaced pointer darken bordered px-1 py-1`}
					onClick={() => {
						setImage(props.image);
					}}
				>
					Portrait
				</div>

				<div
					className={`lowercase thin spaced pointer darken bordered px-1 py-1`}
					onClick={() => {
						setImage(props.fantasy);
					}}
				>
					Mythic
				</div>
			</div>
			<ul
				className={`collapsible flex gap-medium no-deco pad-none width-full center`}
			>
				{(Object.keys(props.stats) as (keyof statsType)[]).map((stat) => (
					<li
						key={`${stat}`}
						className={`width-half no-deco font-medium thin spaced color-2 rounded px-1 py-1 bordered`}
					>
						{stat}: {props.stats[stat]}/{cap}
					</li>
				))}
			</ul>
		</div>
	);
}
