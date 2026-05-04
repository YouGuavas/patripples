import Image from 'next/image';

import ripples from '@/public/logos/ripples.png';
import LoginButton from '@/app/components/auth/LoginButtons';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Patripples | Admin Login',
	description:
		'Patripples: a learning and web development hub by Patrick Yambrick. Based in Flint, Michigan, Patrick offers personalized websites and writing, together with relevant educational resources.',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<main className={`main left px-1`}>
			<section className={`width-full center margin-bottom-sm`}>
				<div className={`icon-container centered`}>
					<Image src={ripples.src} fill loading="eager" alt="Ripple logo" />
				</div>
				<h1 id="top" className={`lowercase style-1`}>
					Patripples Admin Access.
				</h1>

				<form className="flex column gap-medium width-full center">
					<div className="width-full flex row gap-small center">
						<LoginButton provider="Google" />
						<LoginButton provider="GitHub" />
					</div>
				</form>
			</section>
		</main>
	);
}
