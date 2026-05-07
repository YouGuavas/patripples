import Image from 'next/image';
import Link from 'next/link';
import { serviceType } from '../market/services';

type propsType = {
	title: string;
	description: string[];
	services: serviceType[];
};

export default function Rates(props: propsType) {
	return (
		<div className="flex column gap-medium center">
			{props.description.map((paragraph, index) => {
				return (
					<p key={index} className={`width-half center centered`}>
						{paragraph}
					</p>
				);
			})}
			<ul className={`flex gap-large center centered pad-none width-full`}>
				{props.services.map((service, index) => {
					return (
						<li
							key={index}
							className={`center centered z5 no-deco width-half flex column bordered`}
						>
							<h4 className="lowercase style-1 spaced">{service.title}</h4>
							<p>{`${service.rate.toString().replace('', '$')}.00`}</p>
							<p className="font-medium thin">{service.description}</p>
							{service.demo ? (
								<div>
									<p>
										Demo:{' '}
										<Link className={`no-deco spaced`} href={service.demo.href}>
											{service.demo.title}
										</Link>
									</p>
									{service.demo.images ? (
										<Image
											loading={
												props.title === "Patrick's Websites"
													? index === 0
														? 'eager'
														: 'lazy'
													: 'lazy'
											}
											fetchPriority={
												props.title === "Patrick's Websites"
													? index === 0
														? 'high'
														: 'low'
													: 'low'
											}
											src={service.demo.images[0]}
											alt={service.demo.title}
											height={200}
											width={250}
										/>
									) : null}
								</div>
							) : null}
							{/*<button
								className={`snipcart-add-item shop-button`}
								data-item-id={service.title.toUpperCase()}
								data-item-name={service.title}
								data-item-price={service.rate * 0.3}
								data-item-url={`/api/hire/${props.title}/route.ts`}
							>
								{`Pay $${service.rate * 0.3}.00 Deposit`}
							</button>*/}

							<button className={`snipcart-add-item shop-button`}>
								{`Payment Link Coming Soon!`}
							</button>
							{/*<Carousel images={service.demo.images} />*/}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
