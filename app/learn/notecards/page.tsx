import type { Metadata } from 'next';
import Card from '@/app/components/Card';
import notes from './notecards.json';

export const metadata: Metadata = {
	title: 'Patripples | Notecards',
	description:
		"Study Patrick's math notes with Patripples notecards. Notes written by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>study Patrick&apos;s notes.</h1>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{notes.map(({ title, subject, body, footer }, index) => {
					return (
						<li
							key={index}
							className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2`}
						>
							<Card
								title={title}
								subject={subject}
								body={body}
								footer={footer}
							/>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
