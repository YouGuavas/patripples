'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import routes from '../routes';
import { useTheme } from '@/app/theme/useTheme';
import ripples from '../../public/logos/ripples.png';
import clsx from 'clsx';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
	const pathName = usePathname();
	const isActive = pathName === href;
	const { theme } = useTheme();
	return (
		<Link
			scroll={false}
			href={href}
			id={pathName.toLowerCase()}
			className={clsx(
				`style-1 lowercase spaced thin no-deco darken ${theme}`,
				isActive ? 'darken color-2' : 'color-2'
			)}
		>
			{children}
		</Link>
	);
}

export default function Nav() {
	return (
		<nav
			className={`${styles.myNavFull} py-1 px-1 bg-4 left flex fixed`}
			id="menu-full"
		>
			<ul className={`flex no-deco`}>
				<li>
					<Link className="darken" href="/">
						<div className={`icon-container`}>
							<Image src={ripples.src} fill alt="Ripple logo" />
						</div>
					</Link>
				</li>
				{routes.map(({ name, path, image }) => (
					<li key={path}>
						<NavLink href={path}>
							<div className={`icon-container`}>
								<Image src={image.src} fill alt={`${name}`} />
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
