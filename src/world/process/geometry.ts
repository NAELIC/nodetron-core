import { ServiceBroker } from 'moleculer'
import { VisionGeometryFieldSize } from '@nodetron/types/network/vision'

import { state } from '../state'

export default function processGeometry(
  broker: ServiceBroker,
  fieldPacket: VisionGeometryFieldSize,
): void {
  broker.logger.debug('Process field geometry packet')

  state.field.boundaryWidth = fieldPacket.boundaryWidth / 1000.0
  state.field.length = fieldPacket.length / 1000.0
  state.field.width = fieldPacket.width / 1000.0

  state.field.goal = {
    width: fieldPacket.goal.width / 1000.0,
    depth: fieldPacket.goal.depth / 1000.0,
  }

  // TODO : Can be collasped to array find
  fieldPacket.lines.forEach((line) => {
    if (line.name === 'LeftFieldLeftPenaltyStretch') {
      state.field.penalty = {
        depth: Math.abs(line.p1.x - line.p2.x) / 1000.0,
        width: Math.abs(2 * line.p1.y) / 1000.0,
      }
    }
  })

  fieldPacket.arcs.forEach((arc) => {
    if (arc.name === 'CenterCircle') {
      state.field.centerMark = {
        center: { x: arc.center.x / 1000.0, y: arc.center.y / 1000.0 },
        radius: arc.radius / 1000.0,
      }
    }
  })
}

