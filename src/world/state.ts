import { HardwareInfo } from '@nodetron/types/bots/hardware'
import { VisionDetectionFrame } from '@nodetron/types/network/vision'
import { AbstractBall, AbstractField, AbstractRobot } from '@nodetron/types/world'

import Config from '../Config'

export type Detection = Array<VisionDetectionFrame>;
export type CamerasDetection = Array<Detection>;
export type DetectionWorld = {
  ball: AbstractBall,
  robots: {
    allies: Array<AbstractRobot>,
    opponents: Array<AbstractRobot>,
  },
}

const cameras: CamerasDetection = new Array(Config.cameras_number)
  .fill(0)
  .map(() => [])

export const state = {
  cameras,
  lastHardwareInfo: {} as Array<HardwareInfo>,
  field: { } as AbstractField,
}
