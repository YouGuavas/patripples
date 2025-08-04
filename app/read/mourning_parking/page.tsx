import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ByLine from '@/app/components/ByLine';
import moan from '../../../public/universal/moonlit.png';
import crow from '../../../public/universal/crowfollow.png';

export const metadata: Metadata = {
    title: 'Patripples | Treading With Care',
    description:
        'Learn how to calculate chaos with Patripples as I describe how to walk in nature. Described by Patrick Yambrick.',
};
export default function Home() {
    return (
        <main className={`main center`}>
            <h1
                className={`lowercase style-1 thin spaced left width-full block left-align`}
            >
                Mourning Parking.
            </h1>
            <ByLine date={'Mon, Aug 4, 2025'} />
            <section>
            <h2
                className={`lowercase style-1 thin spaced left width-full block left-align`}
            >
                how to bring a friend.
            </h2>
            <p className={`paragraph width-full block left-align`}>
                I have been rehabilitating a local set of swamps and false{' '}
                <Link
                    className={`spaced no-deco lowercase`}
                    href="/read/glossary/vernal_pool"
                >
                    vernal pools
                </Link>{' '}
                using found materials and holistic land remediation methods for the
                better part of this spring. This has been an incredibly rewarding and
                fruitful experience, from which I have drawn a great deal of personal
                worth. I have encountered inspiring eagles; wise, old owls; chatty
                crows; intrepid mink; and even a couple clever chickadees.
            </p>
            <p className={`paragraph width-full block left-align`}>
                Today, I was lucky to bring a (human) friend along on my trek - a first.
                It went well, and once he came to understand the scope of both the
                damage and the triage at play, his enthusiasm grew to rival my own.
            </p>
            <Image
                id="crow"
                alt={`A crow through the trees.`}
                height={333}
                width={250}
                src={crow.src}
            />
            <p className={`paragraph width-full block`}>
                This is a crow. This is not my (human) friend.
            </p>
            <p className={`paragraph width-full block left-align`}>
                Each of these encounters has enriched and rewarded me in ways I struggle
                to describe. Whether in a religious sense, or in a personal,
                mythological, spiritual one, I have been blessed. For that, I am
                grateful.
            </p>
            </section>
            
        </main>
    );
}
