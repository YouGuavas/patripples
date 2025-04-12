import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Bird Note',
	description: 'Observed bird behaviors',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Note About Grackle Mimicry</h1>
			<p className={`paragraph left-align`}>Note needed.</p>
			<p className={`paragraph left-align`}>
				Google it. Or have chatgpt explain what Google is telling you (which
				your ancestors already knew - it just needed &quot;refinement&quot;).
			</p>
			<p className={`paragraph left-align`}>
				Crows, too, if you need to do that. They&apos;re like sonic geniuses
				within their domains. That means that, between the network of them, they
				can do just about any sounds nature can do. And some that we do, too.
				Like a computer. Or like anything else.
			</p>
		</main>
	);
}
