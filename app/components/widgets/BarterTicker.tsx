import Link from 'next/link';
import Image from 'next/image';
import tiny_mushroom from '../../public/universal/tiny_mushroom.svg';

export default function BarterTicker() {
	return (
		<section className={`flex gap-large center column`}>
			<p className={`width-full left-align paragraph`}>
				Like these? Don&apos;t forget to check out the rest of my{' '}
				<Link className={`no-deco spaced thin lowercase`} href="./">
					Characters
				</Link>
				.
			</p>
			<p className={`width-full left-align paragraph`}>
				Low on funds, but have something delightful or transformative to swap
				for my spellwork? I get down to alchemy. I recently did{' '}
				<Link className={`spaced no-deco`} href="./emphatic_empaths">
					The Empaths&apos;
				</Link>{' '}
				page in trade for a tiny mushroom, plus some good company:
			</p>
			<div className="image-container">
				{' '}
				<Image
					src={tiny_mushroom.src}
					alt={'A tiny, 3D-printed mushroom.'}
					fill
				/>
			</div>
			<p className={`width-full left-align paragraph`}>
				What will we{' '}
				<Link href="../hire/barter/" className={`spaced no-deco lowercase`}>
					exchange
				</Link>
				?
			</p>
		</section>
	);
}
