import Image from 'next/image';

type propsType = {
	title: string;
	stats: {
		strength: string;
		intelligence: string;
	};
	image: string;
};
interface statsType {
	strength: string;
	intelligence: string;
}

export default function CharacterSheet(props: propsType) {
	const cap = '20';
	return (
		<>
			<h3 className={`style-1 thin lowercase spaced`}>{props.title}: </h3>
			<div className={`image-container center`}>
				<Image src={props.image} fill alt={`Phase One Pat`} />
			</div>{' '}
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{(Object.keys(props.stats) as (keyof statsType)[]).map((stat) => (
					<li
						key={`${stat}`}
						className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1`}
					>
						{stat}: {props.stats[stat]}/{cap}
					</li>
				))}
			</ul>
		</>
	);
}
