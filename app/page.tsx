import Link from 'next/link';
import Image from 'next/image';

import ripples from '@/public/logos/ripples.png';
import cartographer from '@/public/characters/cartographer_calcified.svg';
import pat from '@/public/characters/pat_solo.svg';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title:
		'Patripples | Web Development, Design, and Writing in Michigan by Patrick Yambrick',
	description:
		'Patripples: a learning and web development hub by Patrick Yambrick. Based in Flint, Michigan, Patrick offers personalized websites and writing, together with relevant educational resources.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<div className={`icon-container centered`}>
					<Image src={ripples.src} fill loading="eager" alt="Ripple logo" />
				</div>
				<h1 id="top" className={`lowercase style-1`}>
					Welcome to patripples.
				</h1>
				<h2 className={`lowercase spaced style-1 thin`}>I&apos;m Patrick!</h2>
				<div className={`image-container centered`}>
					<Image
						src={pat.src}
						loading="lazy"
						fetchPriority="low"
						fill
						alt="Patrick"
					/>
				</div>
				<h2 className={`lowercase spaced style-1 thin`}>
					Here&apos;s What I Do.
				</h2>
				<ul
					className={`no-deco pad-none centered width-half left-align flex column gap-medium`}
				>
					<li>I drive sales.</li>

					<li>I build websites with Nextjs.</li>

					<li>I build management tools with Python.</li>

					<li>I write and edit content that converts.</li>

					<li>I create logo and character SVGs in Inkscape.</li>
				</ul>
			</section>

			<section
				className={`width-full flex gap-medium margin-top-sm margin-bottom-sm`}
			>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>What is here.</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Projects and Rates</strong> – Find out what I offer you
							and how much it will cost.
						</li>
						<li>
							<strong>Nonstandard Writing</strong> – Ever wonder what it&apos;d
							be like if an SEO master chose to break all the rules? You can
							find exactly that in my writings. (For your content, I will follow
							all the rules.)
						</li>{' '}
						<li>
							<strong>SVG art, logos, and characters</strong> – Want a
							fast-loading icon, logo, or character design? I am your guy.
						</li>
					</ul>{' '}
				</div>
				<div className={`center width-half`}>
					<h3 className={`lowercase spaced style-1 thin`}>How I Help You.</h3>{' '}
					<ul
						className={`no-deco pad-none centered flex column gap-small left-align width-full`}
					>
						<li>
							<strong>Drive You Sales</strong> - Want more sales? With a 92%
							in-person conversion rate, I offer you that, digitally.
						</li>
						<li>
							<strong>Build On Your Small Business Systems</strong> - Clunky
							inventory system slowing you down? Get ahold of me.
						</li>
						<li>
							<strong>Talk About You</strong> - Do you do great work for others,
							and still struggle to sell yourself? Let me help.
						</li>
					</ul>{' '}
				</div>
			</section>
			<section className={`width-full center margin-bottom-sm`}>
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
						As you can see, I&apos;ve become calcified - and relegated.
					</p>
					<p className={`paragraph left`}>
						Oh, you&apos;re not who they sent to help? You must be here to chat
						with the other guy.
					</p>
					<p className={`paragraph left`}>
						Kinda{' '}
						<Link
							className={`no-deco lowercase style-1 thin spaced color-1 rounded`}
							href="/read/front_page/holiday_special_saint_patrick"
						>
							Not Wearing Green
						</Link>{' '}
						energy, not gonna lie.
					</p>
					<p className={`paragraph left`}>
						Anyway, I don&apos;t know what you&apos;re doing down here.
						He&apos;s right{' '}
						<Link
							href="#top"
							className={`no-deco lowercase style-1 thin spaced color-1 rounded`}
						>
							up there
						</Link>
						.
					</p>
					<p className={`paragraph left`}>I&apos;ll just... stand here.</p>
				</div>
			</section>
		</main>
	);
}
