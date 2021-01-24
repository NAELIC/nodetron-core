import { CamerasDetection } from '../state'

import Filters from './filters'

export default class Thresold extends Filters {
  public constructor(
    public minConfidenceBall: number,
    public minConfidenceRobot: number,
  ) { super() }

  public filter(cameras: CamerasDetection): CamerasDetection {
    cameras.forEach((detections) => {
      detections.forEach((detection) => {
        detection.balls.filter(
          (ball) => ball.confidence > this.minConfidenceBall,
        )
        detection.robots.allies.filter(
          (robot) => robot.confidence > this.minConfidenceRobot,
        )
        detection.robots.opponents.filter(
          (robot) => robot.confidence > this.minConfidenceRobot,
        )
      })
    })
    return cameras
  }
}
