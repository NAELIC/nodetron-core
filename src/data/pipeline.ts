import { Ball } from '@nodetron/types/internal/data'
import { Robot } from '@nodetron/types/internal/robot'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import { ServiceBroker } from 'moleculer'

import Merge from './filters/merge'
import Thresold from './filters/thresold'

const th = new Thresold(0.5, 0.5)
const m = new Merge()

export default function pipeline(broker: ServiceBroker,
  data: Array<Array<VisionDetectionFrame>>): { ball: Ball, robots: { allies: Array<Robot>, opponents: Array<Robot> } } {
  return m.filter(th.filter(data))
}
