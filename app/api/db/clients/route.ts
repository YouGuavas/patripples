import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
export async function GET(req: Request) {
	console.log(prisma);
	const clients = await prisma.customer.findMany();

	return NextResponse.json({ clients });
}
