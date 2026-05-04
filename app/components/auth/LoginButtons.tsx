'use client';
import { signIn } from 'next-auth/react';

type propsType = {
	provider: string;
};

export default function LoginButton(props: propsType) {
	return (
		<button
			onClick={() =>
				signIn(props.provider.toLowerCase(), {
					callbackUrl: '/admin/dashboard',
				})
			}
			className="style-1 spaced thin lowercase"
		>
			Sign in with {props.provider}
		</button>
	);
}
