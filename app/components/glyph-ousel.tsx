'use client';

import Image from 'next/image';

type propsType = {
	title: string;
	glyphs: Glyph[];
	description: string;
};

type Glyph = {
	name: string;

	src: string;
};

export default function Glyphousel(props: propsType) {
	return (
		<>
			<h3 className={`lowercase style-1 spaced thin`}>{props.title}</h3>
			<p>{props.description}</p>
			<ul className={` flex gap-large center centered pad-none width-full`}>
				{props.glyphs.map((glyph) => {
					return (
						<li className={`image-container centered bg-2 z5 no-deco`}>
							<Image src={glyph.src} fill alt={`${glyph.name} Glyph`} />;
						</li>
					);
				})}
			</ul>
		</>
	);
}
