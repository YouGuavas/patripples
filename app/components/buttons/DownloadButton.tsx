'use server';
import { prisma } from '@/app/api/lib/prisma';

export default async function DownloadButton() {
	return (
		<button
			className={`download-button left-align style-1 lowercase rounded bordered px-1 flex column centered center darken`}
		>
			Download Data for Festival
		</button>
	);
}
