import { VisionDetectionFrame } from '@nodetron/types/league/vision'

import Filters from './filters'

export default class Thresold extends Filters {
  public constructor(
    public minConfidenceBall: number,
    public minConfidenceRobot: number,
  ) { super() }

  public filter(data: VisionDetectionFrame[][]): VisionDetectionFrame[][] {
    data.forEach((cameraValue) => {
      cameraValue.forEach((detection) => {
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
    return data
  }
}
