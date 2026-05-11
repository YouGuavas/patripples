import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
export async function GET() {
	const products = await prisma.product.findMany();

	return NextResponse.json({ products: products });
}

export async function POST() {
	const products = await prisma.product.create({
		data: { title: 'test', price: 0, type: 'test' },
	});

	return NextResponse.json({ products: products });
}
