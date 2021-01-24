import { VisionDetectionFrame } from '@nodetron/types/league/vision'
import { AbstractField } from '@nodetron/types/world'

// interface CameraData {
//     vision: Array<Vision>,
//     lastTime: number,
// }

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

export const cameraState: Array<Array<VisionDetectionFrame>> = [
  [],
  [],
  [],
  [],
]

