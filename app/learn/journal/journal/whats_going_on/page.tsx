import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';

export const metadata: Metadata = {
	title: 'Patripples | What Is Happening',
	description:
		'Learn about what is happening with Patripples. Catalyzed by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What Is Going On.
			</h1>
			<ByLine date={'Thu, May 8, 2025'} />

			<p className={`paragraph width-full block left-align`}>
				This may get heavy. My life just took a major turn for the worse. My aim
				here is to tell my story, just in case.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I do not like to speak this way - I would prefer to retain my dignity,
				and to overcome things silently. I am having a difficult time seeing
				into the future right now, though, so here goes.
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Growing Up.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Growing up in my family was <em>not</em> easy. Envision two codependent,
				narcissistic entities who have no business being in charge of
				themselves, let alone you, somehow controlling everything around you.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Now, throw that into a blender - with constant movement due to financial
				instability, a favorite child (not me), a violent and unstable father
				with a need to claim credit for things he has not done (multi-domain
				valor thief!), and a mother who takes those stresses out on you.
			</p>

			<p className={`paragraph width-full block left-align`}>
				We had moved <em>seventeen</em> times by the time I was 17 years old.
			</p>
			<p className={`paragraph width-full block left-align`}>
				My mom worked, and my dad stayed home. He had a back injury.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Have you ever met a person who had all of the financial sense of a
				donut?
			</p>
			<p className={`paragraph width-full block left-align`}>
				I noticed very early on that this describes each of my parents-
				financial donuts, both. This financial donutry is what led us to our
				frequent moves. My parents always had money to smoke - not always to
				keep us from living in a tent.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Tents aside, it was my job to fan the flames for my &apos;rents. I
				remember them sitting us down and asking us whether we thought they
				should remain married. <em>Of course</em> a kid wants their parents to
				remain together. That&apos;s beside the point - I am not married to
				either of you. Why are you asking me?
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Being Born.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I was born post-term, and my youngest brother premature. That is two out
				of three born in unusual time.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Despite the fact that nearly all post-term births are managed and
				planned by doctors, my father was not in the room with us. He was
				somehwere else, with unclear details as to where. He always tells me a
				story about how he had to crawl through what he describes as one of the
				world&apos;s worst ice storms to get to me. How incredible of him. I
				wonder if my mom did any of the labor.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Without implying pre-birth certainty, I believe that both of these terms
				may have been influenced by my dad&apos;s violence toward my mother. As
				a result of my post-term birth, plus the intense and volatile dynamic
				into which I was born, I developed early cognition. My dad used to joke
				that when I was born, I read the label on the side of the machines to
				the doctor: &quot;Made in Tay-wan.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				I do not recall that, and I doubt its veracity. What I do recall,
				however - one of my earliest memories - is the image of my dad violently
				trapping my mother, who was pregnant with my brother. He did this by
				slamming the door shut on her arm. He does not seem to like it when
				people exercise the power to leave on their own terms.
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				The Father.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				As a kid, I always wanted to be like him.
			</p>
			<p className={`paragraph width-full block left-align`}>
				He was a large, tall man who projected what I believed to be confidence.
				He had been in the Army, and claims to have set records during training.
				In the field of sport, he excelled in basketball - legend said that he
				could do any dunk you&apos;d seen on TV. No woman dared be
				&quot;unpleasant&quot; in his vicinity - he&apos;d let them know. And he
				was <em>having</em> his Big Gulp (styrofoam or plastic cup to be later
				cast aside as litter). Nobody was going to take Big away from him. He
				was going to have his Jeep or his truck, and his Big Gulp, and his Big
				Mac, and all that. He just wasn&apos;t going to work for it. Or put it
				to use for anyone - certainly not the family and community surrounding
				and enabling him.
			</p>

			<p className={`paragraph width-full block left-align`}>
				Fond was he of retelling story of Marvin Gaye and his father - Marvin,
				Sr., who shot and killed Marvin with the gun Marvin had purchased for
				his father. This seems to have been my dad&apos;s favorite way to
				re-skin &quot;I brought you into this world, and I can take you
				out.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				He seems to thrive when others around him are making headway, but not so
				much that it casts suspicion or guilt onto him. You have to do{' '}
				<em>just</em> enough to keep him happy, but not so much that he feels
				like he has to do something. As such, I knew that I was doomed when he
				did a load of laundry three days ago. Yikes.
			</p>
			<p className={`paragraph width-full block left-align`}>
				His back injury should have healed with any physical therapy effort
				within weeks, but he managed - through persistence and laziness - to
				scam{' '}
				<Link
					className={`no-deco spaced lowercase`}
					href="./glossary/the_system"
				>
					The System
				</Link>
				, despite clear and warranted skepticism from all around. He secured his
				assistance, and proceeded to lie down in comfort for the next 40 years,
				using his disability status to garner sympathy. I say this not as a
				competition, but as a point of reference - I am not judging him
				baselessly. I have had a back injury of my own. I slipped a disc. He
				fractured a spinal process. That is one of the little hook things on the
				back of a vertebra. This is a serious injury, no doubt, but the slipped
				disc tends to be more &quot;debilitating&quot; (according to AI), with
				the spinal process injury he suffered generally being more readily
				treatable. It took me 3 or 4 months to get back into movement shape,
				following my injury.
			</p>
			<p className={`paragraph width-full block left-align`}>
				He&apos;s a gambler, too - poker and blackjack. SSI, disability, the
				last few dollars of each month (which would otherwise have added up to a
				number of stable months for the family)? Blackjack got that.
			</p>
			<p className={`paragraph width-full block left-align`}>
				He swears he knows what he&apos;s doing. But here&apos;s the deal. When
				I was sixteen, he began to understand how strong my math brain was. He
				saw an opportunity.
			</p>

			<p className={`paragraph width-full block left-align`}>
				Under guise of bonding, he began to teach me blackjack, and to nudge me
				toward card counting. His real intent, it seems, was to train me as his
				casino dog. Except that his counting system was basic. I told him so,
				and offered improvements - at the time, I was able to predict the next
				card, down to suit, with something like 25% accuracy - higher if we
				count situations where I had predicted, say, a two of clubs, and
				received a two of spades. Alas, my system was &quot;too complicated for
				anybody to use&quot; (it was counting by ones and twos). So we agreed to
				use only his, and never to speak of mine again. I quickly lost my
				interest in gambling. He also lost my interest gambling.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I do not remember one holiday without a C____ tantrum. One Thanksgiving
				in Tennessee, he forced himself out of the passenger seat, and walked
				down the road screaming about the method of turkey thawing my mom had
				proposed.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Further, he would make this big show of &quot;leaving&quot; the family,
				walking away, knowing that we three brothers would cry and cry and guilt
				our mom into taking him back.
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				The Mother.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Not only was I regularly threatened by my father, but my mother as well
				- she was more comfortable with physical violence toward children. My
				dad would cry when he would spank us, sobbing, &quot;this hurts me more
				than it does you!&quot; (<em>sure</em>). Her favorite pastime until I
				outsized her was to snatch me up by my head and neck, twist her face up
				into a mangled mess of facial features, and call me a
				&quot;psycho&quot;.
			</p>
			<p className={`paragraph width-full block left-align`}>
				It doesn&apos;t stop there. Following my labeling as a
				&quot;psycho&quot;, she enjoyed threatening to send me to a doctor, to
				have them give me shots which would make me &quot;normal.&quot;
			</p>
			<p className={`paragraph width-full block left-align`}>
				When we were alone with her, she seemed beyond pleased to light into our
				dad&apos;s reputation and character - not telling us anything he
				might&apos;ve done, just insulting him.
			</p>
			<p className={`paragraph width-full block left-align`}>
				She tried to run him over with us in the car, sought to recruit us in
				keeping him locked outside in the cold, and so much more.
			</p>
			<p className={`paragraph width-full block left-align`}>
				She has been out of my life for a long time, now, and I do not think of
				her often. I do not know whose fault my parents&apos; behavior was. My
				dad was bad to her, and she was bad to him. Both were bad to me. That is
				what I know, and what I remember.
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				The Brothers.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				We three peas go together like peanut butter and macaroni.
			</p>
			<p className={`paragraph width-full block left-align`}>
				One seems to be lost - torn between a drive to self-define, a desire to
				be like a paternal influence, and a need to assert this complex
				identity. He wants to follow in footsteps, though does not seem aware of
				where that path may lead. He is the clear parental favorite, and always
				has been - with one caveat: when my dad would leave us and return, he
				would <em>tell</em> me that I was his favorite. The other is quiet,
				withdrawn. Through decades of experiencing awful treatment at my hand
				(downstream of my mom treating me poorly), he has arrived at a position
				that it may be better to self-isolate than to experience pain again. Can
				you blame them?
			</p>

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				The Self.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Confidence looks different to me today than it did back then.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am selfish and vile - an unlikable &quot;dick&quot; who never does
				anything for anyone. A real psycho.
			</p>
			<p className={`paragraph width-full block left-align`}>- or -</p>
			<p className={`paragraph width-full block left-align`}>
				I am a passionate and deeply principled autodidact, whose goal is to
				catalyze the healing of the land and its people for as near to free as I
				am able. Preferably with as little notoriety as possible.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I am not without my flaws. I have punched a couple of holes in the
				drywall, and I have called people the &quot;r&quot; word. What&apos;s
				worse - when I was young, I would repeat the cycles put onto me by my
				parents, by echoing them onto my younger and smaller brothers.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Still, for much of my life, I have provided free value to all around me,
				deliberately doing so in the shadows. Consider these swamp restoration
				efforts. A friend healed herself from addiction while in my company.
				Thanks to what&apos;s going on, I have to start doing my work in the
				open - so that misinformed individuals may never again throw in my face
				my current place. I have given up a lot of life, and a ton of energy to
				an effort which has only received me insults and violence.
			</p>

			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What Was.
			</h2>

			<p className={`paragraph width-full block left-align`}>
				Upon recognizing my parents&apos; financial donutry for what it was,
				Eight-Year-Old-Me made a request - no more birthday or Christmas gifts
				for me; just money. Do you suppose that I made this request in jest? Or
				was it greed? My parents told me that it was ingratitude.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I call it &quot;pragmatism.&quot; I understood that these parents were
				not that. Still, my brothers deserved a parent, and I deserved
				stability. This sentiment informed my drive to receive only money. I
				knew that I could stockpile it, and provide it to my parents as a loan.
				My dad taught me that interest existed, and I took it from there. I was
				not interested in interest, but he didn&apos;t care that I didn&apos;t
				care. He was going to tell me that it existed.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I would later figure out, on my own, how interest <em>works</em>.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Knowing about interest did not protect me. We still got evicted - though
				less so. We still lived in tents. And I was still naive enough to let my
				dad pull the refund on my student loans - he <em>promised</em> to pay it
				back.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Never happened. Go look up &quot;indentured servitude,&quot; if you
				aren&apos;t familiar. The statute of limitations on a defaulted private
				student loan in Michigan is 6 <em>years</em>. This means that for six
				years, any owner of my debt could have taken civil action against me.
				What&apos;s worse - this happened before the age of AI. I thought the
				statute was <em>ten</em> years, and lived as such.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I was forced, paralyzed in panic with no guidance or support, to live as
				a <em>ghost</em> - a shell.
			</p>
			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What&apos;s Current.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				I am sitting in a McDonald&apos;s. During each of the last two nights, I
				have slept wrapped up in a shit coccoon on the lattice porch of a
				stranger. He saw me walking, and offered me porch shelter in exchange
				for a trip to the store.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I have red marks on my neck from where my dad tried (and failed) to
				choke me. My muscles are sore from walking endlessly, and from absorbing
				the force of my brother&apos;s blocked haymaker attempts.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I feel electric. It is sunny out, and although tonight is going to be
				freezing, today&apos;s weather is gorgeous.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Earlier, though? I thought it would all end.
			</p>
			{/* */}

			<h2
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				What&apos;s Coming.
			</h2>
			<p className={`paragraph width-full block left-align`}>
				If the last decade was my ghost era, and things aren&apos;t ending, that
				makes this one my phoenix era. Home or no home. Belongings or no
				belongings. We are rising, and we are shining.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I have a vision - collective stewardship of the land. I believe that I
				can still build a community for the broken and the healing and the
				Others. I don&apos;t think that I can save the world, but I think I can
				teach a lot of people that the world doesn&apos;t have to be{' '}
				<em>like this</em>.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Burn bright, and burn long, beautiful phoenix.
			</p>
		</main>
	);
}
