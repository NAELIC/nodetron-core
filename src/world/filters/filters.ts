import { AbstractBall, AbstractRobot } from '@nodetron/types/world'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'

export default abstract class Filters {
    public abstract filter(world: Array<Array<VisionDetectionFrame>>):
    Array<Array<VisionDetectionFrame>>|
    {ball : AbstractBall, robots: { allies: Array<AbstractRobot>, opponents: Array<AbstractRobot>}}
    // TODO : Supress this long lines !
}
