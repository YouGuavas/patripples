import Image from 'next/image';
import D3Graph from '../components/D3Graph';
import Link from 'next/link';
import routes from './routes';

//import RippleGraph from '../components/RippleGraph';

import type { Metadata } from 'next';

import styles from '../page.module.css';
import { SpaceProviderWrapper } from '../ThemeProviderWrapper';

const nodes = [
	{ id: 'You' },
	{ id: 'Person A' },
	{ id: 'Person B' },
	{ id: 'Person A Friends' },
	{ id: 'Person B Friends' },
	{ id: 'Relatives' },
	{ id: 'Employees' },
	{ id: 'Coworkers' },
	{ id: 'Idea A' },
	{ id: 'Idea B' },
];

const links = [
	{ source: 'You', target: 'Idea A' },
	{ source: 'Idea A', target: 'Person A' },
	{ source: 'You', target: 'Idea B' },
	{ source: 'Idea B', target: 'Person B' },
];

export const metadata: Metadata = {
	title: 'Patripples | Visualizations',
	description:
		'See the visuals that drive the ripples behind Patripples! Envisioned by Patrick Yambrick.',
};
export default function Home() {
	return (
		<SpaceProviderWrapper>
			<main className={`main center height-full`}>
				<h1 className={`style-1 lowercase thin`}>See my thoughts.</h1>

				<ul className={`flex gap-medium no-deco pad-none h-full w-full center`}>
					{routes.map(({ name, path }) => (
						<li key={path}>
							<Link
								scroll={false}
								href={`see/${path}`}
								id={name.toLowerCase()}
								className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2 bordered`}
							>
								{`See ${name}.`}
							</Link>
						</li>
					))}
				</ul>
				{/*<RippleGraph nodes={nodes} links={links} />*/}
				{/*<D3Graph
				data={[
					//{ x: 0, y: 1 },
					{ x: 1, y: 1 },
					//{ x: 2, y: 1 },
					{ x: 1, y: 2 },
					//{ x: 0, y: 2 },
				]}
				width={50}
				height={50}
			/>*/}
			</main>
		</SpaceProviderWrapper>
	);
}
