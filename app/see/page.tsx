import Image from 'next/image';
import D3Graph from '../components/D3Graph';
import Link from 'next/link';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';
import wetland from '../../public/universal/healthy_wetland.svg';
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

				<InteractiveList categories={categories} routes={routes} />
				<Image
					alt="A healthy pond or wetland"
					height={500}
					width={500}
					src={wetland.src}
				/>

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
