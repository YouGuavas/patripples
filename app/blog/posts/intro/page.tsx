import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import ByLine from '@/app/components/blog/ByLine';
export const metadata: Metadata = {
	title: 'Patripples Blog | Intro Post by Patrick Yambrick',
	description:
		'Patripples blog is divided into categories and posts. This is the intro post written by Patrick Yambrick.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<h1 id="top" className={`lowercase style-1`}>
					Blog by Patrick Yambrick.
				</h1>
			</section>

			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
