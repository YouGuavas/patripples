import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';
import Collapsible from '@/app/components/blog/Collapsible';
import TableOfContents from '@/app/components/blog/TableOfContents';

import patrick_sun_tzu from '@/public/scenes/patrick/patrick_sun_tzu.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Social Learning: The Art of War (And Leadership)' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Social Learning: The Art of War (And Leadership).' Understanding the Art of War is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Social Learning: The Art of War (And Leadership)
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Friday, Mar 13, 2026'}
				edited={'Sunday, Mar 15, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				Edit Sun, Mar 15, 2026: Edits in{' '}
				<span className="edit-1">This Color</span>.
			</p>
			<p className={`paragraph edit-1 width-full block left-align`}>
				Rather than edit this part, I am going to leave my original writing and
				address it here. I referred to the attack on Temple Israel as &quot;The
				West Bloomfield Miracle&quot;. I did not properly consider the
				implications of that statement before posting. I do not believe that any
				attack on any house of worship should be considered a
				&quot;Miracle.&quot;
			</p>{' '}
			<p className={`paragraph edit-1 width-full block left-align`}>
				For those of Jewish descent and faith, the smoke inhalation while
				confined and fearing for one&apos;s life will have had a much more
				traumatic impact on its survivors than I initially considered. Labeling
				a threat to your lives as a &quot;Miracle&quot; was a profound
				misjudgement on my part. I hope that you can forgive me and appreciate
				my apology; I accept it if you cannot or will not.
			</p>
			<p className={`paragraph edit-1 width-full block left-align`}>
				As I will explain later, part of my intent with this set of posts is to
				explore common tactics used by adversaries at war - many of which lie
				within the realms of deception and manipulation. I am not a doomsday
				prepper, nor do I believe that WWIII is a foregone conclusion - though I
				do believe it is better to be safe than sorry. Perhaps you do, too? If
				so, then continue on.
			</p>{' '}
			<p className={`paragraph edit-1 width-full block left-align`}>
				In later posts, we will explore how emotional narratives can be used to
				skew perceptions of events - effectively bending reality within the
				minds of the susceptible - myself included, at times. Teaching cognitive
				defense via inoculation is really only a side-effect of my primary
				intent.
			</p>{' '}
			<p className={`paragraph edit-1 width-full block left-align`}>
				My deepest intent is to teach and to grow, while exploring the social
				issues which I see around me in a constructive, not destructive, way. I
				never aim to subject my audience to traumatic experiences - especially
				unawares. I am thankful that there have been no resultant casualties
				beyond the assailant - that was my intent.
			</p>
			<p className={`paragraph edit-1 width-full block left-align`}>
				I&apos;ll stop talking now and commence with the doing better.
			</p>
			<div className={`jumbo-container centered`}>
				<Image
					fetchPriority="high"
					loading="eager"
					src={patrick_sun_tzu.src}
					fill
					alt={`Patrick reads Sun Tzu to you.`}
				/>
			</div>
			<hr />
			<p className={`paragraph width-full block left-align`}>
				III. Attack by Stratagem -{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://classics.mit.edu/Tzu/artwar.html"
				>
					The Art of War
				</Link>
			</p>
			<p className={` width-full block left-align`}>
				Sun Tzu said: In the practical art of war, the best thing of all is to
				take the enemy&apos;s country whole and intact; to shatter and destroy
				it is not so good. So, too, it is better to recapture an army entire
				than to destroy it, to capture a regiment, a detachment or a company
				entire than to destroy them.
			</p>
			<p className={` width-full block left-align`}>
				Hence to fight and conquer in all your battles is not supreme
				excellence; supreme excellence consists in breaking the enemy&apos;s
				resistance without fighting.
			</p>{' '}
			<p className={` width-full block left-align`}>
				Thus the highest form of generalship is to balk the enemy&apos;s plans;
				the next best is to prevent the junction of the enemy&apos;s forces; the
				next in order is to attack the enemy&apos;s army in the field; and the
				worst policy of all is to besiege walled cities.
			</p>{' '}
			<p className={`width-full block left-align`}>
				The rule is, not to besiege walled cities if it can possibly be avoided.
				The preparation of mantlets, movable shelters, and various implements of
				war, will take up three whole months; and the piling up of mounds over
				against the walls will take three months more.
			</p>
			<p className={` width-full block left-align`}>
				The general, unable to control his irritation, will launch his men to
				the assault like swarming ants, with the result that one-third of his
				men are slain, while the town still remains untaken. Such are the
				disastrous effects of a siege.
			</p>{' '}
			<hr />
			<TableOfContents
				title="Sections"
				sections={[
					"Local Scare Doesn't Go There",
					'Video Games and Leadership Brains',
					'How To Strike Gently',
				]}
			/>
			<hr />
			<div className="flex column gap-small">
				<p className={`paragraph width-half block left-align centered`}>
					--Start Disclaimer--
				</p>
				<p className={`paragraph width-half block left-align centered`}>
					Privacy disclaimer before clicking on any embedded songs or videos in
					this post: although I track no data on you when you use these embeds,
					the services from which I source them do. If you are curious to learn
					more, check out the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="/read/contact"
					>
						Contact
					</Link>{' '}
					Page. All music, videos, and their relevant rights belong to the
					original creators and posters, and to the relevant hosting sites. If I
					need to take anything down, you already know how to find the contact
					page. Let me know.
				</p>
				<p className={`paragraph width-half block left-align centered`}>
					I take a lot of{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.chanceraps.com/"
					>
						Chances
					</Link>{' '}
					in this article. My intent is to channel the original artists&apos;
					creativity with the intent of emphasizing the point I am making. I
					believe that wisdom can be drawn from many sources.
				</p>{' '}
				<p className={`paragraph width-half block left-align centered`}>
					To my knowledge, what I am doing qualifies as fair use. I am happy to
					remove any content which I have embedded which violates fair use. I am
					not a lawyer, and I make no money off of this content.{' '}
					<Link className={`spaced color-2 rounded darken`} href="/contact">
						Let Me Know
					</Link>
					.
				</p>
				<p className={`paragraph width-half block left-align centered`}>
					--End Disclaimer--
				</p>
			</div>
			<hr />
			<h2
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				What Is Social Learning?
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Before we move too far ahead, let me explain why it is that I choose to
				employ the style that I employ in my posts.
			</p>
			<p className={`paragraph width-full block left-align`}>
				According to{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://online.edhec.edu/en/blog/the-social-learning-approach/#:~:text=Social%20Learning%20Theory%20was%20first%20proposed%20by,the%20behaviours%20and%20attitudes%20of%20other%20people."
				>
					This Article
				</Link>
				, social learning is the process of learning through observation,
				imitation, and modeling.
			</p>
			<p className={`paragraph width-full block left-align`}>
				At the risk of sounding base, this is like &quot;Monkey see, monkey
				do.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				Scientifically: think about{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="/learn/glossary/mirror_neurons"
				>
					mirror neurons
				</Link>
				. We all have them. When we see someone doing something which we
				perceive as strong, noble, or admirable, we all feel the pull to mimic
				some piece of that, through our own lens.
			</p>
			<p className={`paragraph width-full block left-align`}>
				When those we are trained to admire are behaving their best, this is
				good for us all. When they are being chaotic or violent, this pulls us
				apart at our very seams.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Ever played with a{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Chinese_finger_trap"
				>
					Chinese Finger Trap
				</Link>
				? It&apos;s a little like that.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Back to the point:
			</p>
			<p className={`paragraph width-full block left-align`}>
				Developed by a psychologist called{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://en.wikipedia.org/wiki/Albert_Bandura"
				>
					Albert Bandura
				</Link>
				,{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://online.edhec.edu/en/blog/the-social-learning-approach/#:~:text=Social%20Learning%20Theory%20was%20first%20proposed%20by,the%20behaviours%20and%20attitudes%20of%20other%20people."
				>
					Social Learning Theory
				</Link>{' '}
				forms the bedrock for what is now called{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.simplypsychology.org/social-cognitive-theory.html"
				>
					Social Cognitive Theory
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Whatever it is called, the principles remain similar enough that, unless
				you are really curious, or looking to become an expert, this overview
				should suffice. If you&apos;d like to learn more, feel free to dig into
				the links provided here to read from more authoritative voices on the
				subject.
			</p>
			<p className={`paragraph width-full block left-align`}>
				In this theory, Bandura posits - accurately, from my perspective - that
				the more authoritative a model or a voice is, the more inclined the
				student is to listen.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Knowing this, I choose to eschew the authoritative stance strategically
				in spots in favor of a peerlike tone - I know many unconventional
				learners who have felt so burned by trusted authorities that they revile
				at the hint of authority. My website traffic demonstrates this to me
				effectively. I will explore how that is in a later post.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I compose my content in this way because of the implications of articles{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://insight.kellogg.northwestern.edu/article/social-media-algorithms-have-hijacked-social-learning#:~:text=The%20researchers%20argue%20that%20the%20way%20platform,while%20still%20offering%20engaging%20material%20for%20users."
				>
					Like This
				</Link>
				, on the impact social media algorithms have on our perceptions.
			</p>
			<p className={`paragraph width-full block left-align`}>
				A Tl;Dr on that goes something like: as an algorithm filters content, it
				receives feedback about your preferences, and the cycle continues and
				recursively filters the already filtered content based once again on
				your reactions, and then feeds you back more and more heavily filtered
				content.
			</p>
			<p className={`paragraph width-full block left-align`}>
				That becomes a rabbit hole - for better or for worse - really quickly.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Since this is happening to you (and to me), it is safe to assume that it
				is happening to those around us, as well, especially if we are sharing
				the content we find at the bottoms of those rabbit holes without warning
				our friends that we have been guided there by the power of the algorithm
				- remember those mirror neurons.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Through the shared experience of being heavily filtered and mirrored
				back to, we wind up teaching ourselves untruths about the level of hate
				or whatever other negativity that is present in the world around us.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Make no mistake: those things are present. They haven&apos;t
				disappeared. They are real.
			</p>
			<p className={`paragraph width-full block left-align`}>
				But the divide is not as wide as many of us have led ourselves to
				believe.
			</p>
			<Collapsible id="1" bg="bg-6" title="I - Local Scare Doesn't Go There">
				<p className={`paragraph width-full block left-align`}>
					I am not going to use this post to report on the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.freep.com/story/news/local/michigan/oakland/2026/03/12/temple-israel-shooting-west-bloomfield/89119641007/"
					>
						West Bloomfield Miracle
					</Link>
					. Many who are better equipped for the task have beaten me to that. As
					with all forms of prejudicial hate, antisemitism is abhorrent and has
					no place in our country.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As disruptive and frightening as that attack was for its survivors, it
					strikes me as a near miracle in today&apos;s world of mass shootings
					and racial and religious violence that only the assailant was killed.
					If you haven&apos;t already, go look up how prepared and how brave
					they and those first responders all were.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That&apos;s why you don&apos;t mess with Michigan.
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Fire from the Tongue of Israel
				</h3>
				<p className={`paragraph width-full block left-align`}>
					I understand that{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Matisyahu"
					>
						Matisyahu
					</Link>
					, the notorious Jewish reggae rapper, has been canceled by many for
					his stances on the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_conflict"
					>
						Israel-Palestine Conflict
					</Link>
					, and I also understand that he puts in some serious work toward the
					cultural appropriation of reggae with his musical style.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I would love to put forth a solve to that conflict, but alas: I am not
					a Palestinian genius. I am some privileged white kid who doesn&apos;t
					know his place. And it seems to an outsider like me that every time
					someone approaches a solution to the conflict, someone *
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Benjamin_Netanyahu"
					>
						coughs
					</Link>
					* starts a proxy war with someone else&apos;s army in the name of
					power retention and{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Yonatan_Netanyahu"
					>
						a human and understandable quest for vengeance
					</Link>
					, which - no matter how understandable - should not dictate that the
					world be at war on his behalf.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I am choosing to share this song because of its lyrics - which carried
					me through a dark time before I understood what cultural appropriation
					was. Forgive me, and skip clicking the video if you don&apos;t support
					the artist.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/WRmBChQjZPs"
						title="One Day - Matisyahu"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Did you know that the modern, secular nation of Israel - which only
					really relates to the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Land_of_Israel"
					>
						Land of Israel
					</Link>
					in its occupation of that space - sits in a land that was once called
					Canaan, long before Judah or the nation of Israel sprang forth from
					the froth? Canaan had such potential: home to the shared ancestry of
					all modern Israelis, Lebanese, Palestinians, Jordanians, and Syrians -
					who would also mix lineages with Iranian settlers and others - the
					kingdom could have come, if only its kings had prayed for unity.
					Instead, they prayed for victory over each other.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And so it goes: divided they fell, and gave way, over time, to the
					modern nation of Israel and its other counterparts.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Again, I would love to tell the specific story of Palestine right
					here, but I am not qualified for that one - though I know its history
					to be rich and full with kingdoms come and kingdoms gone. If any of my
					audience happens, by circumstance, to be a Palestinian genius hoping
					to shine like a bright light throught he dark, this would be his time
					to start dropping essays. If only we were so lucky.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Anyway, many in Israel carry some lineage which springs forth from
					Canaan and the Levant. That is: many in Israel are cousins to those
					being killed in Palestine, and Lebanon, and probably even some in
					Iran. A guy like Matisyahu likely knows all that better than I do. He
					wouldn&apos;t have written songs like the one I shared above if he did
					not.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Being a man of clear Abrahamic (through Judaism) faith, it is natural
					for a man like Matisyahu to hold a strong stance about Israel. For the
					duration of his life, that has been his{' '}
					<span className="edit-1">distant</span> home. It is duty to the poets
					of Abraham to use their right hand in the name of writing truth. As
					long as they do, all is not lost. Unity can come.{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.youtube.com/watch?v=H8ULIw0Zgaw&list=RDH8ULIw0Zgaw&start_radio=1"
					>
						Just Ask Matisyahu
					</Link>
					. The guy is like the roaring lion of Judah, embodied.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Sure enough, as we see even today, there is good reason for people of
					Jewish lineage to hope and to pray for a homeland where they may be
					safe. Protectors like Matisyahu are not wrong for roaring.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If that is true - and it is - then what of those of Levantine descent?
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Canaan Continues
				</h3>

				<p className={`paragraph width-full block left-align`}>
					Wouldn&apos;t it be a great and terrible work to bomb the Levant in
					the name of Jesus, and ham-handedly, accidentally destroy the last of
					any hoped-for lineage of, uhh... Jesus, or Moses, or any of the other
					old prophets?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Since time immemorial, Canaan has been at war with itself: brothers
					killing brothers.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sometimes, they even forget the divinity of the spirit that fills them
					so fully that they kill their little sisters:
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/oWu_jApIWAM?si=zCkGrWTEIyxZpDmo"
						title="Fatima - K'naan"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					This is{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/K%27naan"
					>
						K&apos;naan
					</Link>{' '}
					- one of those violent Somali immigrants who is ruining American
					cities.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you don&apos;t know the story of this song,{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.youtube.com/watch?v=HH92H2_tO5M&list=RDHH92H2_tO5M&start_radio=1"
					>
						Let Him Tell It
					</Link>
					.
				</p>

				<p className={`paragraph width-full block left-align`}>
					Can you believe it?
				</p>
				<p className={`paragraph width-full block left-align`}>
					True to the name and the spirit, even if not the literal history and
					lineage, K&apos;naan represents one of the many possible faces of the
					Kingdom that could have come.
				</p>
				<p className={`paragraph width-full block left-align`}>
					But didn&apos;t.
				</p>
				<p className={`paragraph width-full block left-align`}>Why?</p>
				<p className={`paragraph width-full block left-align`}>
					Constant infighting and destruction of the neighbor made them easy to
					conquer.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Sound familiar?
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					A United Kingdom
				</h3>
				<p className={`paragraph width-full block left-align`}>
					I shared K&apos;naan and Matisyahu here because when I was young - in
					my late teens and early twenties - and something of a dusty foot
					philosopher, myself, I gave each of them thousands of plays. I was so
					taken by both of their perspectives, which seemed to me to flow from
					the same source, that I could not bring myself to divide them, one
					from the other -{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/The_Sheep_and_the_Goats"
					>
						one a sheep and one a goat
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is what leads me to wonder why they have done so.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Which one is which?
				</p>
			</Collapsible>
			<Collapsible id="2" title="II - Video Games and Leadership Brains">
				<p className={`paragraph width-full block left-align`}>
					Recently, I had a conversation with a friend - who has requested to be
					identified through the quote:
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;I was chosen by this random assortment of physical strangers
					whom deemed my noble actions worthy to raise the crown!&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					- which touched on the topic of leadership lessons learned through
					video games.
				</p>
				<p className={`paragraph width-full block left-align`}>
					This quote was spoken by a character and guildmaster from fiction
					called Thalisse, the Lightbringer. I cannot find a source when I
					search her. If you can find a source for me to reference, let me know.
					Regardless, the weight of the quote remains.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is rarely through individual pride or ego that we receive the power
					of leadership.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The most powerful form of leadership is always arrived at through
					collective belief - itself arrived at through demonstrated competency
					and concern for one&apos;s community members and - in the case of the
					elect - one&apos;s constituents.
				</p>
				<p className={`paragraph width-full block left-align`}>
					When we squander this belief, we squander the power with which it
					supplied us.
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Video Game Leadership Isn&apos;t Real Leadership
				</h3>
				<p className={`paragraph width-full block left-align`}>
					That&apos;s where you&apos;re wrong.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.forbes.com/sites/cherylrobinson/2024/10/24/how-video-games-are-developing-future-leaders-for-boardrooms/"
					>
						According to Forbes
					</Link>
					, modern leadership is increasingly leveraging training derived from
					video games. This is not to say that all games are created equal. Many
					of them constitute empty time.
				</p>
				<p className={`paragraph width-full block left-align`}>Not all.</p>
				<p className={`paragraph width-full block left-align`}>
					I have gleaned a number of lessons from video game experiences. I
					gamed compulsively during my early twenties. I was in financial exile
					as a result of the actions taken on my life by a trusted authority
					figure. I needed an escape from all of the technical skill-building I
					was doing while unable to earn consistently.
				</p>
				<p className={`paragraph width-full block left-align`}>
					What I found instead was a set of leadership sandboxes.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Across several games - each facilitating different forms of
					real-life-relevant thought - I found myself in leadership positions,
					and advisorial positions of power. Many of the communities which I led
					during this time were comprised of surprisingly elite individuals:
					multinational engineers, local leader types, and even a foreign real
					estate magnate or two.
				</p>
				<p className={`paragraph width-full block left-align`}>
					But that is a story for a different time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Here, I will relate to you what my friend told to me, about those
					leadership learnings he explains having arrived at through the video
					game, World of Warcraft.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Many around him consider him to be an up and coming leader.
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Under One&apos;s Wing
				</h3>
				<p className={`paragraph width-full block left-align`}>
					It is late at night.
				</p>
				<p className={`paragraph width-full block left-align`}>
					The fog of war encroaches - you can hardly see 30 feet in front of
					you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Try as you might, you keep getting turned around - finding yourself
					back in the same spot, skirmishing endlessly with opponents who remain
					unseen until they are ready to strike by surprise.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Someone grabs you firmly by the shoulder from behind. You spin around,
					weapon drawn, and he catches you by the wrist, forcing you to halt
					your attack.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You&apos;re done for.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Or so you think.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He doesn&apos;t stab you, nor does he rob you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead, he pulls you down off the side of the road on which you
					stood, hiding you safe just in time.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You can&apos;t quite make out whether they are hoofbeats, drumbeats,
					or both, over the sound of your own beating heart&apos;s ba-BOOMP
					ba-BOOMP ba-BOOMP.
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;Who are you? And thank y-&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;Silence. You are the one the prophecies have foretold.
					Come.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>Not my video:</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/mLyOj_QD4a4?si=joHkaIu8me5jNhll"
						title="Leeroy Jenkins"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					&quot;So you see,&quot; the strange man explains, after showing you
					his own gameplay recording, &quot;I have come to guide you.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Then he thrusts the keys to the kingdom into your hands.
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;You are the man of the house now. I can&apos;t do this anymore.
					Bye.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Confused, you accept. In a flash, the man is gone.
				</p>
				<p className={`paragraph width-full block left-align`}>
					At first, those around you are skeptical - hey, so are you. You just
					watched one of your leaders{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Leeroy_Jenkins&ved=2ahUKEwi2na_A0p2TAxUbhIkEHZ3ACWcQFnoECB4QAQ&usg=AOvVaw0lPdo-ouqTaj-2js-gdutX"
					>
						Leeroy
					</Link>{' '}
					the raid, then pass the buck to a younger, less experienced guy. You
					are skeptical about the people around you and their intent. Valid.
					What just happened was wild. It didn&apos;t make any sense.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As you carry on, you find yourself emobdying the role more and more
					naturally.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You arrive at this through consistency, discipline, a fair ear, and a
					steady hand. Out of care for the community you have been left steward
					of, you do this even when you are uncertain.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Through all this, you have come to a realization: as long as you
					don&apos;t Leeroy the raid, things tend to work out in your favor.
				</p>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Closing the Ark
				</h3>
				<p className={`paragraph width-full block left-align`}>
					An oddly-shaped man of dwarflike stature, with great, big arms which
					are far too long for his body is running, naked, and unarmed, except
					for his trusty slingshot - a formidable weapon in{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=1%20Samuel%2017&version=NIV;KJV"
					>
						the right hands
					</Link>
					. Not my video:
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/DBql20NSxsc?si=Rwot6BhBAtvS3LzB"
						title="Ark slingshot"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Hungry and alone in the jungles of{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Ark:_Survival_Evolved"
					>
						the Ark
					</Link>
					, Go-Rilla traverses the local swamp - which he knows intimately, from
					when his tribe initially conquered and established order on Server
					518.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Since his abdication, much of the path he and his friends cut has
					regrown.
				</p>
				<p className={`paragraph width-full block left-align`}>
					He knew that his return would go something like this, though he could
					not have foreseen its extent.
				</p>
				<p className={`paragraph width-full block left-align`}>
					After successfully and stealthily dinking several unsuspecting
					patrolmen, Go-Rilla arrived at the site of his former seat of power,
					now completely erased, save for a few forgotten fence foundations
					which still bore his name: Tribe of Go-Rilla.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://ark.fandom.com/wiki/Tribe:Department_of_Defense"
					>
						The Department of Defense
					</Link>{' '}
					had taken his homeland over in his absence.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Led by a scheming player called Metzler the Rich - whose unearned
					adjacency to power Go-Rilla, always one to give a guy a second chance,
					had tolerated during his days leading the server&apos;s coalition of
					Wardens - the DoD took the first opportunity it could to oust
					Go-Rilla, decimate everything he had stood for, and use that as the
					wedge through which they would take over the server, and push the
					entire union out.
				</p>
				<p className={`paragraph edit-1 width-full block left-align`}>
					(Deleted duplicate paragraph.)
				</p>
				<p className={`paragraph width-full block left-align`}>
					Prior to his burnout and subsequent abdication, Go-Rilla and the union
					had defended against many invasions together - from organized Chinese
					Megatribes to random coalitions formed after their exile from our
					server.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					It didn&apos;t matter where you came from: you had to ask Go-Rilla
					permission to be there. He would then convene The Council - the
					Wardens from those tribes he had inspected, established trade with,
					and been permitted to grow for their loyalty to the union. If you
					didn&apos;t, you might get a probationary period - or you might get
					wiped. It depended on which zone - and thus, which Warden&apos;s
					jurisdiction - in which you sought to build.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If, at any point, you threatened the holdings of the union, you were
					swiftly and decisively repelled. Your leader was tranqed (probably
					humiliatingly, with a slingshot), put into a cage, and kangaroo
					bounced on for hours (there was a glitch that made this unbearable to
					anybody wearing gaming headphones, so they would log off), or
					tranq-stimmed, which was something of a Secret Art in terms of in-game
					message sending to would-be invaders.
				</p>
				<p className={`paragraph width-full block left-align`}>
					At the end, it wasn&apos;t a foreign invader who took our server over.
					The union never had to go siege a walled city, nor did it invade other
					servers.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Our union let them approach the walls of our stronghold, and then
					swatted them back with the unified might of a community of
					peace-loving neighbors.
				</p>
				<p className={`paragraph width-full block left-align`}>
					As he stood there, examining his old home, now in ruins, Go-Rilla was
					killed from behind - by Metzler the Rich - the little drunk guy who
					Go-Rilla let lead the DoD.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					He was now the unquestioned King of a former stronghold of democracy.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And boy, did seeing Go-Rilla emerge from the jungle scare that little
					man.
				</p>
				<p className={`paragraph width-full block left-align`}>
					They say that &quot;The price good men pay for indifference to public
					affairs is to be ruled by evil men.&quot; Lessons learned.
				</p>
				<p className={`paragraph width-full edit-1 block left-align`}>
					(Remove weak closing sentence.)
				</p>
			</Collapsible>
			<Collapsible id="3" title="III - How to Strike Gently" bg="bg-6">
				<p className={`paragraph width-full block left-align`}>
					And lessons taught.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					I transitioned from my friend&apos;s story in the way that I did in
					the last section because in many ways, he and Go-Rilla represent
					complementary sides of a coin.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					He had been handed the reigns of a community by an abdicant king, and
					- although I do not finish his story in that section - the result was
					that he, a decent man of strong morals and benevolent principles, came
					to be the chosen leader of his crew. When his abdicant king return to
					vy for the throne, its subjects chose to side with my friend, the
					unsuspecting steward.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Go-Rilla left the keys to his castle in the hands of a group of young
					men who could not handle the burden of centering the union without
					him.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					In his absence, his tribe were overrun and overwhelmed - following
					their collapse, the rest of the union fell like dominoes. And thus,
					our server fell to the greedy.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					We learned from Go-Rilla that, although our followers may forgive us,
					when we abdicate, the power we held quickly decays.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Go-Rilla was a complicated young man with a complicated life. You got
					the sense that there was something going on with which he refused to
					burden those around him. Being the de facto president of a coalition
					of tribes had added stress to an already heavy life - rather than
					being the escape he had hoped for.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					When he led the server, Go-Rilla did so with a gentle fist, like this:
				</p>{' '}
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/lCjSKUs1bXk?si=3dRA-sb2z1eVTI2s"
						title="Neji 8 Trigrams"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					It wasn&apos;t always popular.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					However, since Go-Rilla had maintained his standing and credibility
					with the allies contained within that great union, he was able to
					leverage that credibility to great protective effect. He did this
					through calm restraint and eloquence from a seat of real power -
					envision a man who could unleash an avalanche onto your head, yet
					chooses to hear you out, and then speak to you with dignity as he
					tells you that you can do whatever you&apos;d like, as long as you
					play by his rules.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Now envision a grown man, stomping and screaming and whining until
					those around him acquiesce - temporarily.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					When an outsider launched a surprise attack, they were easily
					repelled, and our warriors - of whom Go-Rilla frequently proved to be
					amongst the most capable, even when armed only with a slingshot to the
					other man&apos;s pistol - got to satisfy their desire for combat.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					When the leader of an invasive tribe landed, saw us as unified, and
					then spoke to Go-Rilla and realized that he was outwitted as well, he
					would leave. He knew better than to embarrass himself in front of his
					devoted tribe.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					It was a lot like turning his{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Chakra"
					>
						chakra
					</Link>{' '}
					off.
				</p>{' '}
			</Collapsible>
			<Collapsible id="prophets" title="How to Apply These Lessons">
				<p className={`paragraph width-full block left-align`}>
					Silly as it may sound, I like to think that, whatever else is going on
					in the world, a guy like Go-Rilla is out there, quietly watching over
					the people who embody those ideals which his tribe upheld so fervently
					- even when cutting through a jungle which sometimes feels more like a
					labyrinth.
				</p>{' '}
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Vn8phH0k5HI?si=iFfStV-ZtotKj2QE"
						title="Jungle - Tash Sultana"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					If you sit in a position of power, you do not need me telling you that
					you carry nearly as much responsibility as Go-Rilla once did.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You already feel the weight of that.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Everyone around you can see you carrying it.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Instead of dictating to them, as you maybe could, try speaking with
					them, and letting them feel the truth: that their vision can exist
					within the grand tapestry which houses us all, so long as it respects
					and honors the core democratic values we all hold so dearly, which
					are: life, liberty, and the{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/The_Pursuit_of_Happyness"
					>
						Pursuit of Happyness
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you feel ready to lead like Go-Rilla: drop one piece - a pebble -
					of your peaceful project this week, and watch the water{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.youtube.com/watch?v=ztYUgYCa190&list=RDztYUgYCa190&start_radio=1"
					>
						ripple
					</Link>
					. Go-Rilla, Matisyahu, and K&apos;naan all three believe in you, and
					pray for your success - at least that is what I choose to believe.
				</p>
			</Collapsible>
			<Footer title={"'Social Learning: The Art of War (And Leadership)'"} />
		</main>
	);
}
