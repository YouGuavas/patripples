import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';
import Collapsible from '@/app/components/blog/Collapsible';

import patrick_pews from '@/public/scenes/patrick/patrick_pews.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Small Business: How to Triple Your Prophets (Singing Peace Above the Din of War)' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Small Business: How to Triple Your Prophets (Singing Peace Above the Din of War).' Understanding the Bible is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Small Business: How to Triple Your Prophets (Singing Peace Above the Din
				of War)
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Wednesday, Mar 11, 2026'}
				edited={'Wednesday, Mar 11, 2026'}
			/>
			<p className={`paragraph width-full block left-align`}>
				Want to skip past the politics and religion and get right to the real
				lesson?{' '}
				<Link className={`spaced color-2 rounded darken`} href="#prophets">
					Be My Guest
				</Link>
				.
			</p>
			<div className={`jumbo-container centered`}>
				<Image
					fetchPriority="high"
					loading="eager"
					src={patrick_pews.src}
					fill
					alt={`Patrick speaks with you while surrounded by pews.`}
				/>
			</div>
			<hr />
			<p className={`paragraph width-full block left-align`}>
				&quot;Now therefore hearken unto their voice: howbeit yet protest
				solemnly unto them, and shew them the manner of the king that shall
				reign over them.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And Samuel told all the words of the Lord unto the people that asked of
				him a king.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he said, This will be the manner of the king that shall reign over
				you: He will take your sons, and appoint them for himself, for his
				chariots, and to be his horsemen; and some shall run before his
				chariots.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he will appoint him captains over thousands, and captains over
				fifties; and will set them to ear his ground, and to reap his harvest,
				and to make his instruments of war, and instruments of his chariots.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he will take your daughters to be confectionaries, and to be cooks,
				and to be bakers.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he will take your fields, and your vineyards, and your oliveyards,
				even the best of them, and give them to his servants.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he will take the tenth of your seed, and of your vineyards, and give
				to his officers, and to his servants.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And he will take your menservants, and your maidservants, and your
				goodliest young men, and your asses, and put them to his work.
			</p>
			<p className={`paragraph width-full block left-align`}>
				He will take the tenth of your sheep: and ye shall be his servants.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And ye shall cry out in that day because of your king which ye shall
				have chosen you; and the Lord will not hear you in that day&quot;
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				-Samuel 8:9-18 ({' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="      https://www.biblegateway.com/passage/?search=1%20Samuel%208&version=KJV
"
				>
					KJV
				</Link>
				)
			</p>
			<hr />
			<p className={`paragraph width-full block left-align`}>
				Privacy disclaimer before clicking on any embedded songs or videos in
				this post: although I track no data on you when you use these embeds,
				the services from which I source them do. If you are curious to learn
				more, check out the{' '}
				<Link className={`spaced color-2 rounded darken`} href="/read/contact">
					Contact
				</Link>{' '}
				Page. All music, videos, and their relevant rights belong to the
				original creators and posters, and to the relevant hosting sites. If I
				need to take anything down, you already know how to find the contact
				page. Let me know.
			</p>
			<p className={`paragraph width-full block left-align`}>
				--End Disclaimer.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Curious about what&apos;s going on with the{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.wbaltv.com/article/strait-of-hormuz-what-to-know/70710408
"
				>
					Strait of Hormuz
				</Link>
				?
			</p>
			<p className={`paragraph width-full block left-align`}>
				I take a lot of{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.chanceraps.com/"
				>
					Chances
				</Link>{' '}
				in this article. As always, my intent is to channel some of his
				creativity and the vibe he so often curates in such a way as emphasizes
				the teachable points I am seeking to drive home. I like to listen to
				relevant music to help life&apos;s lessons sink in. I believe that most
				musicians are poets, and that poets are our oldest wisdom teachers.
			</p>{' '}
			<p className={`paragraph width-full block left-align`}>
				To my knowledge, what I am doing qualifies as fair use, though I am
				happy to remove any content which I have embedded which violates fair
				use. I am not a lawyer, and I make no money directly off of this
				content.{' '}
				<Link className={`spaced color-2 rounded darken`} href="/contact">
					Let Me Know
				</Link>
				.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Remember when{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.revolt.tv/article/2017-03-06/25337/chance-the-rapper-donates-1-million-to-chicago-public-schools"
				>
					Chance the Rapper put up $1m of his own money for Chicago Public
					Schools
				</Link>
				? Talk about a modern Christian leader.
			</p>
			<div className={`jumbo-container centered`}>
				<iframe
					loading="lazy"
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/XdpGJSe44_o?si=HEc4qI4QFNwlHnOE"
					title="Blessings (ft. Jamila Woods) - Chance the Rapper"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
			<p className={`paragraph width-full block left-align`}>
				I don&apos;t know about you, but when Chance says &quot;Said you the man
				of the house now, look out for your family He has ordered my steps, gave
				me a sword with a crest And gave Donnie a trumpet in case I get
				shortness of breath,&quot; and &quot;Don&apos;t believe in kings,
				believe in the Kingdom,&quot; I feel moved.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I hold a firm belief that when a self-professed Christian sees
				unholiness committed in the name of the Lord, that this constitutes the
				use of the name of the Lord in vain.{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://www.cslewisinstitute.org/resources/why-are-christians-so-hypocritical/"
				>
					Some agree.
				</Link>
			</p>
			<p className={`paragraph width-full block left-align`}>
				Toward the end of the article I linked just there, its author, Mr.
				Kynes, rightly and righteously points out &quot;But supremely, the
				gospel should strike a blow to hypocrisy, for it gets at its very root.
				It forces us to humble ourselves daily and to recognize the truth about
				ourselves as forgiven sinners, in need of God&apos;s grace and power to
				live in truth. There&apos;s no place for putting on a mask and
				pretending we&apos;re something that we&apos;re not-for God knows us
				from the inside out. A humble, repentant heart is the answer to
				hypocrisy.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				By this view, with which I align, it would be profoundly un-Christian
				not to call out hypocrisy at the highest level, especially if you deeply
				believe it to be taking place, as I do.
			</p>
			<Collapsible title="A War Like Peace" bg="bg-6">
				<p className={`paragraph width-full block left-align`}>
					&quot;Blessed be the Lord my strength which teacheth my hands to war,
					and my fingers to fight:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					My goodness, and my fortress; my high tower, and my deliverer; my
					shield, and he in whom I trust; who subdueth my people under me.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Lord, what is man, that thou takest knowledge of him! or the son of
					man, that thou makest account of him!
				</p>
				<p className={`paragraph width-full block left-align`}>
					Man is like to vanity: his days are as a shadow that passeth away.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Bow thy heavens, O Lord, and come down: touch the mountains, and they
					shall smoke.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Cast forth lightning, and scatter them: shoot out thine arrows, and
					destroy them.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Send thine hand from above; rid me, and deliver me out of great
					waters, from the hand of strange children;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Whose mouth speaketh vanity, and their right hand is a right hand of
					falsehood.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I will sing a new song unto thee, O God: upon a psaltery and an
					instrument of ten strings will I sing praises unto thee.
				</p>
				<p className={`paragraph width-full block left-align`}>
					It is he that giveth salvation unto kings: who delivereth David his
					servant from the hurtful sword.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Rid me, and deliver me from the hand of strange children, whose mouth
					speaketh vanity, and their right hand is a right hand of falsehood:
				</p>
				<p className={`paragraph width-full block left-align`}>
					That our sons may be as plants grown up in their youth; that our
					daughters may be as corner stones, polished after the similitude of a
					palace:
				</p>
				<p className={`paragraph width-full block left-align`}>
					That our garners may be full, affording all manner of store: that our
					sheep may bring forth thousands and ten thousands in our streets:
				</p>
				<p className={`paragraph width-full block left-align`}>
					That our oxen may be strong to labour; that there be no breaking in,
					nor going out; that there be no complaining in our streets.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Happy is that people, that is in such a case: yea, happy is that
					people, whose God is the Lord.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					-Psalm 144:1-15 (
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=Psalm%20144&version=KJV"
					>
						KJV
					</Link>
					)
				</p>
				<hr />
				<p className={`paragraph width-full block left-align`}>
					Mr. Kynes also points out that, &quot;We can lessen hypocrisy in the
					church when we realize that being a Christian involves more than
					having a profession of Jesus; it involves Jesus’s coming to live
					within us by His Spirit, changing us from the inside. When we come to
					trust Jesus Christ, we are forgiven, and God begins a process of
					transforming us into the image of Christ. But that is a process, and
					it can be a slow process.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Profanity warning.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/xnO2HDmT1D8?si=VrRzdQv6KieFCzYF"
						title="Heart and Tongue - Chance the Rapper"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					Did you know that in Christianity - as in its{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.churchofjesuschrist.org/study/ftsoy/2023/12/questions-and-answers/13-what-are-abrahamic-religions?lang=eng"
					>
						Abrahamic
					</Link>{' '}
					sister religions,{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.jpost.com/jewish-world/judaism/article-60726"
					>
						Judaism
					</Link>{' '}
					and{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://muslimgirl.com/11-times-islamic-poetry-touched-our-souls/"
					>
						Islam
					</Link>{' '}
					-{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://mywestwood.org/writing-poetry-for-the-glory-of-god-and-the-blessing-of-others/"
					>
						Poetry Is Celebrated As Positive Spiritual Warfare
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>
					That is what makes me so pleased to listen to Chance&apos;s lyrics
					here:
				</p>
				<p className={`paragraph width-full block left-align`}>
					&quot;My heart and tongue are fightin&apos;, my mind is undecided
				</p>
				<p className={`paragraph width-full block left-align`}>
					It&apos;s not like Trump and Biden, it&apos;s more like it&apos;s
					something private
				</p>
				<p className={`paragraph width-full block left-align`}>
					Like when your cousins fight and one of &apos;em get excited
				</p>
				<p className={`paragraph width-full block left-align`}>
					You can&apos;t just jump the gun and pick a side and jump inside it
				</p>
				<p className={`paragraph width-full block left-align`}>
					Remember{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.history.com/articles/why-pontius-pilate-executed-jesus"
					>
						Pontius Pilate
					</Link>{' '}
					hung a God and justified it
				</p>
				<p className={`paragraph width-full block left-align`}>
					The truth is slow &apos;cause someone&apos;s always in a rush to hide
					it
				</p>
				<p className={`paragraph width-full block left-align`}>
					The lies is golden &apos;cause the devil got a touch of{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/Midas"
					>
						Midas
					</Link>
				</p>
				<p className={`paragraph width-full block left-align`}>
					The soul is brighter &apos;cause the Holy Ghost is ultraviolet
				</p>
				<p className={`paragraph width-full block left-align`}>
					The tongue is violent when the spirit starts to
					hunger-strikin&apos;&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://digitalcommons.georgefox.edu/cgi/viewcontent.cgi?article=1118&context=cslewisjournal"
					>
						This is how peace-loving Christians fight wars.
					</Link>
				</p>
				<p className={`paragraph width-full block left-align`}>
					In the linked piece, the author, Mr. Demy, writes: &quot;Issues of war
					and peace are literally issues of life and death, and therefore the
					tragedy of war must never be forgotten or minimized. The horrors of
					war are surely the closest approximation there is to Hell on earth.
					War chang- es lives forever in ways that are otherwise unthinkable.
					From a Christian perspective, war entails the death and killing of
					people who are all created in the image of God and therefore have
					inherent dignity and incalculable worth. And yet, even after
					experiencing war at firsthand, C. S. Lewis believed that war is
					sometimes justifiable and necessary.&quot;
				</p>
				<p className={`paragraph width-full block left-align`}>
					Under what conditions would you allow your sons to be &quot;taken for
					his chariots, and to be his horsemen, and some to run in front of his
					chariots&quot;?
				</p>
			</Collapsible>
			<Collapsible title="A Quiet Lion Roars">
				<p className={`paragraph width-full block left-align`}>
					The elders which are among you I exhort, who am also an elder, and a
					witness of the sufferings of Christ, and also a partaker of the glory
					that shall be revealed:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Feed the flock of God which is among you, taking the oversight
					thereof, not by constraint, but willingly; not for filthy lucre, but
					of a ready mind;
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Neither as being lords over God&apos;s heritage, but being examples to
					the flock.
				</p>
				<p className={`paragraph width-full block left-align`}>
					And when the chief Shepherd shall appear, ye shall receive a crown of
					glory that fadeth not away.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Likewise, ye younger, submit yourselves unto the elder. Yea, all of
					you be subject one to another, and be clothed with humility: for God
					resisteth the proud, and giveth grace to the humble.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Humble yourselves therefore under the mighty hand of God, that he may
					exalt you in due time:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Casting all your care upon him; for he careth for you.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Be sober, be vigilant; because your adversary the devil, as a roaring
					lion***, walketh about, seeking whom he may devour:
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Whom resist stedfast in the faith, knowing that the same afflictions
					are accomplished in your brethren that are in the world.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					But the God of all grace, who hath called us unto his eternal glory by
					Christ Jesus, after that ye have suffered a while, make you perfect,
					stablish, strengthen, settle you.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					To him be glory and dominion for ever and ever. Amen.
				</p>
				<p className={`paragraph width-full block left-align`}>
					-1 Peter 5:1-11 (
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.biblegateway.com/passage/?search=1%20Peter%205&version=KJV"
					>
						KJV
					</Link>
					)
				</p>
				<hr />
				<p className={`paragraph width-full block left-align`}>
					***Did you know that Israel refers to Operation Epic Fury as{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.cnn.com/world/live-news/israel-iran-attack-02-28-26-hnk-intl?post-id=cmm60zpmz001v3b6pkd1t046n"
					>
						Operation Roaring Lion
					</Link>
					?
				</p>
				<p className={`paragraph width-full block left-align`}>Hm.</p>
				<p className={`paragraph width-full block left-align`}>
					Though I am often prideful, I am not naive. I do my best to learn
					wisdom from every elder, and I accept that not every war or act of
					violence can be averted.
				</p>
				<p className={`paragraph width-full block left-align`}>
					However, I know it to be our duty under Abrahamic law (for those of us
					who try to live it, whatever we label ourselves) to question leaders
					when they use Biblical terminology and imagery imprecisely, lest we
					let them slip unintentionally into mass-scale public manipulation
					under guise of Godliness.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I am not lamenting the death of a violent and oppressive dictator.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I am expressing caution toward a view of our own leader as an anointed
					king and crusader of Christ.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I am expressing concern about the rising probability of a major
					international war, or of a dreadful counterattack on us soil, or on
					our allies abroad.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I do not like it when the religion that built my successful early
					years is used in the way it is being used. I would never. I would hope
					you would not, either.
				</p>
				<p className={`paragraph width-full block left-align`}>
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.nytimes.com/2026/03/08/world/middleeast/american-soldier-killed-iran-war.html#:~:text=Another%20American%20service%20member%20has,in%20the%20conflict%20to%20seven."
					>
						Would you
					</Link>
					?
				</p>
			</Collapsible>
			<Collapsible id="prophets" title="How to Stop Lion" bg="bg-6">
				<p className={`paragraph width-full block left-align`}>
					You don&apos;t have to think the way I think. You don&apos;t have to
					believe what I believe.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Whatever you feel when you read my posts, I hope that it is clear I am
					doing it because I care, and because I believe in something worth
					standing up for. I wouldn&apos;t have you added in one of my
					communication channels if I didn&apos;t think you were capable of
					digesting these pieces and reaching your own conclusions.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In Zen Buddhism, which is compatible with Christianity - as it is a
					method of operating which fits within most other religions; not a
					religion itself, and not something which requires the worship of any
					deity - one of the core tenets is called &quot;Right Action.&quot; It
					is very straightforward: do your best to do the right thing.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I see things in a particular light, and my way of viewing the world
					has generally been very kind to me.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I have been misunderstood a number of times for acting too fervently
					in defense of the small, or in defense of truths I believe to be
					right, rooted in my understanding of the world as someone from a
					family with generations-old Christian and Catholic roots - but this
					has not destroyed me. Rather, it has given me a reason to speak, and
					returned my voice with which to do so.
				</p>
				<p className={`paragraph width-full block left-align`}>
					This isn&apos;t about me, though. It is about the prospects of your
					small business in a time of false prophets.
				</p>
				<p className={`paragraph width-full block left-align`}>
					If you want to turn a profit, you&apos;ve got to be{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.mediavillage.com/article/the-powerful-correlation-between-consistency-success/"
					>
						consistent
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You&apos;ve got to{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.nirandfar.com/believe-in-luck-for-success/"
					>
						believe in your own luck
					</Link>{' '}
					(while continuing to act toward its outcome).
				</p>
				<p className={`paragraph width-full block left-align`}>
					Finally, you&apos;ve got to be{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://venteon.com/2025/01/27/the-strategic-advantage-of-resilience-how-investing-in-resilience-drives-long-term-profitability/"
					>
						resilient
					</Link>
					.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Profanity warning.
				</p>{' '}
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/eedeXTWZUn8?si=qA8x-pBY8XTovqKd"
						title="Angels (ft. Saba) - Chance the Rapper"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<p className={`paragraph width-full block left-align`}>
					If you ever get tired of reading my dictations, and want to share your
					own view of the world,{' '}
					<Link className={`spaced color-2 rounded darken`} href="/contact">
						Let me know
					</Link>
					. I&apos;d love to help you get started, and later read your writing.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Do you feel like you have angels protecting and uplifting you?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Do you believe you can stick out the struggle long enought to triple
					your prophets?
				</p>
				<p className={`paragraph width-full block left-align`}>
					Take a Chance: drop one piece of your project in the next{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://en.wikipedia.org/wiki/10_Day"
					>
						10 Days
					</Link>
					. Use your voice.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Listen to the roar you bring echoing back onto you.
				</p>
				<p className={`paragraph width-full block left-align`}>
					You might get lucky.
				</p>
			</Collapsible>
			<Footer
				title={
					"'Small Business: How to Triple Your Prophets (Singing Peace Above the Din of War)'"
				}
			/>
		</main>
	);
}
