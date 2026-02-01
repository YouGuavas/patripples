type propsType = {
	title: string;
	subject?: string;
	body?: string;
	footer?: string;
};
export default function Card(props: propsType) {
	return (
		<div
			className={` left-align style-1 lowercase rounded bordered px-1 flex column`}
		>
			<div className={`flex row center gap-large`}>
				<h4 className={``}>{props.title}</h4>
				<p>
					<em>Subject: </em>
					{props.subject}
				</p>
			</div>
			<div className={`flex row left`}>
				<p>
					<em>Describing {props.title}: </em>
					{props.body}
				</p>
			</div>
			<div className={`flex row left`}>
				<p>
					<em>Explaining the value of {props.title}: </em>
					{props.footer}
				</p>
			</div>
		</div>
	);
}
