import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';

export const metadata: Metadata = {
	title: 'Patripples | Blog',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>read my mind.</h1>
			<ul className={`flex gap-medium no-deco pad-none`}>
				{routes.map(({ name, path }) => (
					<li key={path}>
						<Link
							scroll={false}
							href={`read/${path}`}
							id={name.toLowerCase()}
							className={`no-deco lowercase style-1 thin spaced color-2 rounded lighten px-2 py-2 bordered`}
						>
							{`Read ${name}.`}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
