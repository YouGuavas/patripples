'use client';

import Link from 'next/link';
import Image from 'next/image';

import routes from '../routes';
import clsx from 'clsx';

export default function Nav() {
	return (
		<header
			className={`width-full top py-1 left flex z10 center`}
			id="menu-full"
		>
			<p>
				Like what I&apos;m doing? Tip me on{' '}
				<Link
					className={`spaced thin no-deco`}
					href={`https://cash.app/$patripples/`}
				>
					Cashapp
				</Link>
				.
			</p>
		</header>
	);
}
