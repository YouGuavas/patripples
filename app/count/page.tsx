import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';

export const metadata: Metadata = {
	title: 'Patripples | How to Count Change',
	description:
		'Learn how to count change with patripples. Calculated by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>how to count change.</h1>
			<p className={`paragraph width-full block left-align`}>
				There exist a number of ways in which to go about approximating the
				impact of any action taken upon a space. One might simply guess, or
				intuit. One might calculate the curvature of a set of small assumptions
				and extrapolate based off of what arises from there. This is my
				preferred method. Indeed, when all we have to work with are ranges and
				approximations, this is often the way, as we discover through the course
				of an intermediate mathematical education.
			</p>
			<p className={`paragraph width-full block left-align`}>
				The accuracy of the result of any calculation arrived at through a
				sequence of range-based approximations is probabilistically accurate
				with direct proportionality to the accuracy of the set of assumptions we
				took to arrive at our conclusion, with this caveat - the resultant
				probability decreases with each assumption. If I am 95% sure that I am
				right about some assumption I have made, that may seem fine. In many
				cases, it is. The danger lies in stacking assumptions. 95% can be
				represented decimally as 0.95 - 95 cents (or three quarters, two dimes,
				for those of us who learned how not to count on change).
			</p>
			<h2 className={`style-1 thin lowercase`}>What is .95x.95?</h2>
			<p className={`paragraph width-full block left-align`}>0.95 x 0.95 = ?</p>
			<p className={`paragraph width-full block left-align`}>95 x 95 = ?</p>
			<p className={`paragraph width-full block left-align`}>5 x 5 = 25</p>
			<p className={`paragraph width-full block left-align`}>
				5 x 90 = 450 (x2) = 900 (as I examine this, I notice that it would have
				been more efficient to have doubled the five from outset, but I pursue
				mathematics via spiral - 10 x 90; this line will remain here to
				demonstrate my self-revision process - 10 x 90 = 900)
			</p>
			<p className={`paragraph width-full block left-align`}>
				90 x 90 = 8100 (9 x 9 = 81; 10 x 10 = 100; 100 x 81 = 8100)
			</p>
			<p className={`paragraph width-full block left-align`}>95 x 95 = 9025</p>
			<p className={`paragraph width-full block left-align`}>
				0.95 x 0.95 = 0.9025
			</p>
			<p className={`paragraph width-full block left-align`}>
				Now that we&apos;ve made two assumptions in a row, each with a generous
				95% accuracy rate, we are probably around 90% right, by angular math.
			</p>
			<p className={`paragraph width-full block left-align`}>
				That pattern holds. 0.95^4 = 0.95 x 0.95 x 0.95 x 0.95 = 0.9025 x 0.9025
				= 0.81450625. Make note that a wily enough datamancer could make this
				look like that long decimal, or like 0.81, or - by some stretches of the
				imagination, <em>0.82</em>.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Does that matter?
			</p>
			<p className={`paragraph width-full block left-align`}>
				Yes, but I am putting a pin in it for now, with the intention of making
				a full post later about how approximation can be used both productively
				and - uhh - less than productively.
			</p>

			<p className={`paragraph width-full block left-align`}>
				Say that I&apos;ve got one tree. That tree is somewhere between zero and
				fifty years old. It is an oak tree (or an elm, or a willow, or a pine
				tree). We are in an urban (or a suburban or a rural) domain. This
				results in our tree&apos;s having some Base Trunk Width (BTW). We are
				going to make a set of assumptions which arrive us at our Base Trunk
				Width (BTW).
			</p>
			<p className={`paragraph width-full block left-align`}>
				To do: Expand on this, and on previously pinned concept; add
				explanations.
			</p>
		</main>
	);
}
