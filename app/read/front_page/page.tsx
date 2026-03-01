import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from './categories';
import { InteractiveLinkList as InteractiveList } from '@/app/components/InteractiveList';

export const metadata: Metadata = {
	title:
		'Patripples | Read learning companion pieces written by Patrick Yambrick',
	description:
		"Read Patrick's learning companion pieces at Patripples. Written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>read Patrick&apos;s mind.</h1>
			<InteractiveList categories={categories} routes={routes} />
		</main>
	);
}
