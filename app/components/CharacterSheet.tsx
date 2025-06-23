'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import stats from '../../public/icons/graph_icon.svg';
import bio from '../../public/universal/book_bio.svg';
import glyph_1 from '../../public/patroglyphs/glyph_1.svg';

type propsType = {
	phase: string;
	title: string;
	archetype: string[];
	stats: statsType;
	portrait: string;
	photo: string;
	mythic: string;
	standard_bio: string[];
	mythic_bio: string[];
	href: string;

	alt: string;
};

type statsType = {
	strength: number;
	intelligence: number;
	dexterity: number;
	constitution: number;
	wisdom: number;
	charisma: number;
};

export default function CharacterSheet(props: propsType) {
	const variants = [
		{ title: 'Photo', portal: 'standard', image: props.photo },
		{ title: 'Portrait', portal: 'standard', image: props.portrait },
		{ title: 'Mythic', portal: 'mythic', image: props.mythic },
	];
	const icons = [
		{ title: 'stats', image: stats },
		{ title: 'bio', image: bio },
		{ title: 'glyphs', image: glyph_1 },
	];

	const [active, setActive] = useState('bio');
	const [portal, setPortal] = useState('standard');
	const [image, setImage] = useState(props.portrait);
	const [title, setTitle] = useState('portrait');
	const cap = 20;

	const toggleActive = (category: string) => {
		if (active.toLowerCase() === category) {
			setActive('');
		} else {
			setActive(category.toLowerCase());
		}
	};
	const handleImageSwap = (
		new_image: string,
		new_portal: string,
		new_title: string
	) => {
		if (image !== new_image) {
			setImage(new_image);
			setTitle(new_title.toLowerCase());
		}

		if (portal !== new_portal) {
			setPortal(new_portal);
		}
	};
	useEffect(() => {
		console.log(portal + active);
		if (active === 'stats' || 'bio') {
			return;
		}
	}, [portal]);

	return (
		<div className={`center width-half`}>
			<Link href={props.href}>
				<div className={`icon-container centered`}>
					<Image src={props.phase} fill alt={`Phase Rune`} />
				</div>
			</Link>
			<h4 className={`style-1 thin lowercase spaced font-large`}>
				&quot;{props.title}&quot;
			</h4>
			<div className={`image-container centered bg-2 z5`}>
				<Image src={image} fill alt={`${props.alt}`} />
			</div>{' '}
			<h5 className={`style-1 thin lowercase spaced`}>
				{props.archetype[0]} / / {props.archetype[1]}
			</h5>
			<ul className={`no-deco flex center pad-none gap-small`}>
				{icons.map((icon, index) => {
					return (
						<li
							key={index}
							className={`${
								active === icon.title ? 'active' : null
							} icon-container pointer darken`}
							onClick={() => {
								toggleActive(icon.title);
							}}
						>
							<Image src={icon.image.src} fill alt={`${icon.title} Icon`} />
						</li>
					);
				})}
			</ul>
			<ul className={`flex center gap-small pad-none no-deco`}>
				{variants.map((variant, index) => {
					return (
						<li
							key={index}
							className={`${
								title === variant.title.toLowerCase() ? 'active' : null
							} lowercase thin spaced pointer darken bordered px-1 py-1`}
							onClick={() => {
								handleImageSwap(variant.image, variant.portal, variant.title);
							}}
						>
							{variant.title}
						</li>
					);
				})}
			</ul>
			<ul
				className={`${
					active === 'stats' ? null : 'collapsed'
				} flex gap-medium no-deco pad-none width-full center`}
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
			<div
				className={`${portal + active === 'standardbio' ? null : 'collapsed'}`}
			>
				{props.standard_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}
			</div>
			<div
				className={`${portal + active === 'mythicbio' ? null : 'collapsed'}`}
			>
				{props.mythic_bio.map((paragraph: string, index) => {
					return (
						<p key={index} className={`width-full left-align paragraph`}>
							{paragraph}
						</p>
					);
				})}{' '}
			</div>
		</div>
	);
}
