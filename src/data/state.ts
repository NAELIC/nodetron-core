import { Field } from '@nodetron/types/internal/data'
import { VisionDetectionFrame } from '@nodetron/types/league/vision'

// interface CameraData {
//     vision: Array<Vision>,
//     lastTime: number,
// }

export const geometryState: Field = {
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
  center: {
    center: {
      x: 0,
      y: 0,
    },
    radius: 0,
  },
}

export const cameraState: Array<Array<VisionDetectionFrame>> = [
  [],
  [],
  [],
  [],
]

