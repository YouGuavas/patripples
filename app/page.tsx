import Image from 'next/image';
import ripples from '../public/logos/ripples.png';
import EmailForm from './components/EmailForm';

import type { Metadata } from 'next';
import { SpaceProviderWrapper } from './ThemeProviderWrapper';
export const metadata: Metadata = {
	title: 'Patripples | Home',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<SpaceProviderWrapper>
			<main className={`main center`}>
				<Image src={ripples.src} height={25} width={25} alt="Ripple logo" />
				<h1 className={`lowercase spaced style-1 thin`}>
					Want to learn about Patripples?
				</h1>
				<p>
					Patripples is a space dedicated to exploration, synthesis, and impact.
					It’s a hub for those who see the interconnectedness of ideas and want
					to push the boundaries of understanding. Whether you’re here for deep
					insights, practical applications, or a new way of looking at the
					world, you’re in the right place.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>What is Patripples?</h2>
				<p>
					Patripples is built on the idea that every action, every thought, and
					every discovery sends ripples through the world. These ripples can be
					small or grand, but they all matter. Here, we explore the sciences,
					philosophy, technology, and human potential with a keen eye for how
					they intersect. Our goal is to generate new insights, share knowledge,
					and inspire forward momentum.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>The Core Focus</h2>
				<p>
					Patterns and Systems Thinking – Understanding how things fit together,
					from mathematics to human behavior. Philosophy and Thought Experiments
					– Examining deep questions to refine our understanding of the
					universe. Technology and Innovation – Exploring the bleeding edge of
					science, AI, and digital transformation. Education and Synthesis –
					Translating complex ideas into accessible knowledge that fuels growth.
					Psychedelics and Perception – Investigating how altered states of
					consciousness enhance creativity and insight.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>Why This Matters</h2>
				<p>
					We live in a time where information is abundant but wisdom is scarce.
					Patripples aims to bridge that gap. By weaving together seemingly
					disparate fields, we can uncover fundamental truths and apply them in
					ways that push humanity forward. This isn’t just about ideas—it’s
					about action. Every ripple we create contributes to a larger wave of
					change.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>
					What You’ll Find Here
				</h2>{' '}
				<ul className={`no-deco`}>
					<li>
						Essays & Articles – Deep dives into concepts that shape our world.
					</li>
					<li>
						Visual Explorations – Mathematical and conceptual visualizations
						that make abstract ideas tangible.
					</li>{' '}
					<li>
						Experiments & Projects – Hands-on applications of the theories
						discussed.
					</li>{' '}
					<li>
						Community & Discussion – A space for those who want to engage in
						meaningful conversations.
					</li>
				</ul>{' '}
				<h2 className={`lowercase spaced style-1 thin`}>
					Join the Exploration
				</h2>{' '}
				<p>
					Patripples is an evolving entity, shaped by curiosity and discovery.
					If you’re someone who thrives on pushing boundaries and seeking deeper
					understanding, this is your space. Subscribe, engage, and contribute
					your own ripples to the conversation. Stay Connected Follow along on
					social platforms, subscribe for updates, and feel free to reach out
					with ideas or collaborations. The journey is just beginning.
				</p>
				<p>
					Oh, and if you haven&apos;t already, please consider adding yourself
					to my mailing list for future updates:
				</p>
				<EmailForm />
			</main>
		</SpaceProviderWrapper>
	);
}
