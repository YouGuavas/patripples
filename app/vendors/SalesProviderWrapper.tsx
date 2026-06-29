'use client';

import { SalesProvider } from '@/app/data/context/sales/SalesContext';

export function SalesProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SalesProvider>{children}</SalesProvider>;
}
