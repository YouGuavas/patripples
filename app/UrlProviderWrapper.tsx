'use client';

import { UrlProvider } from './context/UrlContext';
export function UrlProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <UrlProvider>{children}</UrlProvider>;
}
