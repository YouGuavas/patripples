'use client';

export default function PostItemForm() {
	async function postProduct(url = '', data: Record<string, unknown> = {}) {
		const response = await fetch(url, {
			method: 'POST', // Specify the method
			headers: {
				'Content-Type': 'application/json', // Tell the server you're sending JSON
			},
			body: JSON.stringify(data), // Convert data to string
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json(); // Parse the response body as JSON
	}
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				postProduct('./api/db/products', {
					title: 'test',
					price: 10,
					type: 'test',
				});
			}}
		>
			<button type="submit">Post</button>
		</form>
	);
}
