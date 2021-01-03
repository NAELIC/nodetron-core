/* eslint-disable security/detect-object-injection */
import { HardwareInfo } from '@nodetron/types/league/grsim'

import { Robots_Status as RobotsStatus } from './compiled/compiledProtobufGrSimRobotStatus'

function castProtobufGrSimRobotsStatus(payload: RobotsStatus): Array<HardwareInfo> {
  const items: Array<HardwareInfo> = []

  if (payload.robotsStatus) {
    for (let i = 0; i < payload.robotsStatus.length; i += 1) {
      const item = payload.robotsStatus[i]

      items.push({
        id: item.robotId,
        infrared: item.infrared,
        kick: {
          chip: item.chipKick,
          flat: item.flatKick,
        },
      })
    }
  }

  return items
}

export default function processProtobufGrSimRobotsStatusMessage(buffer: Buffer): Array<HardwareInfo> {
  return castProtobufGrSimRobotsStatus(RobotsStatus.decode(buffer))
}
