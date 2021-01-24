import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import { AbstractBall, AbstractField, AbstractRobot } from '@nodetron/types/world'

import Config from '../Config'

export const fieldState: AbstractField = {
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
}

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
}
