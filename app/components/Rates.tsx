import Link from 'next/link';
import { serviceType } from '../hire/services';

type propsType = {
	title: string;
	description: string;
	services: serviceType[];
};

export default function Rates(props: propsType) {
	return (
		<div className="flex column gap-medium center">
			<h3 className="uppercase style-1 spaced" id={props.title}>
				{props.title}
			</h3>
			<p className={`width-half center centered`}>{props.description}</p>
			<ul className={`flex gap-large center centered pad-none width-full`}>
				{props.services.map((service, index) => {
					return (
						<li
							key={index}
							className={`center centered z5 no-deco width-half flex column bordered`}
						>
							<h4 className="lowercase style-1 spaced">{service.title}</h4>
							<p>{service.rate}</p>
							<p className="font-medium thin">{service.description}</p>
							<p>
								Demo:{' '}
								<Link className={`no-deco spaced`} href={service.demo.href}>
									{service.demo.title}
								</Link>
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
