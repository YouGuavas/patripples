type propsType = {
	author?: String;
	date: String;
	edited?: String;
};
export default function ByLine(props: propsType) {
	return (
		<div className={`left width-full left-align flex column gap-small`}>
			<p className={`margin-none style-1 lowercase left-align`}>
				By: {props.author ? props.author : 'Patrick Yambrick'}
			</p>

			<p className={`margin-none style-1 lowercase left-align`}>
				Published: {props.date}
			</p>
			<p className={`margin-none style-1 lowercase left-align`}>
				Last Edit: {props.edited ? props.edited : props.date}
			</p>
		</div>
	);
}
