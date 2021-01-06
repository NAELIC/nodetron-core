import { ServiceBroker } from 'moleculer'
import { VisionGeometryFieldSize } from '@nodetron/types/league/vision'

import { fieldState } from '../state'

export default function processGeometry(
  broker: ServiceBroker,
  fieldPacket: VisionGeometryFieldSize,
): void {
  broker.logger.debug('Process field geometry packet')

  fieldState.boundaryWidth = fieldPacket.boundaryWidth / 1000.0
  fieldState.length = fieldPacket.length / 1000.0
  fieldState.width = fieldPacket.width / 1000.0

  fieldState.goal = {
    width: fieldPacket.goal.width / 1000.0,
    depth: fieldPacket.goal.depth / 1000.0,
  }

  // TODO : Can be collasped to array find
  let pdepth = 0
  let pwidth = 0
  fieldPacket.lines.forEach((line) => {
    if (line.name === 'LeftFieldLeftPenaltyStretch') {
      pdepth = Math.abs(line.p1.x - line.p2.x) / 1000.0
      pwidth = Math.abs(2 * line.p1.y) / 1000.0
    }
  })

  fieldState.penalty = {
    depth: pdepth,
    width: pwidth,
  }

  fieldPacket.arcs.forEach((arc) => {
    if (arc.name === 'CenterCircle') {
      fieldState.center = {
        center: {
          x: arc.center.x / 1000.0,
          y: arc.center.y / 1000.0,
        },
        radius: arc.radius / 1000.0,
      }
    }
  })
}

