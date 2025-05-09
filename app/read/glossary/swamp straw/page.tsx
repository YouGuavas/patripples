import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Swamp Straw',
	description:
		'Learn about Swamp Straw and the ecosystems they support with Patripples.',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Swamp Straw</h1>
			<p className={`paragraph`}>
				A swamp straw is what I call a fallen branch, used as a wick and
				primitive filter. Ideally, this branch will be one which is primed for
				colonization by polypore, for their toxin-filtering capabilities.
			</p>
		</main>
	);
}
