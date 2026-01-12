import type { Metadata } from 'next';

import Link from 'next/link';
import routes from './routes';

export const metadata: Metadata = {
	title: 'Patripples | Learn',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>read my mind.</h1>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{routes.map(({ name, path }, index) => {
					return (
						<li
							key={index}
							className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2`}
						>
							<Link
								href={path}
								className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2`}
							>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
