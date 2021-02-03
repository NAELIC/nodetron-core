/* eslint-disable security/detect-object-injection */
import { Kick } from '@nodetron/types/enum'
import { HardwareInfo } from '@nodetron/types/bots/hardware'

import { Robots_Status as RobotsStatus } from './compiled/compiledProtobufGrSimRobotStatus'

function castProtobufGrSimRobotsStatus(payload: RobotsStatus): Array<HardwareInfo> {
  const items: Array<HardwareInfo> = []

  if (payload.robotsStatus) {
    for (let i = 0; i < payload.robotsStatus.length; i += 1) {
      const item = payload.robotsStatus[i]

      let kick = Kick.NO

      if (item.chipKick) kick = Kick.CHIP
      else if (item.flatKick) kick = Kick.FLAT

      items.push({
        id: item.robotId,
        infrared: item.infrared,
        kick,
      })
    }
  }

  return items
}

export default function processProtobufGrSimRobotsStatusMessage(buffer: Buffer): Array<HardwareInfo> {
  return castProtobufGrSimRobotsStatus(RobotsStatus.decode(buffer))
}
