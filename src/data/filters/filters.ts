import { IBall, IRobot } from '@nodetron/types/data'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'

export default abstract class Filters {
    public abstract filter(data: Array<Array<VisionDetectionFrame>>):
    Array<Array<VisionDetectionFrame>>|
    {ball : IBall, robots: { allies: Array<IRobot>, opponents: Array<IRobot>}}
    // TODO : Supress this long lines !
}
