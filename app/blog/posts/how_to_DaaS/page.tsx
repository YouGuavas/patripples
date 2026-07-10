import type { Metadata } from 'next';
import Collapsible from '@/app/components/blog/Collapsible';
import ByLine from '@/app/components/blog/ByLine';
export const metadata: Metadata = {
	title:
		'Patripples Blog | How To Do Data As A Service By Accident By Patrick Other',
	description:
		'Patripples blog is divided into categories and posts. Read a post written by Patrick Other on How To Do Data As A Service.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<h1 id="top" className={`lowercase style-1`}>
					How to Do Data As A Service By Accident
					<ByLine author="Patrick Other" date="07/10/2026" />
				</h1>
			</section>
			<Collapsible title="Intro">
				<p className={`paragraph centered width-half block left-align`}></p>
			</Collapsible>

			{/*<Collapsible title="Ten Days At The Rock Shop"></Collapsible>*/}
		</main>
	);
}
