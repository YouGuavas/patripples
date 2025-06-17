import Image from 'next/image';
import pat from '../../public/universal/pat.svg';

type propsType = {
	title: string;
	stats: statType;
};
interface statType {
	strength: string;
	intelligence: string;
}

export default function CharacterSheet(props: propsType) {
	return (
		<>
			<h3 className={`style-1 thin lowercase spaced`}>{props.title}: </h3>
			<div className={`image-container`}>
				<Image src={pat.src} fill alt={`Phase One Pat`} />
			</div>{' '}
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{Object.keys(props.stats).map((stat) => (
					<li
						key={`${stat}`}
						className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1`}
					>
						{stat}: {props.stats.strength}
					</li>
				))}
			</ul>
		</>
	);
}
