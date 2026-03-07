import Image from 'next/image';
import Link from 'next/link';
import obama_copeny_flint from '@/public/photos/obama_copeny_flint.jpg';
//import thanks_obama from '@/public/photos/portraits/thanks_obama.jpg';
import trump_sun from '@/public/photos/portraits/trump_sun.jpg';

import patrick_kettering_university from '@/public/scenes/patrick_kettering_university.svg';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';

export const metadata: Metadata = {
	title:
		"Patripples | 'A Tale of More Than Two Cities: How Flint Area And National Legacies Intertwine' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'A Tale of More Than Two Cities: How Flint Area And National Legacies Intertwine.' Resilience and creativity are key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				A Tale of More Than Two Cities: How Flint Area And National Legacies
				Intertwine
			</h1>

			<ByLine
				author={`Patrick Yambrick`}
				date={'Saturday, Mar 7, 2026'}
				edited={'Saturday, Mar 7, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				Privacy disclaimer before clicking on any embedded songs or videos in
				this article: although I track no data on you when you use these embeds,
				the services from which I source them do. If you are curious to learn
				more, check out the{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="/read/contact"
				>
					Contact and Questions
				</Link>{' '}
				Page. All music, videos, and their relevant rights belong to the
				original creators and posters, and to the relevant hosting sites. If I
				need to take anything down, you already know how to find the contact
				page. Let me know.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Profanity warning.
			</p>
			<iframe
				width="360"
				height="315"
				src="https://www.youtube.com/embed/m47Is4ipcF8?si=5x6FD7zIRGscpt9v"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<p className={`paragraph width-full block left-align`}>
				If you&apos;re a real Flintstone, you already know about{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/MC_Breed"
				>
					MC Breed
				</Link>{' '}
				and{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/The_Dayton_Family"
				>
					The Dayton Family
				</Link>
				. Not to be exclusionary - if you don&apos;t already know about them,
				feel free to go check out their linked Wikipedia entries - or wait for
				me to get around to telling my own take on their story.
			</p>

			<p className={`paragraph width-full block left-align`}>
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="/read/front_page/michigan_landowners_ai_data_centers_eminent_domain"
				>
					My Last Article
				</Link>{' '}
				focused on a hero I never met, then spiraled into my original intent of
				informing some of my readers - real live local leaders - of a potential
				blindside coming their way.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If I were a morally grey{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Search_engine_optimization"
				>
					SEO
				</Link>
				capitalizing ghoul, I would make several short, snippy posts about the
				recent{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://www.freep.com/picture-gallery/news/2026/03/07/tornado-union-city-michigan-damage-march-2026-photos/89037213007/"
				>
					tornado in Union City, Michigan
				</Link>{' '}
				(which does deserve a post of its own - remember the{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/1953_Flint%E2%80%93Beecher_tornado"
				>
					Beecher tornado
				</Link>
				?), or on{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://www.whitehouse.gov/articles/2026/03/operation-epic-fury-unmatched-power-unrelenting-force-of-americas-warriors/"
				>
					Operation Epic Fury
				</Link>
				. But I am not.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am a front-end web developer with years of experience, using{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="https://www.greensighter.com/blog/nextjs-vs-react"
				>
					React and Nextjs
				</Link>{' '}
				to elevate small business in Flint, Michigan.
			</p>
			<p className={`paragraph width-full block left-align`}>
				In this article, I will briefly explore the legacies of two bygone
				leaders who I have met (not former US President Barack Obama, though I
				embed a video of his here), spiral into some thoughts about how their
				energy translates itself into today&apos;s heroes, and bring things back
				to level with words of encouragement for everyone around Flint trying to
				keep their heads high and dreams afloat - while exploring some thoughts
				around how to bridge a divide within our community.
			</p>

			<div id={`disruptions`} className={`jumbo-container centered`}>
				<Image
					src={patrick_kettering_university.src}
					fill
					alt={`Patrick Yambrick attended Kettering University.`}
				/>
			</div>
			<p className={`paragraph width-full block left-align`}>
				Unless you&apos;d rather talk about the weather?{' '}
				<Link
					className={` lowercase style-1 spaced color-2 rounded darken`}
					href="/contact"
				>
					Let Me Know.
				</Link>
			</p>
			<br />
			<section className={`bg-6 py-2 px-1 width-full`}>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Is A Disruption?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Kettering_University"
					>
						Kettering University
					</Link>{' '}
					legend,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.mlive.com/news/flint/2015/07/longtime_kettering_professor_r.html"
					>
						Professor G. Reginald Bell&apos;s
					</Link>
					inimitable teaching style - accessible at scale, to anybody,
					regardless of race, creed, income, or social standing - as I like to
					believe that he and many like him would have liked to see.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Who was Professor Reg Bell? You guessed it - a story for another time.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/s9n_2FJZ3vU?si=utPHCbhqXXAQXM0K"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>

				<p className={`paragraph width-full block left-align`}>
					Take that and mix it with a little:
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/ewEibhjgaNQ?si=N90M_5rL_q_BTb0k"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>

				<p className={`paragraph width-full block left-align`}>
					Remember when{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Kid_Rock"
					>
						Kid Rock
					</Link>{' '}
					used to be vaguely inspirational? (Obvious profanity warning):
				</p>
				<iframe
					className="rounded"
					data-testid="embed-iframe"
					src="https://open.spotify.com/embed/track/7dL1kfcbBItKitxt23ZzBO?utm_source=generator"
					width="60%"
					height="152"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Or when{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Motown"
					>
						Motown
					</Link>{' '}
					paved the way for him to do what he did to music?
				</p>
				<iframe
					data-testid="embed-iframe"
					className="rounded"
					src="https://open.spotify.com/embed/track/3Um9toULmYFGCpvaIPFw7l?utm_source=generator"
					width="60%"
					height="152"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Don&apos;t tell me you don&apos;t know{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Jack_White"
					>
						Jack
					</Link>
					.
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/0J2QdDbelmY?si=1Sq6ptw283kiRnGn"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Oops, that&apos;s Detroit.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What about when{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Andre_Rison"
					>
						Andre Rison
					</Link>{' '}
					was dunking on guys like my dad at 14?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or when{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/George_Gervin"
					>
						George Gervin
					</Link>{' '}
					and{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Magic_Johnson"
					>
						Earvin
					</Link>{' '}
					used to come around town to test themselves against the best
					competition?
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/8YzboDdS5O4?si=4GODyzSWVV5S6pC-"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					What do you know about{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Terry_Furlow"
					>
						Terry Furlow
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Terry_Crews"
					>
						Crews
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Did you know{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Chiodos"
					>
						Chiodos
					</Link>{' '}
					were some{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Flint_Local_432"
					>
						Flint Locals
					</Link>{' '}
					from nearby{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Davison,_Michigan"
					>
						Davison
					</Link>
					?
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/bg1dF4TpI0k?si=J9SMG17PWO0y_iwH"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Or that a{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Tom_Gores"
					>
						kid from near Flint
					</Link>{' '}
					owns the Pistons?
				</p>
			</section>

			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Why Bring National Politics Into It?
				</h2>
				<p className={`paragraph width-full block left-align`}>
					- Because sometimes, a little s**t (please forgive me if you read
					this,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.maricopeny.com/"
					>
						Ms. Copeny
					</Link>
					) from Flint speaks clearly enough to grab the ear of the sitting
					president of the United States.
				</p>
				<div id={`disruptions`} className={` centered`}>
					<Image
						src={obama_copeny_flint.src}
						height={350}
						width={450}
						alt={`Former US President Barack Obama and Little Miss Flint (Mari Copeny).`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Did you know that former US President Barack Obama used to{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://obamawhitehouse.archives.gov/letters"
					>
						read 10 letters from constituents
					</Link>{' '}
					every night?
				</p>
				<p className={`paragraph width-full block left-align`}>
					- Because sometimes national leaders pretend to listen for long enough
					to let reality sink in.
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/IQD__OsokaU?si=o9lcs8TWIxw5j1yK"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Did you know that there is an art to war - much like there is an art
					to making a deal?
				</p>
				<p className={`paragraph width-full block left-align`}>
					- Because sometimes, local leaders do the impossible in the name of
					fighting for <em>democracy</em>.
				</p>
				<p className={`paragraph width-full block left-align`}>
					- Disclaimer: I am not - and have never been - a servicemember.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					I do not know this man. I do not speak for him. My views are not his,
					and his views are not mine. It is not my intention to steal valor, nor
					to leech off of someone else&apos;s sacrifice. If you are him or
					someone who represents him, and would like me to remove or alter this,
					feel free to send me as curt an email as you care to send me, and I
					will respect your wishes at warp speed.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					I have only chosen to highlight Mr. Richardson because he has already
					been exposed to publicity via that video.
				</p>
				<p className={`paragraph width-full block left-align`}>
					- End Disclaimer
				</p>
				<p className={`paragraph width-full block left-align`}>
					That was{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.army.mil/medalofhonor/richardson/index.html"
					>
						Command Sgt. Terry P. Richardson
					</Link>{' '}
					from{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Cass_City,_Michigan"
					>
						Cass City, Michigan
					</Link>
					. A real, live warrior - and a protector who brings many in his state
					pride.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Man, Mid-Michigan has a lot of badasses named Terry. Talk about a man
					of service to his community. I know better than to speak for a Vietnam
					vet, so I will skip putting words in his mouth.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Maybe I&apos;m reading too much into things - sir, if you ever see
					this, know that someone saw that moment of relief earned through your
					service and looked up to you (and looked your story up) for sharing
					it.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					If you or anyone you know would like for me to take this down, I will.
					I am choosing to share my perspective on your story not to capitalize,
					but because I believe that there needs to be balance in this world,
					and because I don&apos;t think that people like you risked your lives
					so that the cycle would continue or even worsen. Someone tell me if I
					am wrong.
				</p>
				<p className={`paragraph width-full block left-align`}>
					From my perspective, neither &quot;thank you for your service&quot;
					nor &quot;God bless you&quot; quite cuts it for our servicemembers who
					saw the terrors of war firsthand.
				</p>
				<p className={`paragraph width-full block left-align`}>
					At the same time, the burden you may also carry must be immense. I
					won&apos;t pretend to have &quot;been there.&quot; I know that many in
					shoes like Mr. Richardson&apos;s carry survivor&apos;s guilt. But 85
					lives saved in a combat zone makes{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Captain_America"
					>
						Captain America
					</Link>{' '}
					look small by comparison.
				</p>
				<p className={`paragraph width-full block left-align`}>
					(This is{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://calscruby.com/?srsltid=AfmBOootcQYNbokg0DnSYnSGgqGa4E7INH2qpPUd8LRYkZXaoWMVWWJB"
					>
						Cal Scruby
					</Link>{' '}
					- he has nothing to do with Flint or Michigan, to my knowledge, but
					the song feels pertinent. He is from Ohio. Obvious profanity warning.)
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/DviqacxbJnU?si=lywoO_SrkMsrPFVd"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Not to downplay the seriousness of his sacrifice, or to take Mr.
					Richardson&apos;s bravery too lightly - nor that of any veteran - I am
					experimenting with this as a communication style.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When he was a Staff Sgt., Richardson didn&apos;t sit in an office and
					call in drone strikes from thousands of miles away. And when the draft
					threatened to walk him down, he stood up and showed it what facing
					your fear in the name of serving your country can do for you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Staff Sgt. Richardson ran up into the fray. He never hobbled away.
					Even when it hurt. Even when it was scary. He dragged good men out of
					danger, and nearly paid the ultimate price.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I want to make a data visualization tool - like a map showing the
					impact his 85 saved lives would have had on their communities upon
					their return - but I don&apos;t have time to do that immediately. In
					the meantime, if any of my friends want to contribute, contact me
					through the contact page, or through the social media channel on which
					you connect with me. Otherwise, I will get around to it when I can.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In the moment, if I had to guess, he would have been terrified. He ran
					through things that would make you or me p**s ourselves. Even the most
					hardened man would feel fear in a moment like the one he served as a
					hero in. The best of us, like Sgt. Richardson, find ways to suppress
					that fear and focus on the task at hand.
				</p>
				<p className={`paragraph width-full block left-align`}>
					On my behalf, not his: Where were you during the war that took his
					brothers from him? Where will you be during the next one?
				</p>
				<p className={`paragraph width-full block left-align`}>
					- Because wartime decisions impact hard-working women like one of my
					several grandmas,{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://obits.mlive.com/us/obituaries/flint/name/alta-wisenbaugh-obituary?id=9789858"
					>
						Alta
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Remember the sacrifices{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.mlive.com/news/flint/2021/02/its-a-long-time-coming-real-life-rosie-the-riveter-in-awe-of-new-statue-in-flint.html"
					>
						Rosie the Riveters
					</Link>{' '}
					made?
				</p>
				<h3
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Drone Strikes Is Drone Strikes.
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Or when{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://guides.loc.gov/this-month-in-business-history/february/flint-michigan-sit-down-strike"
					>
						Flint taught the world what a strike looks like
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					If I&apos;m going to punch up at one guy, I have to treat the other
					guy the same. Who set the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.cfr.org/articles/obamas-final-drone-strike-data"
					>
						precedent for drone strikes
					</Link>
					?
				</p>
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/j5zeMtEcQoI?si=BJuObUKa4xBDOp0S"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					Whoever&apos;s fault this all is, here we are.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It isn&apos;t the apocalypse.
				</p>
				<p className={`paragraph width-full block left-align`}>
					But it is as{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Plato"
					>
						Plato
					</Link>{' '}
					said: &quot;The price good men pay for indifference to public affairs
					is to be ruled by evil men.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Michiganders always step up.
				</p>
			</section>
			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					Wisdom From An Old Man
				</h2>
				<p className={`paragraph width-full block left-align`}>
					My{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.okeechobeefuneralhome.com/obituaries/Daniel-Earl-Wisenbaugh?obId=28901569"
					>
						grandpa Earl
					</Link>{' '}
					was a{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Shriners"
					>
						Shriner
					</Link>{' '}
					who served in the{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.nationalguard.com/?utm_campaign=fy26paidsearch&utm_source=89&utm_medium=c2googlebrand-1759415473&utm_content=web&&&&&gclsrc=aw.ds&gad_source=1&gad_campaignid=23033172199&gclid=CjwKCAiAtq_NBhA_EiwA78nNWEUuPElpuycYWp0YGZTzqRyhGWEGTDX1H-ScEaicHq0c23KRyIJ2nhoCeG0QAvD_BwE"
					>
						National Guard
					</Link>
					. Lucky me - I got to go to the Shrine Circus every year for my
					birthday while growing up. My brother&apos;s favorite Shrine Circus
					Clown was{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://www.facebook.com/groups/244887055542039/posts/24983968144540587/"
					>
						Boats
					</Link>
					. Who was yours?
				</p>
				<p className={`paragraph width-full block left-align`}>
					I wasn&apos;t around grandpa Earl much when I was young, but I
					understand him to have been a hard patriarch throughout most of his
					life who tried to make everything right with the loved ones he&apos;d
					hurt at the end of his life. For some, the gesture was enough. For
					many, it was too little, too late.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He was an{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Lake_Okeechobee"
					>
						Okeechobee
					</Link>{' '}
					guy. Real{' '}
					<Link
						className={` lowercase style-1 spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Florida_Man"
					>
						Florida Man
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He passed to skin cancer at 79 after spending too many days glaring at
					the undefeated sun.
				</p>
				<div id={`disruptions`} className={` centered`}>
					<Image
						src={trump_sun.src}
						height={350}
						width={450}
						alt={`The sitting president of the United States stares at the sun.`}
					/>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Even he couldn&apos;t buy himself enough time to turn that tide.
				</p>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					How Not To Follow In His Footsteps.
				</h2>
				<p className={`paragraph width-full block left-align`}>
					I wouldn&apos;t wish cancer on my worst enemy.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That especially includes the sitting president of the United States.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sometimes we get smacked by the consequences of our chosen lifestyle.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sometimes we tighten up and turn things around.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sometimes the guy telling you not to pick the fight is doing that for
					your own safety.
				</p>
				<p className={`paragraph width-full block left-align`}>
					(This has nothing to do with Flint, either - just a relevant anime
					clip that will make a segment of my audience feel heard.)
				</p>{' '}
				<iframe
					width="360"
					height="315"
					src="https://www.youtube.com/embed/l9F4jXtJniw?si=6Yl6eY2qOZZuic2P"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<p className={`paragraph width-full block left-align`}>
					If you want to aim high while avoiding the consequences of staring at
					the sun, consider shooting for the moon, instead - I&apos;ve heard
					that even if you miss, you land among the stars.
				</p>
			</section>

			<section>
				<h2
					className={`lowercase style-1 thin spaced left width-full block left-align`}
				>
					What Does All This Mean For Your Small Business And You?
				</h2>

				<p className={`paragraph width-full block left-align`}>
					It means that small businesses, creatives, entrepreneurs, and workers
					from Michigan are capable of much more than we like to give ourselves
					credit for.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That includes you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you have the energy: drop that project you&apos;ve been sitting on
					this week and watch the water ripple.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many of the references I made in this post deserve expanded stories of
					their own. I intend to revisit some of them later.
				</p>
			</section>
			<Footer
				title={
					"'A Tale of More Than Two Cities: How Flint Area And National Legacies Intertwine'"
				}
			/>
		</main>
	);
}
