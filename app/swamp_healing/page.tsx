import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Swamp Grant Proposal | Patripples',
	description:
		'A request for grant funding to bolster ecological remediation and education efforts. Proposed by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center height-full flex column`}>
			<h1 className={`style-1 thin`}>
				Swamp as Signal: Community-Driven Restoration, Visualization, and
				Climate Buffering through Localized Ecological Intervention
			</h1>
			<p className={`paragraph width-full block left-align`}>
				Lead Steward:{' '}
				<Link className={`no-deco`} href="https://patdesigns.online/">
					Patrick Yambrick
				</Link>
				— independent researcher, ecosystem restorer, and field-based ecological
				systems analyst
			</p>
			<h2 className={`style-1 lowercase width-full left-align thin`}>
				Overview:
			</h2>
			<p className={`paragraph width-full block left-align`}>
				This project restores neglected wetlands and swampy habitats, especially
				those compromised by human waste, erosion, and artificial pooling. Using
				natural methods—including branch wicking, sunlight exposure, strategic
				airflow modulation, and debris repositioning—I accelerate ecological
				recovery while reducing mosquito populations, methane emissions, and
				microclimatic instability.
			</p>
			<p className={`paragraph width-full block left-align`}>
				I document my interventions through{' '}
				<Link
					className="no-deco lowercase spaced"
					href={`https://www.youtube.com/@bezoox3`}
				>
					video
				</Link>
				,{' '}
				<Link className="no-deco lowercase spaced" href={`../count`}>
					data collection
				</Link>
				,{' '}
				<Link className="no-deco lowercase spaced" href={`../read`}>
					storytelling
				</Link>
				, and{' '}
				<Link className="no-deco lowercase spaced" href={`../see`}>
					intuitive visualization
				</Link>{' '}
				tools (e.g., SVG maps with layered ecological data). My end goal is to
				offer a replicable model of grassroots ecological repair that is
				scalable and teachable.
			</p>
			<h2 className={`style-1 lowercase width-full left-align thin`}>
				Current Achievements (First 4 weeks):
			</h2>

			<ul className="no-deco left-align width-full flex column gap-small">
				<li>
					Cleared blockages in 2 stagnant swamp zones, reviving natural drainage
					and evaporation.
				</li>
				<li>
					Created frog and bird habitat, confirmed return of native wildlife
					(robins, blue jays, frogs).
				</li>
				<li>
					Removed waste (tires, glass, plastic) and repurposed objects to reduce
					swamp overcapacity.
				</li>
				<li>
					Educated local park staff on evapotranspiration and bioclimatic
					feedback loops.
				</li>
				<li>
					Captured methane release events (“sand farts”) and built digital
					records for public science.
				</li>
				<li>
					Laid groundwork for an open-source visual tool that maps the ripple
					effect of interventions.
				</li>
			</ul>
			<h2 className={`style-1 lowercase width-full left-align thin`}>
				Ways to Support:
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Would you like to contribute to this effort non-financially? Here&apos;s
				how.
			</p>
			<ul className="no-deco left-align width-full flex column gap-small">
				<li>
					<strong>Signage</strong> - I have no way of letting people know that a
					passive restoration is taking place.
				</li>
				<li>
					<strong>Guidance</strong> - I am new to navigating the institutional
					side of things, and I would appreciate any <em>wisdom</em> here.
				</li>
				<li>
					<strong>Permission</strong> - While I am a self-starter, I need to
					feel comfortable being on the land - I don&apos;t want to trespass or
					step on toes. I work intuitively and responsively with the land.
					Sometimes I&apos;m even guided by local crows—who tend to congregate
					near recently disturbed or unbalanced areas. While anecdotal, these
					observations often lead me toward sites with ecological stress. I have
					a drone that I would like to use for documentation purposes, and want
					to be respectful with that.
				</li>
				<li>
					<strong>Collaboration</strong> - While I am happy to go it alone, I
					welcome helpful company.
				</li>
			</ul>
			<h2 className={`style-1 lowercase width-full left-align thin`}>
				How Any Funding Would Be Spent:
			</h2>
			<ul className="no-deco left-align width-full flex column gap-small">
				<li>
					Equipment for safe waste removal (gloves, masks, carts, containers,
					waders or waterproof footwear).
				</li>
				<li>
					Visual tool development (React + SVG/D3-based interactive ecosystem
					explorer).
				</li>
				<li>
					Handheld camera for spatial documentation and storytelling.
					(Initially:{' '}
					<Link href="https://www.amazon.com/GoPro-HERO12-Hero-Black-Stabilization/dp/B0CHZ5WBTH">
						GoPro Hero 12 - waterproof
					</Link>
					)
				</li>

				<li>
					Purchase of air, soil, and water sensors - I would love to DIY this
					and record the process for educational tools; or commercial-grade if
					preferable - to track impact.
				</li>
				<li>
					Public education materials - I have a number of ideas for digital
					content, and can envision live work as well - I have a group around me
					who would love to learn about this - some are local elementary
					teachers or engaged in other positions of mentorship for children;
					parents looking for shared purpose.
				</li>
			</ul>

			<h2 className={`style-1 lowercase width-full left-align thin`}>
				Impact Potential:
			</h2>
			<ul className="no-deco left-align width-full flex column gap-small">
				<li>
					Ecological: Reduces methane emissions, improves microclimate
					stability, reactivates natural evapotranspiration and habitat cycles.
				</li>
				<li>
					Social: Reduces disease vectors, public nuisance areas, and urban
					neglect; supports community re-engagement with land.
				</li>
				<li>
					Economic: Low-cost, high-leverage interventions; could offset
					municipal stormwater burdens and long-term road infrastructure wear.
				</li>
				<li>
					Educational: Offers a compelling hands-on model for young ecologists,
					urban planners, and environmental science storytellers.
				</li>
			</ul>
			<h2 className={`style-1 lowercase width-full left-align thin`}>
				Looking Forward:
			</h2>
			<p className={`paragraph width-full block left-align`}>
				Your support will allow me to scale what&apos;s already working — while
				capturing and translating the process into visual, open tools that help
				others understand their own potential ripple effect. I intend to model
				swamp stewardship not as a clean-up job, but as civic science with
				planetary impact.
			</p>
		</main>
	);
}
