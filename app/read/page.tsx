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
			<h1 className={`style-1 thin lowercase`}>Want to read my mind?</h1>
			<ul className={`flex column gap-small no-deco pad-none`}>
				{routes.map(({ name, path }) => (
					<li key={path}>
						<Link
							scroll={false}
							href={`read/${path}`}
							id={name.toLowerCase()}
							className={`no-deco style-1 thin lowercase color-2`}
						>
							{`Want to read about ${name}?`}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
