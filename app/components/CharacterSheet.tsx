'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import stats from '../../public/icons/graph_icon.svg';
import bio from '../../public/universal/book_bio.svg';
import { characterType } from '../characters/characters';

type statsType = {
	strength: number;
	intelligence: number;
	dexterity: number;
	constitution: number;
	wisdom: number;
	charisma: number;
};

export default function CharacterSheet(props: characterType) {
	const variants = [
		//{ title: 'Photo', portal: 'standard', image: props.photo },
		{ title: 'Portrait', portal: 'standard', image: props.portrait },
		{ title: 'Mythic', portal: 'mythic', image: props.mythic },
	];
	const icons = [{ title: 'bio', image: bio }];

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
		new_title: string,
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
		<div className={`center width-full`}>
			<div className={`centered center width-full`}>
				<h4 className={`style-1 thin lowercase spaced font-large`}>
					<Link href={props.href} className={`style-1 no-deco`}>
						&quot;{props.title}&quot;
					</Link>
				</h4>
				<div className={`portrait-container centered bg-2 z5`}>
					<Image src={image} fill alt={`${props.alt}`} />
				</div>{' '}
				{/*<h5 className={`style-1 thin lowercase spaced`}>
					{props.archetype[0]} / / {props.archetype[1]}
				</h5>*/}
				<ul className={`flex center gap-small pad-none no-deco`}>
					{variants.map((variant, index) => {
						return (
							<li
								key={index}
								className={`${
									title === variant.title.toLowerCase() ? 'active' : null
								} lowercase thin spaced pointer darken px-1 py-1 style-1`}
								onClick={() => {
									handleImageSwap(variant.image, variant.portal, variant.title);
								}}
							>
								{variant.title}
							</li>
						);
					})}
				</ul>
				{/*<ul
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
				</ul>*/}
				<div
					className={`${
						portal + active === 'standardbio' ? null : 'collapsed'
					}`}
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
				{/*<p className={`width-half centered`}>
					Want a card like this? Check out my{' '}
					<Link className={`no-deco spaced style-1`} href={`./hire`}>
						Mythic {props.tier} <em className={`style-1`}>Mythmaking</em> tier!
					</Link>
				</p>*/}
			</div>
		</div>
	);
}
