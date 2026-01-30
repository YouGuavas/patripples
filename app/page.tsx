import Link from 'next/link';
import Image from 'next/image';
import ripples from '@/public/logos/ripples.png';
import cartographer from '@/public/characters/cartographer_calcified.svg';
import pat from '@/public/characters/pat_solo.svg';
import EmailForm from '@/app/components/EmailForm';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title:
		'Patripples | Web Development and Tutoring in Michigan by Patrick Yambrick',
	description:
		'Patripples: a learning and web development hub by Patrick Yambrick. Based in Flint, Michigan, Patrick offers personalized websites and tutoring, as well as educational resources.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center`}>
				<div className={`icon-container centered`}>
					<Image src={ripples.src} fill alt="Ripple logo" />
				</div>
				<h1 className={`lowercase style-1`}>Welcome to patripples.</h1>
				<div className={`image-container center centered`}>
					<Image src={cartographer.src} fill alt="The Cartographer" />
				</div>
				<div className="left-align width-half centered flex column">
					<p className={`paragraph left`}>I&apos;m The Cartographer.</p>
					<p className={`paragraph left`}>
						You must be who they sent to help. I knew they&apos;d send someone.
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
				</div>
			</section>

			<section className={`width-full center`}>
				<h2 className={`lowercase spaced style-1 thin`}>I&apos;m Patrick!</h2>
				<div className={`image-container centered`}>
					<Image src={pat.src} fill alt="Pat" />
				</div>
				<h2 className={`lowercase spaced style-1 thin`}>
					Here&apos;s What Patrick Does
				</h2>
				<ul
					className={`no-deco pad-none centered width-half left-align flex column gap-small`}
				>
					<li>Patrick builds websites in React and Nextjs.</li>
					<li>Patrick writes and edits content that converts.</li>

					<li>Patrick creates logo and character SVGs in Inkscape.</li>
					<li>
						Patrick offers ACT, GED, and college level tutoring, specializing in
						mathematics.
					</li>
					<li>
						Patrick repairs electronics and cars, and solves general day-to-day
						problems for people.
					</li>
				</ul>
				<h2 className={`lowercase spaced style-1 thin`}>How to patripple.</h2>
				<div className="width-half centered left-align flex column">
					<p className={`paragraph width-full left`}>
						As with the concept, this is a living document. I am working on it
						as I go along. You are welcome to come back to check for updates
						whenever it suits you.
					</p>
					<p className={`paragraph width-full left`}>
						Have you ever tossed a handful of pebbles into a pond or a creek,
						and watched the water ripple?
					</p>{' '}
					<p className={`paragraph width-full left`}>
						If you have, you know how to patripple.
					</p>
					<p className={`paragraph width-full left`}>
						It&apos;s the process of enacting major change over time through
						small, mundane actions.
					</p>
				</div>
			</section>

			<section className={`width-full center`}>
				<h2 className={`lowercase spaced style-1 thin`}>What is here.</h2>{' '}
				<ul
					className={`no-deco pad-none centered flex column gap-small left-align width-half`}
				>
					<li>
						Essays and Articles – Explore practical knowledge with Patrick and
						cosmic insights with The Cartographer.
					</li>
					<li>
						Tutoring and Peer Guidance –{' '}
						<Link
							className={`style-1 no-deco spaced lowercase`}
							href={`./hire`}
						>
							Hire
						</Link>{' '}
						Patrick as a tutor or The Cartographer as a peer guide.
					</li>{' '}
					<li>
						Web Development and Design - Find examples of Patrick&apos;s website
						development and design projects here.
					</li>{' '}
					<li>
						Repair and Problem Solving - See how Patrick and The Cartographer
						solve problems, and learn the principles scaffolding patripples.
					</li>
				</ul>{' '}
			</section>
		</main>
	);
}
