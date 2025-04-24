import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';

export const metadata: Metadata = {
	title: 'Patripples | How to Count Change',
	description: 'Learn how to count change with patripples.',
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>how to count change.</h1>
			<p className={`paragraph width-full block left-align`}>
				There exist a number of ways in which to go about approximating the
				impact of any given action.
			</p>
		</main>
	);
}
