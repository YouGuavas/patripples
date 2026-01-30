type propsType = {
	author: String;
	date: String;
};
export default function ByLine(props: propsType) {
	return (
		<div className={`left width-full left-align flex column`}>
			<p className={`style-1 lowercase left-align`}>
				By: {props.author ? props.author : 'Patrick Yambrick'}
			</p>

			<p className={`style-1 lowercase left-align`}>Published: {props.date}</p>
		</div>
	);
}
