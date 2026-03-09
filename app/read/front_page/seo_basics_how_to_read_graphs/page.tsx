import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

import marie from '@/public/photos/portraits/marie_curie.jpg';

export const metadata: Metadata = {
	title:
		"Patripples | 'SEO Basics: How to Read Graphs (Women\'s Day Edition)' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'SEO Basics: How to Read Graphs (Women\'s Day Edition).' Resilience and quiet influence are key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<section className={`py-2 px-1`}>
				<h1
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					SEO Basics: How to Read Graphs (Women&apos;s Day Edition)
				</h1>
				<ByLine
					author={`Patrick Yambrick`}
					date={'Sunday, Mar 8, 2026'}
					edited={'Monday, Mar 9, 2026'}
				/>
				<p className={`paragraph width-full block left-align`}>
					Edit March 9: corrected typo just after{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Carter_Family"
					>
						Carter Family
					</Link>{' '}
					music video.
				</p>

				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/uErKI0zWgjg?si=KwaYr9GKwaSyS046"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Did you know{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Johnny_Cash"
					>
						Johnny Cash
					</Link>{' '}
					was my cousin? Allegedly. At least that&apos;s what I was told growing
					up. I don&apos;t know for certain, and I don&apos;t intend to make any
					outlandish or untrue claims.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Oh, wait, did you get tired of me talking about dudes in{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="/read/front_page/michigan_tale_two_cities/"
					>
						My Last Article
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Good. Did you know that today is{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/International_Women%27s_Day"
					>
						International Women&apos;s Day
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is perfect, because what I was actually told while growing up is
					that I am related to{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/June_Carter_Cash"
					>
						June Carter
					</Link>
					.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/ewnfWoSQz3o?si=5g5QWhcQaRTdDXjy"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					I was going to share one of the videos from their Johnny and June
					days. She looked really anxious and overwhelmed in some of those, from
					my perspective. For that reason, I have chosen to forego those videos
					for this one.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is for a similar reason that I make the choices that I make in this
					article. Some women prefer to set the tone and see if you can keep up.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In this piece, I will focus strictly on business. I will explore the
					learnings I have gained from observing and analyzing my surroundings -
					both digital and physical.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or maybe I won&apos;t.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.mcgill.ca/oss/article/marie-curie-woman-who-opened-nuclear-age"
					>
						Many
					</Link>{' '}
					are exhausted or overworked.
				</p>
				<div id={`disruptions`} className={`jumbo-container centered`}>
					<Image
						src={marie.src}
						fill
						alt={`Marie Curie. Photo credit McGill University`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Or just trying to relax on a Sunday following a week of chaos. It is
					Women&apos;s Day.
				</p>
				<p className={`paragraph width-full block left-align`}>
					SEO rewards long posts over time. Every keyword or phrase represents a
					potential entry point for a search engine into your site. If you think
					about it, you&apos;ll get it.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead of forcing a long post down anybody&apos;s throat where I tell
					other people&apos;s stories unsolicited, I am just going to drop some
					links for the curious, instead.
				</p>
			</section>
			<section className={`py-2 px-1`}>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Here Are Some Cool Women From Michigan
				</h2>
				<p className={`paragraph width-full block left-align`}>
					We all know{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Pamela_McGee"
					>
						Pam
					</Link>
					and{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Paula_McGee"
					>
						Paula
					</Link>
					.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/99_oQ9ueLvc?si=a0XNxlZd_TflkO5e"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					If you knew{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.theguardian.com/culture/2026/mar/08/jack-white-white-stripes-lyrics-selected-writing-book-interview"
					>
						Jack
					</Link>
					, from my last article, then I know you know{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Meg_White"
					>
						Meg
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If &apos;Bawitdaba&apos; is art, then what is &apos;Icky Thump&apos;
					to you?
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/evypdgY6KpQ?si=nASW5Y61Aikr_JDU"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					In no particular order:
				</p>
				<ul className={`flex row width-full left-align no-deco`}>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://www.womenshistory.org/education-resources/biographies/rosa-parks"
						>
							Rosa Parks
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://automotivehalloffame.org/honoree/mary-barra/"
						>
							Mary Barra
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://en.wikipedia.org/wiki/Claressa_Shields"
						>
							Claressa Shields
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://www.muslimsforamericanprogress.org/jacqueline-el-sayed"
						>
							Dr. Jacqueline El-Sayed
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://blog.nwf.org/2019/03/clean-water-champions-the-women-of-the-flint-water-crisis/"
						>
							These Clean Water Champions
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://en.wikipedia.org/wiki/Debbie_Stabenow"
						>
							Former US Senator Debbie Stabenow
						</Link>
					</li>
					<li>
						<Link
							className={` lowercase style-1 spaced color-2 rounded darken`}
							href="https://en.wikipedia.org/wiki/Gretchen_Whitmer"
						>
							Governor Gretchen Whitmer
						</Link>
					</li>
				</ul>
				<p className={`paragraph width-full block left-align`}>
					You can never count{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Aretha_Franklin"
					>
						Aretha
					</Link>{' '}
					out.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/A134hShx_gw?si=MnJ4rbdKlFfPPFoe"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Madonna"
					>
						Madonna
					</Link>{' '}
					is from Michigan,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.cbsnews.com/detroit/news/madonna-backpedals-a-bit-on-harsh-comments-about-her-michigan-upbringing/"
					>
						whether she likes it or not
					</Link>
					.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Here Are Some Cool Women From Elsewhere
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I spent some time in Colorado, too. My connection with the women there
					was much different.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://genius.com/Genius-english-translations-bad-bunny-titi-me-pregunto-english-translation-lyrics"
					>
						No Novias
					</Link>
					.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/qBUKfQRbzuk?si=D__IvAhd8QQgzx_R"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>

				<p className={`paragraph width-full block left-align`}>All respect.</p>
				<p className={`paragraph width-full block left-align`}>
					In the name of exactly that, have this list of women from outside of
					Michigan who I do not know, and who many around me respect.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Stevie_Nicks"
					>
						Stevie Nicks
					</Link>
					.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/Ov1SOhwfbys?si=ufCqi3lV-bLDNBN0"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Remember{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/American_Horror_Story:_Coven"
					>
						AHS: Coven
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://wrightmuseum.org/the-soviet-night-witches/"
					>
						Soviet Night Witches
					</Link>
					?
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/jcemHIqmkYI?si=yOf8RG0mMMBPlaim"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					There are so many women at home and abroad who are quietly carrying
					the world through behind the scenes poise, intelligence, and subtle
					influence.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://malala.org/malalas-story"
					>
						Malala&apos;s Story
					</Link>{' '}
					changed my life.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Like what she stands for or loathe it,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.pbs.org/newshour/world/israel-deports-greta-thunberg-after-seizing-of-gaza-bound-ship"
					>
						Greta&apos;s Making Waves
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Remember lawyer, writer, and former{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://obamawhitehouse.archives.gov/administration/first-lady-michelle-obama"
					>
						First Lady Michelle Obama
					</Link>
					?
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For Your Woman-Owned Small Business And You?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					It means that women both domestic and abroad are capable of more than
					the world would have them believe, and they have been proving it since
					the beginning of time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Want to see your name (or subtle influence) baked into a post like
					this next year?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you have the time: drop one piece of that project you&apos;ve been
					sitting on this week and watch the water ripple.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/i4ooH8frBWg?si=QXcP5JESxHAKfR1c"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					I may not have had any novias in Colorado. That doesn&apos;t mean I
					can&apos;t wish a happy Sunday to all the women mentioned here, and to
					the many friends, sisters, cousins, grandmas, stepmoms, and other
					influential women I have met throughout my life.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Especially in Michigan.
				</p>
			</section>

			<Footer
				title={"'SEO Basics: How to Read Graphs (Women\'s Day Edition)'"}
			/>
		</main>
	);
}
