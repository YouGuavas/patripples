import Link from 'next/link';
type propsType = {
	title: string;
};

export default function Footer(props: propsType) {
	return (
		<section>
			<h3
				className={`lowercase style-1 thin spaced left width-full block left-align`}
			>
				Thanks for Reading
			</h3>
			<p className={`paragraph width-full block left-align`}>
				Thank you for reading {props.title}! Curious to know more about
				something you read here, or how to apply it?{' '}
				<Link
					className={`no-deco lowercase style-1 thin spaced color-2 rounded darken`}
					href="/contact"
				>
					Reach out to me
				</Link>{' '}
				and let&apos;s discuss the possibilities.
			</p>
		</section>
	);
}
