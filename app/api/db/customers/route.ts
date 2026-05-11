import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
export async function GET() {
	const clients = await prisma.customer.findMany();

	return NextResponse.json({ clients });
}
