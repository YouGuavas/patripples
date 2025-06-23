'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import stats from '../../public/icons/graph_icon.svg';
import bio from '../../public/universal/book_bio.svg';

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

	const [active, setActive] = useState('');
	const [portal, setPortal] = useState('standard');
	const [image, setImage] = useState(props.portrait);
	const cap = 20;

	const toggleActive = (category: string) => {
		if (active.toLowerCase() === category) {
			setActive('');
		} else {
			setActive(category.toLowerCase());
		}
	};
	const handleImageSwap = (new_image: string, new_portal: string) => {
		if (image !== new_image) {
			setImage(new_image);
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
				<li
					className={`icon-container pointer darken`}
					onClick={() => {
						toggleActive('stats');
					}}
				>
					<Image src={stats.src} fill alt={`Stats Icon`} />
				</li>
				<li
					className={`icon-container pointer darken`}
					onClick={() => {
						toggleActive(`bio`);
					}}
				>
					<Image src={bio.src} fill alt={`Bio Icon`} />
				</li>
			</ul>
			<ul className={`flex center gap-small pad-none no-deco`}>
				{variants.map((variant) => {
					return (
						<li
							className={`lowercase thin spaced pointer darken bordered px-1 py-1`}
							onClick={() => {
								handleImageSwap(variant.image, variant.portal);
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
				{props.standard_bio.map((paragraph: string) => {
					return (
						<p className={`width-full left-align paragraph`}>{paragraph}</p>
					);
				})}
			</div>
			<div
				className={`${portal + active === 'mythicbio' ? null : 'collapsed'}`}
			>
				{props.mythic_bio.map((paragraph: string) => {
					return (
						<p className={`width-full left-align paragraph`}>{paragraph}</p>
					);
				})}{' '}
			</div>
		</div>
	);
}
