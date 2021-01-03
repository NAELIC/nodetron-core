import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import { ServiceBroker } from 'moleculer'

import Merge from './filters/merge'
import Thresold from './filters/thresold'

const th = new Thresold(0.5, 0.5)
const m = new Merge()

export default function pipeline(broker: ServiceBroker,
  data: Array<Array<VisionDetectionFrame>>): void {
  data = th.filter(data)
  broker.logger.debug(m.filter(data))
  // return {}
}
