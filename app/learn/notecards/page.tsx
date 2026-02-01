import type { Metadata } from 'next';
import Card from '@/app/components/Card';
import routes from './routes';
import categories from './categories';
import InteractiveList from '@/app/components/InteractiveList';

export const metadata: Metadata = {
	title: 'Patripples | Notecards',
	description:
		"Study Patrick's math notes with Patripples notecards. Notes written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>study Patrick&apos;s notes.</h1>
			<InteractiveList categories={categories} routes={routes} />
		</main>
	);
}
