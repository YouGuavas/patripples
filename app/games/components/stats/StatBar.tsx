import weapons from '../../dungeon/data/weapons.json';
type propsType = {
	stats: statsType;
};

type statsType = {
	level: number;
	health: number;
	baseHealth: number;
	xp: number;
  
	weapon: string;
};
export default function StatBar(props: propsType) {
	const { stats } = props;
	const weapon = weapons.find((weapon) => {
		return weapon.id === stats.weapon;
	});
	return (
		<ul
			className={` left-align centered width-half style-1 lowercase rounded borderless px-1 flex row no-deco`}
		>
			<li>Level: {stats.level}</li>
			<li>Xp: {stats.xp}</li>
			<li>Health: {`${stats.health}/${stats.baseHealth}`}</li>
      <li>Attack: {}</li>
			<li>Weapon: {weapon ? weapon.name : 'fists'}</li>
		</ul>
	);
}
