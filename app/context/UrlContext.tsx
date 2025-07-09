'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type UrlContextType = string;

export const UrlContext = createContext<UrlContextType>(
	'https://patripples.com/'
);

export const UrlProvider = ({ children }: { children: React.ReactNode }) => {
	const [url, setUrl] = useState<string>('https://patripples.com/');

	return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>;
};
