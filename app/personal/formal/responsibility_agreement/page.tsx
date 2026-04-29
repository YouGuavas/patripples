import Link from 'next/link';
import Image from 'next/image';

import stray_dog_ai from '@/public/land/stray_dog_ai.png';
import bramble01 from '@/public/land/bramble01.png';
import bramble02 from '@/public/land/bramble02.png';
import roof01 from '@/public/land/roof01.png';
import roof02 from '@/public/land/roof02.png';
import camper from '@/public/land/camper.png';
import skis from '@/public/land/skis.png';

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
		<main className={`main left px-1 center`}>
			<h1 className={`lowercase style-1`}>
				Land Management Responsibility Agreement.
			</h1>
			<p className={`paragraph left-align`}>
				Land management is a big responsibility, especially in the context of
				such an important, central piece of land to my lifelong hometown, which
				also represents a fifteen (!!) year time commitment on your end. I want
				to make sure that we are on the same page about what that responsibility
				entails, and that we have a clear agreement about how to share that
				responsibility in a way that is fair and sustainable for both of us. I
				also want to make sure that we have a clear agreement about how to share
				the benefits of that responsibility in a way that is fair and promotes
				involvement in the care and upkeep necessitated by a property such as
				yours.
			</p>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>Responsibilities.</h2>
				<p className={`paragraph left-align`}>
					As follows are what I view to be the most pressing responsibilities
					currently sitting in neglect. I have assessed these as a second
					generation landscaper - my surname implies a lineage of land managers
					and knights/stewards of land. Beyond intuition, I have done some
					research online, and have a long personal history of understanding
					land via my time spent handling technical and logistics for my friend
					in Australian real estate.
				</p>
				<p className={`paragraph left-align`}>
					Prioritization adheres to the following convention: reduce biggest
					liability (things that could rob you of your land by surprise), then
					add value. In game theory, this is called a &quot;minmax&quot;
					strategy - minimizing losses while maximizing gains. In the real
					world, minmax strategies often represent the strongest pathways not
					only to survival, but to success and thriving after survival. In the
					spirit of that, I offer you this:
				</p>
				<div className="left-align width-half centered flex column">
					<ol className="flex column gap-medium">
						<li>
							<em>Clear Stray Dog Bramble</em>
						</li>

						<ul className="no-deco flex column gap-small">
							<li>
								This bramble has been left to grow for some time.{' '}
								<Image
									height={250}
									width={500}
									src={bramble01}
									alt="Stray Dog Bramble"
								/>
							</li>

							<li>
								It is fostering stray dog pack behavior (not pictured - but
								Soulo and that female husky were nesting up in here, and I
								recently saw your across the street neighbor&apos;s dog running
								around off leash as well - a third dog would make the pack
								difficult to manage).
								<Image
									height={250}
									width={500}
									src={bramble02}
									alt="Stray Dog Bramble"
								/>
							</li>

							<li>
								Stray dog packs emanating from your yard are your liability and
								can result in lawsuits and judgements against you, triggering
								major financial cascades.
								<Image
									height={250}
									width={500}
									src={stray_dog_ai}
									alt="Stray Dog AI"
								/>
							</li>
						</ul>
						<li>
							<em>Patch Roof Holes</em>
						</li>
						<ul className="no-deco flex column gap-small">
							<li>
								These holes in your shingling have been left in neglect for the
								entirety of my stay, despite your paying for all required
								materials, and the repairs being relatively straightforward.
								<Image
									height={450}
									width={500}
									src={roof01}
									alt="Shingle Gap"
								/>
							</li>
							<li>
								This can lead to property degradation which makes using the
								structures unsafe and selling the property much more difficult.
								<Image
									height={450}
									width={500}
									src={roof02}
									alt="Shingle Gap"
								/>
							</li>
						</ul>
						<li>
							<em>Get Depreciating Assets in Neglect Sold</em>
						</li>
						<ul className="no-deco flex column gap-medium">
							<li>
								Your Mitsubishi, Jet Skis, and camper all represent depreciating
								assets. That means that every second of ownership costs you
								money. When left to sit outside, the rate at which this occurs
								is generally at least doubled or tripled, and sometimes it is
								even more pronounced.
								<Image
									height={450}
									width={500}
									src={skis}
									alt="Decaying Jet Skis"
								/>
							</li>
							<li>
								The camper, on its current, temporary cribbing, and in its
								precarious location, renders both it and your garage
								liabilities. They are unsafe. The camper threatens to tip with
								every strong gust of wind. Needless to say, this also leaves
								that playground space unsafe and unusable for children.
								<Image
									height={450}
									width={500}
									src={camper}
									alt="Decaying Camper"
								/>
							</li>
						</ul>
					</ol>
				</div>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>My Value Adds.</h2>
				<p className={`paragraph left-align`}>
					I have added significant value to your family and your property,
					whether or not I have been credited.
				</p>

				<div className="left-align width-half centered flex column">
					<ol className="flex column gap-medium">
						<li>
							Cam&apos;s GED - I have a conversational tutoring method which
							makes people feel like they &quot;learned it without
							studying&quot; (just ask my coworker!). Cam benefitted heavily
							from this style in the lead-up to his GED, taking some 10-15
							sessions with me.
						</li>
						<li>Multiple battery repairs to various vehicles</li>

						<li>Mitsubishi work (solved inconsistent starting issue)</li>
						<li>
							Developed proprietary method for low-cost, low-maintenance,
							high-yield gardening (under threat)
						</li>
						<li>
							Developed eco-engineered stopgap solutions to deck erosion threat
							(since partially destroyed)
						</li>
						<li>
							Emotional labor - you and Cam have both confided things in me
							which I must now keep to myself or risk upsetting the other party.
							You would have had to pay a therapist with similar capacities to
							me something like $75-100/hr for this. In such a contentious space
							as this, the functional &quot;rate&quot; doubles, especially
							considering that there have been threats levied at me.
						</li>
					</ol>
				</div>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>Incentives.</h2>
				<div className="left-align width-half centered flex column">
					<p className={`paragraph left`}>TBD.</p>
				</div>
				<h3 className={`lowercase style-1`}>(Preferred Suggestions.)</h3>
				<p className={`paragraph left-align`}>
					I do not want to force any terms onto anybody. I also do not want to
					leave the entire burden of decision on you. In the name of that, here
					are some incentive suggestions (we can negotiate and decide on a few
					that make sense):
				</p>
				<div className="left-align width-half centered flex column">
					<ol className="flex column gap-medium">
						<li>Fair Pay</li>
						<li>A Vesting Stake Toward Ownership</li>

						<li>Tangle Tree (scraggly one that I saved up front) Stays</li>
						<li>Garden Control/Access</li>
						<li>
							Eco-engineered solutions are protected while I document results.
						</li>
					</ol>
				</div>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>Intentions.</h2>
				<p className={`paragraph left-align`}>
					It strikes me that my intentions have been assumed, misunderstood, or
					otherwise altered and held as true without my consultation. Speaking
					to that, here are my intentions.
				</p>
				<p className={`paragraph left-align`}>
					Genesee is my lifelong hometown.
				</p>
				<p className={`paragraph left-align`}>
					It was here that I found community and peace for the first time,
					having been ostracized in my youth for my overweight status and low
					emotivity. I was called a robot. At Genesee, I was accepted and looked
					up to as a high-achieving, intellectual and moral guiding force, and
					protector from negative outside energy.
				</p>
				<p className={`paragraph left-align`}>
					My father and my brother usurped me. They stole my hard-earned
					reputation and used it to functionally brainwash a number of young men
					in the area against me and my holistic, intentional way of living -
					painting themselves as the talent in the family, and gaining almost
					cult-like loyalty as a result.
				</p>
				<p className={`paragraph left-align`}>
					These both being true, I view Genesee as a place which represents
					family to me better than my family does.
				</p>
				<p className={`paragraph left-align`}>
					I hope to bring commerce and economic activity to Genesee via my work
					and my community building prowess.
				</p>
				<p className={`paragraph left-align`}>
					Your property represents a central piece of land in my home. It also
					represents an optimal starting location for a low-stress, high-impact
					homesteading and maker business.
				</p>
				<p className={`paragraph left-align`}>
					Following the current management strategy, your property is a nuisance
					to your neighbors, via the stray dog bramble, and via the rampant
					generation of buckthorn and multiflora rose (not discussed here, but
					prevalent out back), which alter the local hydrology and create
					downstream issues for your neighbors.
				</p>
				<p className={`paragraph left-align`}>
					Under my plan, your legacy would shift. Using the land as a base for a
					business, I would guarantee your option to peacefully retire right
					here. You would only have to leave if it suited you. I envision you
					and I splitting proceeds from the business, which I am confident I can
					drive with my world-class tech, branding, and ecommerce skills, plus
					my virtually unheard of 92% conversion/sales closing rate.
				</p>
				<p className={`paragraph left-align`}>
					I would use this business to plant a flag for the future of the town.
					I would use its digital success to convince those small businesses in
					town who are skeptical of marketers, but in need of marketing and
					digital boosts. I would use the business itself to generate employment
					- I can easily envision paying 2-3 people (in my model, distressed
					women looking to turn their lives around, though this could represent
					anybody willing to do the work) to help with the gardening,
					processing, baking, and inventorying processes, with potential for
					more employment as things roll.
				</p>
				<p className={`paragraph left-align`}>
					Down the line, I would open the space up to small-to-medium scale
					agritourism - in alignment with Genesee&apos;s high-tourism identity
					via Crossroads, Iron Belle, and Frankenmuth thru traffic - giving
					folks walkthroughs and demonstrating various ecological, maker, and
					other high-interest principles relevant to the property and imagined
					business.
				</p>
				<p className={`paragraph left-align`}>
					Through all of this, I would preserve your structures, baking the
					patchwork nature of your house and the clearly once-lively energy of
					the deck and pool area as keystones for storytelling, marketing, and
					any future alterations.
				</p>
				<p className={`paragraph left-align`}>
					Some of this assumes ownership. I don&apos;t want to do that - only to
					paint a picture of what I have in mind. I am hopeful that there is
					someone in your family with whom this vision aligns.
				</p>
				<p className={`paragraph left-align`}>
					Shy of ownership, I would love to collaborate directly with you as a
					business partner toward these aims, if they strike you as amenable.
				</p>
				<p className={`paragraph left-align`}>Let me know.</p>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>Food For Thought.</h2>
				<div className="flex column gap-medium center">
					<h3 className={`lowercase style-1`}>&quot;Get Me Out.&quot;</h3>

					<div className="width-half centered flex row gap-large">
						<Link
							className="style-1 no-deco color-1"
							href="https://www.nar.realtor/seller-financing"
						>
							Seller Financing
						</Link>
						<Link
							className="style-1 no-deco color-2"
							href="https://www.rocketmortgage.com/learn/land-contract"
						>
							Land Contracts
						</Link>
						<Link
							className="style-1 no-deco color-1"
							href="https://www.sofi.com/learn/content/how-does-lease-to-own-work/"
						>
							Lease to Own
						</Link>
					</div>
					<h3 className={`lowercase style-1`}>
						&quot;I&apos;m Curious. I think I&apos;ll Stick Around.&quot;
					</h3>
					<div className="width-half centered flex row gap-large">
						<Link
							className="style-1 no-deco color-2"
							href="https://www.nar.realtor/seller-financing"
						>
							Permaculture Gardening
						</Link>
						<Link
							className="style-1 no-deco color-1"
							href="https://landlimited.com/blogs/10-factors-that-influence-land-appreciation"
						>
							Land Appreciation
						</Link>
						<Link
							className="style-1 no-deco color-2"
							href="https://www.mtu.edu/cege/undergraduate/ecological/what-is/"
						>
							Ecoengineering
						</Link>
					</div>
					<iframe
						width="500"
						height="315"
						src="https://www.youtube.com/embed/YRSn-DZTGa4?si=QEs1R0LmVy0BbQpR"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
					<h3 className={`lowercase style-1`}>
						&quot;Why Are You Still Here?&quot;
					</h3>
					<div className="width-half centered flex row gap-large">
						<Link
							className="style-1 no-deco color-1"
							href="https://michiganlegalhelp.org/resources/housing/eviction-what-it-and-how-does-it-start"
						>
							Eviction
						</Link>
					</div>
				</div>
			</section>
			<section className={`width-full center`}>
				<h2 className={`lowercase style-1`}>The Idea.</h2>

				<p className={`paragraph left-align`}>
					I am requesting a more formal agreement regarding any land management
					you need done.
				</p>
				<p className={`paragraph left-align`}>
					I am presenting it in such a way as paints a picture of both the why
					and the future what.
				</p>
				<p className={`paragraph left-align`}>
					I am doing this in the hope of securing a land management agreement
					with you which lends me operational control over your land for the
					sake of improving my lifelong hometown, which I hope to save. It is a
					prime spot for an AI data center, and I want to see it be anything but
					that. Like it or loathe it, Genesee has character.
				</p>
				<p className={`paragraph left-align`}>
					If you are looking for a clean exit, then the option to sell always
					exists, and I am always interested.
				</p>
				<p className={`paragraph left-align`}>
					For now, I am just asking for this agreement - I get to solve most of
					your problems. In exchange, I get to start a low-overhead, high-return
					business and use that to pay for your retirement, plus my future
					community building goals.
				</p>
				<p className={`paragraph left-align`}>
					Let me know if you are curious, and I will get you additional data,
					visualizations, or a contract suited to your degree of interest.
				</p>
			</section>
		</main>
	);
}
