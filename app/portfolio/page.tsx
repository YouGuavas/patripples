'use client';
import Link from 'next/link';

import Image from 'next/image';
import { projects } from './projects';
import { testimonials } from './testimonials';

import Collapsible from '@/app/components/blog/Collapsible';

export default function Home() {
	return (
		<main className={`main center`}>
			<Collapsible title="Projects" orientation="center">
				<ul className=" flex gap-medium">
					{projects.map((project, index) => {
						return (
							<li
								key={index}
								className={`center centered z5 no-deco width-half flex column bordered px-2`}
							>
								<h4 className="lowercase style-1 spaced">{project.title}</h4>
								<p className="font-medium thin">{project.description}</p>
								{project.demo ? (
									<div>
										<p>
											Demo:{' '}
											<Link
												className={`no-deco spaced`}
												href={project.demo.href}
											>
												{project.demo.title}
											</Link>
										</p>
										{project.demo.images ? (
											<Image
												loading={
													project.title === "Patrick's Websites"
														? index === 0
															? 'eager'
															: 'lazy'
														: 'lazy'
												}
												fetchPriority={
													project.title === "Patrick's Websites"
														? index === 0
															? 'high'
															: 'low'
														: 'low'
												}
												src={project.demo.images[0]}
												alt={project.demo.title}
												height={200}
												width={250}
											/>
										) : null}
									</div>
								) : null}

								{/*<Carousel images={project.demo.images} />*/}
							</li>
						);
					})}
				</ul>
			</Collapsible>
			<Collapsible title="Testimonials" orientation="center">
				<ul className=" flex gap-medium">
					{testimonials.map((testimonial: any, index: number) => {
						return (
							<li
								key={index}
								className={`center centered z5 no-deco width-half flex column bordered px-2`}
							>
								<h4 className="lowercase style-1 spaced">
									{testimonial.title}
								</h4>
								<p className="font-medium thin">{testimonial.description}</p>
								{testimonial.demo ? (
									<div>
										{testimonial.demo.images ? (
											<Image
												loading={
													testimonial.title === "Patrick's Websites"
														? index === 0
															? 'eager'
															: 'lazy'
														: 'lazy'
												}
												fetchPriority={
													testimonial.title === "Patrick's Websites"
														? index === 0
															? 'high'
															: 'low'
														: 'low'
												}
												src={testimonial.demo.images[0]}
												alt={testimonial.title}
												height={250}
												width={250}
											/>
										) : null}
									</div>
								) : null}

								{/*<Carousel images={project.demo.images} />*/}
							</li>
						);
					})}
				</ul>
			</Collapsible>

			<section className={`width-full`}>
				<h2 className="lowercase style-1 thin">Want to work with Patrick?</h2>
				<p className={`style-1`}>
					Tip me on{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.paypal.com/ncp/payment/CNTTTX8KJLDRJ"
					>
						Paypal
					</Link>
					.
				</p>

				<p>
					Email me for orders or further questions:{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:patrickyambrick@gmail.com"
					>
						patrickyambrick@gmail.com
					</Link>{' '}
					.
				</p>
				<p>Or DM me through the platform you found me on.</p>
			</section>
		</main>
	);
}
