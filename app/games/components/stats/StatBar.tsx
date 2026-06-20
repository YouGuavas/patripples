type propsType = {
	title: string;
	stats: statsType;
};

type statsType = {
	level: number;
	health: number;
	baseHealth: number;
};
export default function StatBar(props: propsType) {
	const { stats } = props;
	return (
		<ul
			className={` left-align centered width-half style-1 lowercase rounded borderless px-1 flex row no-deco`}
		>
			<li>Level: {stats.level}</li>
			<li>Health: {`${stats.health}/${stats.baseHealth}`}</li>
		</ul>
	);
}
