import Link from 'next/link';
type propsType = {
	title?: string | null;
	sections: string[];
};

export default function TableOfContents(props: propsType) {
	return (
		<ul className={`width-half left-align numerals flex column gap-small`}>
			{props.title ? (
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					{props.title}
				</h3>
			) : null}
			{props.sections.map((section: string, index: number) => {
				return (
					<li key={index}>
						<Link
							className={`spaced color-2 rounded darken`}
							href={`#${index + 1}`}
						>
							{section}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
