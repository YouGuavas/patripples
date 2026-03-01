import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Patripples | Bird Note',
	description: 'Observed bird behaviors',
};
export default function Home() {
	return (
		<main className={`main center`}>
			<h1 className={`style-1 thin lowercase`}>Note About Bird Behavior</h1>
			<p className={`paragraph left-align`}>
				Over the last two months, I have been interacting with the local bird
				population, most frequently with the same pair of large crows. I do this
				primarily by whistle (and their caws in return), though one did attempt
				to teach me to &quot;rattle.&quot; I am working on improving that skill.
			</p>
			<p className={`paragraph left-align`}>
				-I observed a seagull playing in a rising thermal above what I now
				suspect to be a gas vent caused by local gas transfer disruption. At the
				time: just a happy seagull doing its spirals. Still, the crows had led
				me here, and the scene deserves a full description of its own. For now:
				seagull steam spiral. In Michigan. In early March.{' '}
			</p>
			<p className={`paragraph left-align`}>
				-I observed one of my pair of &quot;guides&quot; (crows) play in the
				same vent at a later date. This triggered me to recall the previous,
				seagull interaction, which I had logged as &quot;normal.&quot; But it
				was early March - in Michigan - when I witnessed the seagull at play.
				This is significant, because normal weather patterns for the area at
				that time of year suggest that thermals should be weak - nearly
				nonexistent. So what caused the thermal to exist on both of those days,
				let alone with such strength? Gas displacement?
			</p>
			<p className={`paragraph left-align`}>
				-This triggered a thought about that helicopter crash (I need to look it
				up, as the details are hazy, but you know the one) - which happened at
				an airport surrounded by water, at a time when control was understaffed.
				What if there were some similar weather effect occurring? Like the earth
				trying to cough out the tickle in her throat that just won&apos;t leave
				- those coughs will happen almost randomly. If one of those coughs were
				to happen at the wrong time, then control&apos;s margin for error would
				arbitrarily shrink relative to the Earth&apos;s localized ability to
				&quot;suppress the cough,&quot; so to speak. While at the same time,
				localized airflows and their boundaries would shift chaotically. This
				would create a chaotic loop - in your mind&apos;s eye, picture a
				vibrating Mobius Strip (*make separate note later), with a dot moving
				about the strip&apos;s shifting face. Now, try to stop that dot with
				your fingertip. I would not blame DEI for that one. I might pause for a
				moment and weigh agreements like those made to clear forests in exchange
				for solar panels. I&apos;m not great with graphs, but I might think to
				ask: where does lefty green tech intersect with almighty right&apos;s
				supreme *coughs* Brilliance? We could all just toss some logs in some
				swamps for a bit. Let the swamp drain itself. For just a little bit. You
				know - ease off the gas, just a touch?
			</p>
		</main>
	);
}
