import Link from 'next/link';
type propsType = {
	updates: updateType[];
};
type updateType = {
	text: String;
	href: String;
};
export default function UpdateTicker(props: propsType) {
	return (
		<ul
			className={`margin-none flex-wrap-none scroll-container left width-full left-align flex row gap-small no-deco`}
		>
			{props.updates.map((update, index) => {
				return (
					<li className="scroll-text" key={index}>
						<Link
							href={`${update.href}`}
							className={`margin-none no-deco style-1 lowercase left-align`}
						>
							{update.text}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
