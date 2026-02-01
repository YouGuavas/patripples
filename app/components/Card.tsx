type propsType = {
	title: String;
	subject?: String;
	body: String;
	footer: String;
};
export default function Card(props: propsType) {
	return (
		<div
			className={` left-align style-1 lowercase rounded bordered px-2 width-full flex column`}
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
					<em>What are {props.title}? </em>
					{props.body}
				</p>
			</div>
			<div className={`flex row left`}>
				<p>
					<em>Why do {props.title} matter? </em>
					{props.footer}
				</p>
			</div>
		</div>
	);
}
