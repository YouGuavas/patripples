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
				Like something you see here?{' '}
				<Link
					className={`spaced thin no-deco`}
					href={`mailto:patrickyambrick@gmail.com`}
				>
					Email
				</Link>{' '}
				Patrick -{' '}
				<Link
					className={`spaced thin no-deco`}
					href={`https://cash.app/$patripples/`}
				>
					Cashapp
				</Link>{' '}
				Patrick -{' '}
				<Link className={`spaced thin no-deco`} href={`./hire`}>
					Hire
				</Link>{' '}
				Patrick
			</p>
		</header>
	);
}
