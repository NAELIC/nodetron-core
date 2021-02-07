import { HardwareInfo } from '@nodetron/types/bots/hardware'
import { GameControllerEvent } from '@nodetron/types/network/game-controller'
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
  gameController: {} as GameControllerEvent,
  field: {
    length: 0,
    width: 0,
    goal: {
      width: 0,
      depth: 0,
    },
    penalty: {
      width: 0,
      depth: 0,
    },
    boundaryWidth: 0,
    centerMark: {
      center: { x: 0, y: 0 },
      radius: 0,
    },
  } as AbstractField,
}
