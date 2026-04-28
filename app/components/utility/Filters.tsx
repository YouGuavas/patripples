'use client';
import { useState } from 'react';

type propsType = {
	categories: string[];
};
export default function Filters(props: propsType) {
	const [filter, setFilter] = useState('X');
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
		</>
	);
}
