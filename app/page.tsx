import Image from 'next/image';
import Link from 'next/link';
import ripples from '../public/logos/ripples.png';
import cartographer from '../public/characters/cartographer_calcified.svg';
import pat from '../public/characters/pat_solo.svg';
import EmailForm from './components/EmailForm';
import fish from '../public/memes/fish_fear.png';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Patripples | Home',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<div className={`icon-container`}>
				<Image src={ripples.src} fill alt="Ripple logo" />
			</div>
			<section className={`width-full center`}>
				<h1 className={`lowercase style-1`}>Welcome to patripples.</h1>
				<div className={`image-container center centered`}>
					<Image src={cartographer.src} fill alt="The Cartographer" />
				</div>
				<p className={`paragraph left`}>I&apos;m The Cartographer.</p>
				<p className={`paragraph left`}>
					Looks like you&apos;re who they sent to help. I knew they&apos;d send
					someone.
				</p>
				<p className={`paragraph left`}>
					As you can see, I&apos;ve become calcified.
				</p>
				<p className={`paragraph left`}>
					Oh, you&apos;re not who they sent to help? You must be here for the
					other guy.
				</p>
				<p className={`paragraph left`}>
					Carry on. He&apos;s right down there.
				</p>
				<p className={`paragraph left`}>I&apos;ll just... stand here.</p>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase spaced style-1 thin`}>
					How to put yourself on The Map.
				</h2>{' '}
				<p>
					If you haven&apos;t already, add yourself to The Cartographer&apos;s
					mailing list for Future Updates:
				</p>
				<EmailForm />
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase spaced style-1 thin`}>I&apos;m Patrick!</h2>
				<div className={`image-container centered`}>
					<Image src={pat.src} fill alt="Pat" />
				</div>
				<h2 className={`lowercase spaced style-1 thin`}>
					Here&apos;s What I Do
				</h2>
				<ul className={`no-deco pad-none`}>
					<li>I build websites in React and Nextjs.</li>
					<li>I create SVGs in Inkscape.</li>
					<li>I convert your legacies into legends.</li>
				</ul>
				<h2 className={`lowercase spaced style-1 thin`}>How to patripple.</h2>
				<p className={`paragraph width-full left`}>
					As with the concept, this is a living document. I am working on it as
					I go along. You are welcome to come back to check for updates whenever
					it pleases you.
				</p>
				<p className={`paragraph width-full left`}>
					Have you ever tossed a handful of pebbles into a pond or a creek, and
					watched the water ripple?
				</p>{' '}
				<p className={`paragraph width-full left`}>
					If you have, you know how to patripple.
				</p>
				<p className={`paragraph width-full left`}>
					It&apos;s the process of enacting major change over time through
					small, mundane actions.
				</p>
			</section>

			<section className={`width-full center`}>
				<h2 className={`lowercase spaced style-1 thin`}>What is here.</h2>{' '}
				<ul className={`no-deco pad-none`}>
					<li>
						Essays & Articles – Deep dives into concepts that shape our world.
					</li>
					<li>
						Visual Explorations – Mathematical and conceptual visualizations
						that make abstract ideas tangible.
					</li>{' '}
					<li>
						Experiments & Projects – Hands-on applications of the theories
						discussed.
					</li>{' '}
					<li>
						Community & Discussion – A space for those who want to engage in
						meaningful conversations.
					</li>
				</ul>{' '}
			</section>
		</main>
	);
}
