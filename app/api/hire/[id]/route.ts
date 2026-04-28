import { NextRequest, NextResponse } from 'next/server';
export interface SnipcartProduct {
	id: string;
	price: number;
	url: string; // The URL where Snipcart can find this JSON
	name?: string;
	description?: string;
	image?: string;
}

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = params.id;

	// Replace with your actual database/CMS fetch logic
	const product: SnipcartProduct = {
		id: id,
		price: 150.0,
		url: `https://patripples.com.com/${id}`,
		name: `${id}`,
	};

	return NextResponse.json(product);
}
