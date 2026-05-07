'use client';

import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { usePathname } from 'next/navigation';

import { useTheme } from '@/app/theme/useTheme';
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
				`style-1 lowercase spaced thin no-deco darken flex column gap-small ${theme}`,
				isActive ? 'active' : null,
			)}
		>
			{children}
		</Link>
	);
}

export default function Nav(props: {
	routes: { name: string; path: string; image: ImageProps }[];
}) {
	return (
		<nav
			className={`width-full bottom py-1 bg-4 left flex fixed z10 center`}
			id="menu-full"
		>
			<ul className={`flex no-deco gap-small px-1 width-full between`}>
				{props.routes.map(({ name, path, image }) => (
					<li key={path}>
						<NavLink href={path}>
							<div className={`nav-icon-container`}>
								<Image
									loading="lazy"
									fetchPriority="low"
									quality={50}
									height={40}
									width={40}
									src={image.src}
									alt={`${name}`}
								/>
							</div>
							<span className="center width-full style-1 color-2">{name}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
