import Image from 'next/image';

type propsType = {
	phase: string;
	title: string;
	archetype: string[];
	age: number[];
	stats: statsType;
	image: string;
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
	const cap = 20;
	return (
		<div className={`center width-half`}>
			<h2 className={`style-1 uppercase spaced`}>{props.phase}:</h2>
			<h3 className={`style-1 thin lowercase spaced font-large`}>
				&quot;{props.title}&quot;
			</h3>
			<div className={`image-container centered bg-2 z5`}>
				<Image src={props.image} fill alt={`${props.alt}`} />
			</div>{' '}
			<h4 className={`style-1 thin lowercase spaced`}>
				{props.archetype[0]} / / {props.archetype[1]}
			</h4>
			<p>
				Age: {props.age[0]} - {props.age[1]}
			</p>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
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
