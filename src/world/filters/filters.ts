import { CamerasDetection, DetectionWorld } from '../state'

export default abstract class Filters {
  public abstract filter(
    world: CamerasDetection
  ): CamerasDetection | DetectionWorld
}
