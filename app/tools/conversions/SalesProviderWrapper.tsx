'use client';

import { SalesProvider } from '@/app/context/SalesContext';

export function SalesProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SalesProvider>{children}</SalesProvider>;
}
