import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import tree from '../../../../public/trees/as_above.png';

export const metadata: Metadata = {
	title: 'Patripples | Ode to Moms',
	description:
		"Learn about fetal learning with Patripples for Mother's Day. Composed by Patrick Yambrick.",
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Ode To Moms.
			</h1>
			<ByLine date={'Sun, May 11, 2025'} />
			<blockquote
				className={`style-2 thin width-full block left-align`}
				cite="https://genius.com/2pac-keep-ya-head-up-lyrics"
			>
				&quot;And since we all came from a woman,
				<br />
				Got our name from a woman and our game from a woman.
				<br />
				I wonder why we take from our women,
				<br />
				Why we rape our women,
				<br />
				Do we hate our women?&quot;
			</blockquote>

			<p className={`paragraph width-full block left-align`}>-Tupac Shakur</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to teach them young.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Have you ever read a book - or a blog post - and come away from the
				experience with the sense that you learned something; that the
				experience <em>enriched</em> you?
			</p>
			<p className={`paragraph width-full block left-align`}>
				It is not difficult for most to imagine that the bulk of human learning
				takes place after we are born. This is easy to imagine because it is
				true. We do not learn to hold a pencil - nor to clack on a keyboard -
				until years after our birth. Manual writing with a pencil is most
				frequently taught in schools in kindergarten, or a bit earlier than
				that, in the case of active parenting. Typing, by contrast, tends to be
				taught even later - most frequently in third or fourth grade. Although
				this is changing in many instances toward an earlier learning age
				itself, it is still broadly true that typing is taught later than is
				manual writing.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Writing is critical in the storage and refinement of thoughts, ideas,
				dreams, and aspirations. This is true on the personal level as well as
				the societal - and what&apos;s more, it is true on the scale of the
				whole of human history. Written words have also been crucial in the
				advancement of human collaboration and cooperation since their
				inception. Thanks to written instructions, a manufacturer&apos;s
				assistant need not always be present when you assemble your Ikea
				furniture.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Did you really need those instructions, though? Or were you able to
				infer a lot of how it went, using the instructions as a guide?
			</p>
			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to start early.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				While it is so that <em>most</em> learning occurs in the post-uterine
				state of life, not <em>all</em> learning does.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Most human fetuses have developed hearing by around{' '}
				<Link
					className={`no-deco spaced`}
					href="https://www.washington.edu/news/2013/01/02/while-in-womb-babies-begin-learning-language-from-their-mothers/#:~:text=Sensory%20and%20brain%20mechanisms%20for%20hearing%20are,at%20birth%20can%20demonstrate%20what%20they%27ve%20heard.&text=%E2%80%9CThis%20study%20moves%20the%20measurable%20result%20of,six%20months%20of%20age%20to%20before%20birth.%E2%80%9D"
				>
					30 weeks&apos; gestation
				</Link>
				. In the period between this development, and birth at around 40 weeks,
				fetuses show signs of learning - first picking up on peaks and dips in
				their mothers&apos; voices. After establishing a pattern-based system of
				understanding the mother&apos;s voice and tones, it follows that an
				alert fetus with nothing to do but listen, wait, absorb, and synthesize
				would do exactly those things with all of their time.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It is using this innate pattern recognition ability - which many of us
				are becoming increasingly aware of within ourselves - that many of our
				young begin to piece together the basics of language from within the
				mother&apos;s womb. Many babies are able to demonstrate things that they
				have learned in-utero, at birth. They are able to demonstrate a{' '}
				<Link
					className={`no-deco spaced`}
					href="https://www.frontiersin.org/news/2024/05/22/babies-in-the-womb-exposed-to-two-languages-hear-speech-differently-when"
				>
					preference for the mother&apos;s
				</Link>{' '}
				voice, as well as recognition of stories told and languages experienced
				during gestation.
			</p>
			<p className={`paragraph width-full block left-align`}>
				This means that, from the very beginnings of life, our mothers are
				shaping our future minds. While they are not responsible for every last
				thought we think, what a mother is exposed to - both intentionally and
				otherwise - during our gestation, strongly shapes both the initial
				mental state with which we enter the world, and the early life
				circumstances which will solidify, shift, or otherwise alter our
				thoughts further downstream.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Have you ever compared a tree&apos;s roots to its branches and noticed a
				similarity?
			</p>

			<div className={` width-full block left-align`}>
				<Image
					className="left"
					id="as_above"
					alt={`As above, so below`}
					height={333}
					width={250}
					src={tree.src}
				/>
			</div>

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to build a team.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				If &quot;as above, so below&quot; were applied to thought, how would
				that look to you?
			</p>
			<p className={`paragraph width-full block left-align`}>
				Since the written word is the great catalyst of human collaboration,
				thought must be the catalyst of writing. Writing is thought, captured in
				solid form. In this solid form, our words will outlast us.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Consider van Gogh, Gregor Mendel, and Hypatia of Alexandria. Van Gogh
				and Mendel went largely unrecognized during their respective lifetimes,
				and while Hypatia was recognized during hers, her teachings carried long
				into time following her assassination. Hypatia&apos;s legacy survived
				through collaborative word of mouth story and insight sharing with and
				through her students, yes, but also through the writings which she left
				behind and which were later picked up by other reverent scholars of
				antiquity. Likewise, Mendel influenced a small circle of monks, family,
				and friends during his lifetime, while much of his foundational work on
				genetics flew under the radar for some 200 years post-mortem.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Most are familiar with van Gogh and his great struggles during life -
				and also his brilliance, unique amidst even the starriest of night
				skies. His work is among the most recognizable of all time, and many
				continue to draw inspriation from it, even today.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Each of these three titans&apos; works has gone on to influence and
				shape the works of others since - in the case of Mendel, the field of
				genetics was born.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Hypatia inspires women and scholars of all stripes, and van Gogh carries
				the torch for the tortured.
			</p>

			<p className={`paragraph width-full block left-align`}>
				Through their drive and their purpose, they imprinted not only their own
				- but also their mothers&apos; - best and brightest thoughts onto the
				shared psyche of humanity for as long as our species continues to
				persist.
			</p>

			<p className={`paragraph width-full block left-align`}>
				If our mothers have shaped our minds since before our births, then what
				better way to celebrate her than to solidify and collaborate on our
				thoughts on her behalf?
			</p>

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				How to deliver.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				What a fascinating species we are. We begin growing before we are born,
				and we continue to collaborate after our time here ends.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Beginning from our first self-iterations, enabled by the safety our
				mothers&apos; bodies provide us, we learn. We do this first physically,
				through response to nutrient abundance and deficiency cycles; later
				mentally, through extrauterine data absorbed auditorily. We continue
				these processes, informed by that initial in-utero experience we shared
				with our mothers, for life.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Our world exists. Things exist within our world. Our mothers did not
				create the world, nor did they create that which lies within. But they
				did create us as we lay within, and in doing so, gave us the lens
				through which we receive and perceive the world.
			</p>
			<p className={`paragraph width-full block left-align`}>
				If you&apos;ve ever felt the whoosh of a thought, and wondered where it
				came from; or the eureka of an epiphany, and felt yourself a genius;
				remember that while you likely are gifted (as I believe many to be) -
				and while that thought may have been sparked by divinity or by some
				other difficult-to-describe mechanism - it also might have been
				catalyzed by some of the moms in your life holding your hand and acting
				as your shield and your beacon.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Happy Mother&apos;s Day to all of those mothers, women, and involved
				parents who serve in flexible roles to ensure the safety, survival, and
				harmonic betterment of our species&apos; young.
			</p>
		</main>
	);
}
