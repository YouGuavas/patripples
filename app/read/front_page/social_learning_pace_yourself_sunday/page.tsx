import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ByLine from '@/app/components/ByLine';
import Footer from '@/app/components/blog/Footer';
import Collapsible from '@/app/components/blog/Collapsible';
import TableOfContents from '@/app/components/blog/TableOfContents';

import patrick_great_wall from '@/public/scenes/patrick/patrick_great_wall.svg';

export const metadata: Metadata = {
	title:
		"Patripples | 'Social Learning: Pace Yourself Sunday' by Patrick Yambrick",
	description:
		"Read Patrick's thoughts on 'Social Learning: Pace Yourself Sunday.' Understanding the Pace of War is key. Written by Patrick Yambrick, a web developer and designer for small businesses in the Flint, Michigan area.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				Social Learning: Pace Yourself Sunday
			</h1>
			<ByLine
				author={`Patrick Yambrick`}
				date={'Sunday, Mar 15, 2026'}
				edited={'Sunday, Mar 15, 2026'}
			/>
			<div className={`jumbo-container centered`}>
				<Image
					fetchPriority="high"
					loading="eager"
					src={patrick_great_wall.src}
					fill
					alt={`Patrick reads Sun Tzu to you.`}
				/>
			</div>
			<hr />
			<p className={`paragraph width-full block left-align`}>
				I. Maneuvering -{' '}
				<Link
					className={`spaced color-2 rounded darken`}
					href="https://classics.mit.edu/Tzu/artwar.html"
				>
					The Art of War
				</Link>{' '}
				by Sun Tzu
			</p>
			<p className={` width-full block left-align`}>
				&quot;Therefore, in your deliberations, when seeking to determine the
				military conditions, let them be made the basis of a comparison, in this
				wise:--
			</p>
			<ol className="width-full left-align flex column gap-small">
				<li>Which of the two sovereigns is imbued with the Moral law?</li>
				<li>Which of the two generals has most ability?</li>
				<li>With whom lie the advantages derived from Heaven and Earth?</li>
				<li>On which side is discipline most rigorously enforced?</li>
				<li>Which army is stronger?</li>
				<li>On which side are officers and men more highly trained?</li>
				<li>
					In which army is there the greater constancy both in reward and
					punishment?
				</li>
			</ol>
			<p className={` width-full block left-align`}>
				By means of these seven considerations I can forecast victory or defeat.
			</p>
			<p className={` width-full block left-align`}>
				The general that hearkens to my counsel and acts upon it, will conquer:
				let such a one be retained in command! The general that hearkens not to
				my counsel nor acts upon it, will suffer defeat:--let such a one be
				dismissed!
			</p>
			<p className={` width-full block left-align`}>
				While heading the profit of my counsel, avail yourself also of any
				helpful circumstances over and beyond the ordinary rules.
			</p>
			<p className={` width-full block left-align`}>
				According as circumstances are favorable, one should modify one&apos;s
				plans.
			</p>
			<p className={` width-full block left-align`}>
				All warfare is based on deception.
			</p>
			<p className={` width-full block left-align`}>
				Hence, when able to attack, we must seem unable; when using our forces,
				we must seem inactive; when we are near, we must make the enemy believe
				we are far away; when far away, we must make him believe we are near.
			</p>
			<p className={` width-full block left-align`}>
				Hold out baits to entice the enemy. Feign disorder, and crush him.
			</p>{' '}
			<p className={` width-full block left-align`}>
				If he is secure at all points, be prepared for him. If he is in superior
				strength, evade him.
			</p>
			<p className={` width-full block left-align`}>
				If your opponent is of choleric temper, seek to irritate him. Pretend to
				be weak, that he may grow arrogant.
			</p>{' '}
			<p className={` width-full block left-align`}>
				If he is taking his ease, give him no rest. If his forces are united,
				separate them.
			</p>{' '}
			<p className={` width-full block left-align`}>
				Attack him where he is unprepared, appear where you are not expected.
			</p>{' '}
			<p className={` width-full block left-align`}>
				These military devices, leading to victory, must not be divulged
				beforehand.
			</p>{' '}
			<p className={` width-full block left-align`}>
				Now the general who wins a battle makes many calculations in his temple
				ere the battle is fought. The general who loses a battle makes but few
				calculations beforehand. Thus do many calculations lead to victory, and
				few calculations to defeat: how much more no calculation at all! It is
				by attention to this point that I can foresee who is likely to win or
				lose.&quot;
			</p>{' '}
			<hr />
			<TableOfContents title="Sections" sections={['Inoculation Station']} />
			<hr />
			<div className={`jumbo-container centered`}>
				<iframe
					loading="lazy"
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/QuwF8ecAMEQ?si=OC4672XxEhs2ys3e"
					title="Leaves On The Vine"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
			<h2
				className={`lowercase style-1 spaced left width-full block left-align`}
			>
				How To Stay Ahead
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Have you ever heard the saying &quot;By failing to prepare, you are
				preparing to fail&quot;?
			</p>
			<p className={`paragraph width-full block left-align`}>
				A wise man from a past life prepared me with this sage advice.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Time and time again, I have failed to heed it - my signature technique.
			</p>
			<p className={`paragraph width-full block left-align`}>
				And so I think: what if, just this once, I didn&apos;t?
			</p>
			<p className={`paragraph width-full block left-align`}>
				In keeping with the seven considerations made by Sun Tzu in Chapter One
				of &apos;The Art of War&apos; - the book that inspired &apos;The Art of
				the Deal&apos; - I like to make sure that I am imbued with the Moral law
				when I act.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I do so by ensuring that I have put forth my best effort toward trying
				to empower those around me, and toward allowing them chances to act
				before I make my own decisions.
			</p>
			<p className={`paragraph width-full block left-align`}></p>
			<Collapsible id="1" bg="bg-6" title="I - Inoculation Station">
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					What Is Inoculation?
				</h3>
				<p className={`paragraph width-full block left-align`}>
					According to{' '}
					<Link
						className={`spaced color-2 rounded darken`}
						href="https://www.freep.com/story/news/local/michigan/oakland/2026/03/12/temple-israel-shooting-west-bloomfield/89119641007/"
					>
						Merriam-Webster
					</Link>
					, Inoculation is the process or an instance of inoculating.
				</p>
				<p className={`paragraph width-full block left-align`}>Oh, good.</p>
				<p className={`paragraph width-full block left-align`}>
					Inoculation is where you take a little bit of something and introduce
					it into a system. Depending on intent, the goal can either be to build
					a resistance - to disease, to addiction, or to a psychological
					dependency - or to cause an infection. Historically, the intent behind
					causing infection via inoculation has been to arrive at later
					immunity.
				</p>
				<p className={`paragraph width-full block left-align`}>
					This is how we got the smallpox vaccine.
				</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/jtqAqL3fn64?si=Q21v8i-Pbbw2bSlV"
						title="On The Smallpox Vaccine"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<h3
					className={`lowercase style-1 spaced left width-full block left-align`}
				>
					Why Are You Telling Me About Inoculation?
				</h3>
				<p className={`paragraph width-full block left-align`}>
					Good question.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I am telling you about inoculation for the sake of explanation. Here,
					I will focus on psychological inoculation - or, prebunking, as it is
					known.
				</p>
				<p className={`paragraph width-full block left-align`}>
					In an age of information warfare, cognitive security is critical.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Cognitive security - or CogSec - can be imagined as something like a
					set of tools in the defense against general manipulation,
					misinformation, and - my favorite - social engineering.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Social engineering is a process through which rivals or adversaries -
					be they political, professional, or whatever form - prepare,
					infiltrate, exploit, and ultimately abscond with some gain - with you
					none the wiser.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Unless you are. Which most of you are.
				</p>
				<p className={`paragraph width-full block left-align`}>
					I&apos;ll write a more serious post later. I kind of just felt like
					doodling today, so I made that meme up top.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Be safe. Be prepared.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					You don&apos;t need to learn the name of the wind or anything.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					Just have a plan to get or be somewhere safe in the event of weather,
					and know that there are going to be people looking to scam you by
					using emotions, information manipulation, and all manner of other
					tactics. Don&apos;t give anyone your passwords.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					If you get any emails or offers that seem too targeted, or too good to
					be true - they might be. Use caution. No need for paranoia if you are
					prepped. Ask a trusted friend for a second opinion if anything
					conspicuously good or disruptively otherwise comes across your desk or
					your feed.
				</p>
				<p className={`paragraph width-full block left-align`}>
					Double check any links you click - even on my site. I check them
					before I share them, and you should still double check me.
				</p>{' '}
				<p className={`paragraph width-full block left-align`}>
					If you are on a traditional computer - hover your mouse above the link
					and look at that text space in the bottom left of your browser window.
					If you are on a phone, long press the link and select the copy option,
					then paste it into a notepad or look at your phone&apos;s clipboard if
					you know how. Do not visit any links that trigger your suspicion
					without giving them a second look.
				</p>
				<p className={`paragraph width-full block left-align`}>Happy Sunday.</p>
				<div className={`jumbo-container centered`}>
					<iframe
						loading="lazy"
						width="100%"
						height="100%"
						src="https://youtube.com/embed/v8dmoAcjW2U"
						title="On The Smallpox Vaccine"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</Collapsible>
			<Footer title={"'Social Learning: The Art of War (And Leadership)'"} />
		</main>
	);
}
