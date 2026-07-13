import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import ByLine from '@/app/components/blog/ByLine';
import Link from 'next/link';
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
					Intro Post
				</h1>
			</section>
			<Collapsible title="Intro" orientation="center">
				<p className={`paragraph centered width-half block left-align`}>
					My <Link href="/blog/">Blog</Link> is a dump of thoughts I deem to be
					useful.
				</p>
				<p className={`paragraph centered width-half block left-align`}>
					The idea here is that these will be thoughts which I think will be of
					use to you. Yes, I am writing for SEO. But I also hold this belief
					that any work we do should provide real benefit to others.
				</p>
				<p className={`paragraph centered width-half block left-align`}>
					Some of these will be thoughts I have while working on games or
					personal projects, like{' '}
					<Link href="/portfolio/games/dungeon">Dungeon.</Link>
				</p>
			</Collapsible>

			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
