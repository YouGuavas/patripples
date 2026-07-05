// components/EmailForm.tsx
'use client';

import { useState } from 'react';

import Link from 'next/link';

interface propsType {
	categories: string[];
	entries: entryType[];
}
type entryType = {
	name: string;
	tags: string[];
	ig?: string;
	facebook?: string;
	etsy?: string;
	website?: string;
};

export function InteractiveSocialsList(props: propsType) {
	const possibleLinks = ['facebook', 'ig', 'etsy', 'website'] as const;

	const [filter, setFilter] = useState('x');
	async function handleFilter(e: React.FormEvent, category: string) {
		setFilter(category.toLowerCase());
		return filter;
	}

	return (
		<>
			<h3 className={`style-1 thin lowercase spaced`}>Filters: </h3>

			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{props.categories.map((category) => (
					<li
						key={`${category}`}
						className={`${
							filter.toLowerCase() === category.toLowerCase() ? 'active' : ''
						} no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
						onClick={(e) => handleFilter(e, category)}
					>
						{category}
					</li>
				))}
			</ul>

			<ul
				className={`grid grid-2-cols gap-medium no-deco pad-none width-full centered center`}
			>
				{props.entries.map((entry) => {
					if (entry.tags.indexOf(filter.toLowerCase()) === -1) return <></>;
					return (
						<li
							key={`${entry.name}`}
							className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex column center`}
						>
							{entry.name}
							<ul
								className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex gap-large`}
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
					);
				})}
			</ul>
		</>
	);
}
