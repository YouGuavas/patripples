import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Axonal Pruning',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Axonal pruning</h1>
			<p className={`paragraph`}>
				Axonal pruning is a neurological process in which the brain prunes - or
				trims - the number of axons (which typically function as
				&quot;sender&quot; neurons). Sort of like a gardener removing weeds so
				that their preferred flowers may bloom.
			</p>
		</main>
	);
}
