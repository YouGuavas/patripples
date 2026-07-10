// components/EmailForm.tsx
'use client';

import { useState } from 'react';

import Link from 'next/link';

interface propsType {
	categories: string[];
	entries: entryType[];
	states?: string[];
}
type entryType = {
	name: string;
	tags?: string[];
	ig?: string;
	facebook?: string;
	etsy?: string;
	website?: string;
	state?: string;
	media?: string;
	email?: string;
	links?: string[];
};

export function InteractiveSocialsList(props: propsType) {
	const possibleLinks = ['facebook', 'ig', 'etsy', 'website'] as const;

	const [filter, setFilter] = useState('x');
	const [stateFilter, setStateFilter] = useState('x');
	const normalizedFilter = filter.toLowerCase();
	const normalizedStateFilter = stateFilter.toLowerCase();

	function handleFilter(_e: React.FormEvent, category: string) {
		setFilter(category.toLowerCase());
	}
	function handleState(_e: React.FormEvent, state: string) {
		setStateFilter(state);
	}

	function matchesCategory(entry: entryType) {
		if (normalizedFilter === 'x') return true;
		if (!entry.tags?.length) return false;
		return entry.tags.some((tag) => tag.toLowerCase() === normalizedFilter);
	}

	function matchesState(entry: entryType) {
		if (normalizedStateFilter === 'x') return true;
		return entry.state?.trim().toLowerCase() === normalizedStateFilter;
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
			{props.states ? (
				<ul className={`flex gap-medium no-deco pad-none width-full center`}>
					{props.states.map((state) => (
						<li
							key={`${state}`}
							className={`${
								stateFilter.toLowerCase() === state.toLowerCase()
									? 'active'
									: ''
							} no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
							onClick={(e) => handleState(e, state)}
						>
							{state}
						</li>
					))}
				</ul>
			) : (
				<></>
			)}

			<ul
				className={`grid grid-2-cols gap-medium no-deco pad-none width-full centered center`}
			>
				{props.entries.map((entry) => {
					if (!matchesState(entry)) return null;

					if (entry.tags?.length) {
						if (!matchesCategory(entry)) return null;
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
											return null;
										}
										return (
											<li key={entry[social]}>
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
					}

					if (entry.media && entry.links) {
						return (
							<li
								key={`${entry.name}`}
								className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex column center`}
							>
								{entry.name}
								{entry.state ? <span>{`State: ${entry.state}`}</span> : <></>}

								{entry.email ? <span>{`Email: ${entry.email}`}</span> : <></>}
								<ul
									className={`no-deco lowercase style-1 spaced color-2 rounded px-1 py-1 flex gap-large`}
								>
									{entry.links.map((link) => {
										return (
											<li key={link}>
												<Link
													href={link}
													className="style-1 no-deco lowercase darken"
												>
													{link.indexOf('instagram') !== -1
														? 'IG'
														: link.indexOf('facebook') !== -1
															? 'Facebook'
															: 'Website'}
												</Link>
											</li>
										);
									})}
								</ul>
							</li>
						);
					}

					return null;
				})}
			</ul>
		</>
	);
}
