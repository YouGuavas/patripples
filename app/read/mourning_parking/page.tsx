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
                a lot scene.
            </h2>
            <p className={`paragraph width-full block left-align`}>
                &quot;Woo!&quot;
                she cheered to her mirror.
                
            </p>
            <p className={`paragraph width-full block left-align`}>
                She&apos;d finally done it! In her fifteen years of gleeful glazing at the grocery, she&apos;d often arrived early.
            </p>
            <p className={`paragraph width-full block left-align`}>
                But she&apos;d never been there before four, before.
            </p>
            <Image
                id="crow"
                alt={`A crow through the trees.`}
                height={333}
                width={250}
                src={crow.src}
            />
            
            </section>
            
        </main>
    );
}
