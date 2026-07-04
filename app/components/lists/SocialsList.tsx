import Link from 'next/link';

type propsType = {
	entries: entryType[];
};

type entryType = {
	name: string;
	ig?: string;
	facebook?: string;
	etsy?: string;
	website?: string;
};

export default function SocialsList(props: propsType) {
	const possibleLinks = ['facebook', 'ig', 'etsy', 'website'] as const;
	return (
		<>
			<ul
				className={`flex column gap-medium no-deco pad-none width-half centered left-align`}
			>
				{props.entries.map((entry) => (
					<li
						key={`${entry.name}`}
						className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex column`}
					>
						{entry.name}
						<ul
							className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex gap-large left-align`}
						>
							{possibleLinks.map((social) => {
								if (!entry[social]) {
									return;
								}
								return (
									<li key={social}>
										<Link
											href={entry[social]}
											className="style-1 no-deco lowercase darken"
										>
											{social}
										</Link>
									</li>
								);
							})}
						</ul>
					</li>
				))}
			</ul>
		</>
	);
}
