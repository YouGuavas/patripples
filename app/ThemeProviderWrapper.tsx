'use client';

import { SpaceProvider, GreenProvider } from './theme/ThemeContext';

export function SpaceProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SpaceProvider>{children}</SpaceProvider>;
}

export function GreenProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <GreenProvider>{children}</GreenProvider>;
}
