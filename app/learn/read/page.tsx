import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from '@/app/categories';
import InteractiveList from '@/app/components/InteractiveList';

export const metadata: Metadata = {
	title: 'Patripples | Read',
	description:
		"Read Patrick's essays and journal entries at Patripples. Written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>read Patrick&apos;s mind.</h1>
			<InteractiveList categories={categories} routes={routes} />
		</main>
	);
}
