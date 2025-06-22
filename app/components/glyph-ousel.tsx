'use client';

import Image from 'next/image';

type propsType = {
	glyphs: Glyph[];
};

type Glyph = {
	name: string;

	src: string;
};

export default function Glyphousel(props: propsType) {
	return (
		<ul className={` flex gap-small center centered pad-none`}>
			{props.glyphs.map((glyph) => {
				return (
					<li className={`image-container centered bg-2 z5 no-deco`}>
						<Image src={glyph.src} fill alt={`${glyph.name} Glyph`} />;
					</li>
				);
			})}
		</ul>
	);
}
