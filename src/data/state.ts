import { VisionDetectionFrame } from '@nodetron/types/league/vision'

// interface CameraData {
//     vision: Array<Vision>,
//     lastTime: number,
// }

const cameraState: Array<Array<VisionDetectionFrame>> = [
  [],
  [],
  [],
  [],
]

export default cameraState
