import { AbstractBall, AbstractRobot } from '@nodetron/types/world'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import { ServiceBroker } from 'moleculer'

import Merge from './filters/merge'
import Thresold from './filters/thresold'

const th = new Thresold(0.5, 0.5)
const m = new Merge()

export default function pipeline(broker: ServiceBroker,
  world: Array<Array<VisionDetectionFrame>>):
  { ball: AbstractBall,
    robots: { allies: Array<AbstractRobot>,
      opponents: Array<AbstractRobot>, }, } {
  return m.filter(th.filter(world))
}
