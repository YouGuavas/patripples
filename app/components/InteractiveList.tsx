// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';
import Link from 'next/link';

interface propsType {
	categories: string[];
	routes: routeType[];
}
interface routeType {
	name: string;
	path: string;
	tags: string[];
}

export default function InteractiveList(props: propsType) {
	const [filters, setFilters] = useState(['']);
	async function handleFilter(e: React.FormEvent, category: string) {
		if (category.toLowerCase() === 'clear') {
			setFilters(['']);
		} else {
			setFilters(['swamp']);
		}
		console.log(filters);
		return filters;
	}

	return (
		<>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{props.categories.map((category) => (
					<li
						key={`${category}`}
						className={`${
							filters.indexOf(category) !== -1 ? 'active' : ''
						} no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2 bordered pointer`}
						onClick={(e) => handleFilter(e, category)}
					>
						{category}
					</li>
				))}
			</ul>
			<ul
				className={`flex gap-medium no-deco pad-none height-half width-full center`}
			>
				{props.routes.map(({ name, path, tags }) => (
					<li key={`${name}`}>
						<Link
							scroll={false}
							href={`read/${path}`}
							id={name.toLowerCase()}
							className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2 bordered`}
						>
							{`Read ${name}.`}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
