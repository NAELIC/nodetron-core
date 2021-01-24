import { ServiceBroker } from 'moleculer'

import { CamerasDetection, DetectionWorld } from './state'
import Merge from './filters/merge'
import Thresold from './filters/thresold'

const th = new Thresold(0.5, 0.5)
const m = new Merge()

export default function pipeline(broker: ServiceBroker,
  world: CamerasDetection): DetectionWorld {
  return m.filter(th.filter(world))
}
