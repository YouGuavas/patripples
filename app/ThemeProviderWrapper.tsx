'use client';

import { ThemeProvider } from './theme/ThemeContext';

export function ThemeProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
