import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
export async function GET(req: Request) {
	console.log(prisma);
	//const clients = prisma.clients.find('');

	return NextResponse.json({ prisma });
}
