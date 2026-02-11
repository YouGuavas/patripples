import Image from 'next/image';
import Link from 'next/link';
import raditz_goku from '@/public/memes/raditz_goku.jpeg';

import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title: "Patripples | 'Vague Wording' by Patrick Yambrick",
	description:
		'Follow Patrick as he shares painfully earned wisdom in a digestible format. This one is about vague wording, how it crushes web traffic, and how to fix it. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Vague Wording
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Sunday, Feb 1, 2026'}
				edited={'Thursday, Feb 5, 2026'}
			/>

			<br />
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is This?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I have always been a fan of the saying, &quot;Smart people learn from
					their mistakes. Wise people learn from the mistakes of others.&quot;
					In that context, I offer you wisdom painfully earned and mistakes
					carelessly made, so that you don&apos;t waste your time doing the
					same.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As someone who likes to try their hand at everything, and who insists
					on doing it the wrong way first so that he can learn where the edges
					lie, I have much wisdom to share.
				</p>
				<p className={`paragraph width-full block left-align`}>
					This is my attempt at bringing you brief, useful snippets of wisdom to
					make your life easier.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Vague Wording.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					&quot;Welcome to my class on tensor analysis. It is about tensors,
					etc. Hope that helps.&quot; We have all done something like this. If
					you are looking at this page, that is because you are an intelligent
					person. You are no doubt talented in your domain. When you think about
					that niche thing within your domain, you mentally conjure its shape so
					easily that you sometimes forget how hard it was for you to get where
					you are. How clear, meticulous, and deliberate you had to be while you
					were learning.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is not a knock. It is a compliment.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You have been working at your craft for <em>so</em> long that you have
					forgotten the pain that a past version of you struggled mightily with,
					and maybe never thought you&apos;d overcome.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you&apos;re a Dragon Ball fan, that&apos;s like what happened with
					Raditz.
				</p>
				<Image
					src={raditz_goku.src}
					height={500}
					width={250}
					alt={`Raditz stands triumphantly over Goku.`}
				/>
				<p className={`paragraph width-full block left-align`}>
					If you&apos;re not, it&apos;s like that kid who used to tease you in
					elementary school who you haven&apos;t seen or heard from in decades.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That&apos;s what you&apos;ve done with your craft. You should be
					proud. That said, it is contributing to your vaguely worded ads and
					posts. And that is limiting your traffic.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Is Vague Wording Bad?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					An excellent question. Vague wording crushes ad traffic and
					followthrough in a number of ways.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Web Traffic Limiter: Algorithmic Suppression
				</h3>
				<p className={`paragraph width-full block left-align`}>
					It is no secret that in 2026, AI and algorithms are dominating the
					internet. In order to see our traffic soar, we have to appease the
					digital deities of these ever-churning seas.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We&apos;ve got to make the algorithm happy.
				</p>

				<ul
					className={`no-deco pad-none flex column gap-small left-align width-half`}
				>
					<h4
						className={`lowercase style-1 thin spaced left width-full block left-align`}
					>
						How do we keep AI happy?
					</h4>
					<li>
						<strong>Clear Wording</strong> - AI and the algorithm like it when
						we are clear with our words. Clear wording helps filtration systems
						- digital and biological - to efficiently sift through our written
						thought and emerge with meaning.
					</li>
					<li>
						<strong>Focused Content</strong> - Where clear wording allows AI and
						search engines to efficiently sift through the ideas within our
						words, delivering focused content helps them to determine the
						directionality of our thoughts.
					</li>
					<li>
						<strong>Appropriate Tone</strong> - If wording helps with filtration
						efficiency, and content focus helps with determining thought
						directionality, then tone projects intent. Some AI can detect{' '}
						<Link
							className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
							href="https://builtin.com/artificial-intelligence/grammarly-tone-detector"
						>
							40 different tones
						</Link>
						. When AI or the algorithm can quickly and accurately determine your
						tone, they can then make inferences about your intent which help
						them to better index your content.
					</li>
				</ul>
				<p className={`paragraph width-full block left-align`}>
					Adjustments to any of these three go a long way, and since they are
					interconnected, adjustments tend to compound. When we make a change to
					tone, say, not only does it often implicitly also change our clarity,
					but the change in tone impacts and amplifies any deliberate changes in
					clarity or focus which we choose to enact.
				</p>
				<p className={`paragraph width-full block left-align`}>
					We can keep AI and the algorithm happy by being clear, focused,
					concise, and direct. Before I share my next ad or blog post, I am
					going to take the extra time to scan it for simplifications,
					clarifications, and anything in the tone which implies grandiosity or
					smugness on my part. If you find yourself with less traffic than you
					feel you reasonably deserve, I invite you to try the same.{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href="/contact"
					>
						Let me know
					</Link>{' '}
					what happens.
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Web Traffic Limiter: User Intimidation
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Human interaction follows a very similar pattern as those mentioned in
					the previous section. This is not surprising. AI and algorithms intend
					to model after human behavior, so naturally, human behavior shares
					symmetry with AI behavior. Although the pattern is the same, the
					reason can be quite different.
				</p>
				<p className={`paragraph width-full block left-align`}>
					While true that human visitors&apos; sifting and scanning efficiency
					is catalyzed by clear, focused, and well-formatted content - as with
					AI - that often isn&apos;t the highest-leverage shift that we see. So
					what is?
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is something that comes downstream of that - lessened user
					intimidation. One of the most pervasive anxieties shared by people the
					world over is the fear of looking foolish or receiving criticism from
					someone whom one admires. Most of us admire those we perceive to be
					talented and competent. Many today are burdened with worry, impostor
					syndrome, and the fear of looking dumb.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What that means for us as writers and content creators is that when we
					are composing a post, ad, or article, we now have a point of reference
					against which to test our content: imagined user comfort. Some may
					prefer to filter out inexperienced or low-intent users through tone or
					ambiguity, but I prefer to invite the curious. That&apos;s just me. I
					saw{' '}
					<Link
						className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
						href={`https://www.nytimes.com/2025/12/19/well/high-performers-multiple-disciplines-early-study.html#:~:text=Young%20prodigies%20%E2%80%94%20the%20teenage%20sports,journeys%20in%20very%20different%20ways.`}
					>
						a study
					</Link>{' '}
					recently, the results of which suggest that late bloomers tend to
					become high achievers more frequently than child prodigies.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When I keep that in mind, it is much easier for me to imagine taking
					on a student or a client whose idea is solid, even if some aspects are
					rough around the edges, or their background or presentation are
					non-standard.
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Dyy3d8MnlA4?si=wCHyossmMraIKfHi"
					title="YouTube video player"
					frameBorder={0}
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					If you want to take a similar stance and invite as many passionately
					curious people to your content as possible, that can be as easy as
					carrying the intention not to intimidate people like the citizen
					scientist featured in the video above when you write and record your
					content.
				</p>
			</section>
			<section>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How To Go from Pitfall To Prosperity
				</h3>

				<p className={`paragraph width-full block left-align`}>
					I offer ad and content clarification services. If you want to try your
					hand at it yourself, take a second look at your content while holding
					these thoughts in mind. I will write more in depth pieces on the
					individual ideas shared here later, as they each deserve to be looked
					at closely and broken apart. Check back later!
				</p>
				<p className={`paragraph width-full block left-align`}>
					For now, in the spirit of keeping Patrick&apos;s Pitfalls short and
					sweet, I am going to wrap this up.
				</p>
			</section>
			<Footer title={"'Vague Wording'"} />
		</main>
	);
}
