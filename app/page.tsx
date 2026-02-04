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
					<Image
						fetchPriority="high"
						loading="eager"
						src={cartographer.src}
						fill
						alt="The Cartographer"
					/>
				</div>
				<div className="left-align width-half centered flex column">
					<p className={`paragraph left`}>Hi! I&apos;m The Cartographer.</p>
					<p className={`paragraph left`}>
						You must be who they sent to help. I knew they&apos;d send someone.
					</p>
					<p className={`paragraph left`}>
						As you can see, I&apos;ve become calcified.
					</p>
					<p className={`paragraph left`}>
						Oh, you&apos;re not who they sent to help? You must be here to chat
						with the other guy.
					</p>
					<p className={`paragraph left`}>Kinda 67, not gonna lie.</p>
					<p className={`paragraph left`}>
						Anyway, carry on. He&apos;s right down there.
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
			</section>

			<section className={`width-full flex margin-top-sm`}>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>What is here.</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Blog Posts and Articles</strong> – Explore practical
							knowledge with Patrick and cosmic insights with The Cartographer.
						</li>
						<li>
							<strong>Tutoring and Peer Guidance</strong> – Work with Patrick as
							a tutor or The Cartographer as a peer guide.
						</li>{' '}
						<li>
							<strong>Web Development and Design</strong> -{' '}
							<Link
								className={`style-1 no-deco spaced lowercase`}
								href={`./hire`}
							>
								Find
							</Link>{' '}
							examples of Patrick&apos;s website development and design here.
						</li>{' '}
						<li>
							<strong>Repair and Problem Solving</strong> - See how Patrick and
							The Cartographer solve problems, and learn the principles
							scaffolding patripples.
						</li>
					</ul>{' '}
				</div>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>
						How Patrick Helps You.
					</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Clarify Your Creative Idea</strong> - Do you have a really
							cool idea? Does it not land like it should? Been there, seen it
							all. Here to help you step past that pitfall.
						</li>
						<li>
							<strong>Build On Your Web Design</strong> - Like what you&apos;re
							working with, but think it needs a visual touch up? Or do you want
							to hit reset and go with a full rebrand? Either way, Patrick can
							help you with your web design woes.
						</li>
						<li>
							<strong>Amplify Your Business</strong> - Are you good at what you
							do? Are you proud of it? Do you do great work for others, and
							still see less traffic than you reasonably should? Let me take a
							look at your ads and website content, and see if we can remedy
							this travesty.
						</li>
					</ul>{' '}
				</div>
			</section>
		</main>
	);
}
