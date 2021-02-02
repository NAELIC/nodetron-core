import { ServiceBroker } from 'moleculer'
import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum'

import Config from '../Config'

import { CamerasDetection, state } from './state'
import Merge from './filters/merge'
import Thresold from './filters/thresold'

const th = new Thresold(0.5, 0.5)
const m = new Merge()

export default function pipeline(broker: ServiceBroker,
  world: CamerasDetection): WorldMessage {
  m.filter(th.filter(world))

  const data = m.filter(th.filter(world))
  return {
    field: state.field,
    robots: data.robots,
    ball: data.ball,
    color: Config.yellow === true ? Color.YELLOW : Color.BLUE,
    // constant, TODO : READ THIS !
  } as WorldMessage
}
