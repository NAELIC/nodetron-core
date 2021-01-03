import { Ball } from '@nodetron/types/internal/data'
import { Robot } from '@nodetron/types/internal/robot'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'

export default abstract class Filters {
    public abstract filter(data: Array<Array<VisionDetectionFrame>>):
    Array<Array<VisionDetectionFrame>>|
    {ball : Ball, robots: { allies: Array<Robot>, opponents: Array<Robot>}}
    // TODO : Supress this long lines !
}
